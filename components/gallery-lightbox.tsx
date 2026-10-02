"use client"

import { useCallback, useEffect, useLayoutEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Spring, project, rubberband } from "@/lib/spring"

interface GalleryItem {
  id: number
  type: "image" | "video"
  src: string
  title: string
  description: string
}

interface GalleryLightboxProps {
  items: GalleryItem[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
  /** Position der Kachel, aus der das Bild aufgeht (und in die es zurückfliegt) */
  getOriginRect?: (index: number) => DOMRect | null
}

// Federn nach Apple: kritisch gedämpft (kein Nachwippen) für alles, was nicht geworfen wurde
const PAGE_SPRING = { response: 0.35, damping: 1 }
const OPEN_SPRING = { response: 0.42, damping: 1 }
const AXIS_THRESHOLD = 10 // px Hysterese, bevor eine Richtung feststeht

type Sample = { t: number; x: number; y: number }

export function GalleryLightbox({ items, currentIndex, onClose, onNavigate, getOriginRect }: GalleryLightboxProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const chromeRef = useRef<HTMLDivElement>(null)
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([])

  const indexRef = useRef(currentIndex)
  const closingRef = useRef(false)
  const reduceMotion = useRef(false)
  const originRef = useRef<{ dx: number; dy: number; s: number } | null>(null)

  // Federn: x = Blättern (px), y = Wegziehen (px), p = Öffnen 0…1
  const springs = useRef<{ x: Spring; y: Spring; p: Spring } | null>(null)

  const width = () => window.innerWidth
  const height = () => window.innerHeight

  /** Alle drei Federwerte in einem Frame auf die Elemente anwenden */
  const render = useCallback(() => {
    const s = springs.current
    if (!s) return
    const x = s.x.value
    const y = s.y.value
    const p = s.p.value
    const H = height()

    // Wegziehen: Bild wird kleiner, Hintergrund heller – zeigt an, dass Loslassen schließt
    const pull = Math.min(Math.abs(y) / H, 1)
    const pullScale = 1 - pull * 0.3

    if (trackRef.current) trackRef.current.style.transform = `translate3d(${x}px,0,0)`

    const media = mediaRefs.current[indexRef.current]
    if (media) {
      const o = originRef.current
      if (o && !reduceMotion.current) {
        const q = 1 - p
        const scale = (1 + (o.s - 1) * q) * pullScale
        media.style.transform = `translate3d(${o.dx * q}px,${o.dy * q + y}px,0) scale(${scale})`
      } else {
        const scale = reduceMotion.current ? 1 : (0.96 + 0.04 * p) * pullScale
        media.style.transform = `translate3d(0,${y}px,0) scale(${scale})`
        if (!o || reduceMotion.current) media.style.opacity = String(p)
      }
    }

    const fade = 1 - Math.min(pull / 0.6, 1) * 0.85
    if (backdropRef.current) backdropRef.current.style.opacity = String(p * fade)
    if (chromeRef.current) chromeRef.current.style.opacity = String(Math.max(0, p * 2 - 1) * Math.max(0, 1 - pull * 2.5))
  }, [])

  /** Ausgangspunkt (Kachel) relativ zur Endposition des Bildes messen */
  const measureOrigin = useCallback(
    (index: number) => {
      const media = mediaRefs.current[index]
      const tile = getOriginRect?.(index)
      if (!media || !tile) return null
      const visible = tile.bottom > 0 && tile.top < height() && tile.width > 0
      if (!visible) return null
      const prev = media.style.transform
      media.style.transform = "none"
      const box = media.getBoundingClientRect()
      media.style.transform = prev
      return {
        dx: tile.left + tile.width / 2 - (box.left + box.width / 2),
        dy: tile.top + tile.height / 2 - (box.top + box.height / 2),
        s: tile.width / box.width,
      }
    },
    [getOriginRect],
  )

  const close = useCallback(
    (velocityY = 0) => {
      const s = springs.current
      if (!s || closingRef.current) return
      closingRef.current = true
      // zurück in die Kachel, aus der es kam – derselbe Weg wie beim Öffnen
      originRef.current = measureOrigin(indexRef.current)
      mediaRefs.current.forEach((m, i) => {
        if (m && i !== indexRef.current) m.style.opacity = "0"
      })
      s.y.to(0, { ...OPEN_SPRING, velocity: velocityY })
      s.p.to(0, OPEN_SPRING, onClose)
    },
    [measureOrigin, onClose],
  )

  const goTo = useCallback(
    (index: number, velocity?: number) => {
      const s = springs.current
      if (!s) return
      const i = Math.max(0, Math.min(items.length - 1, index))
      if (i !== indexRef.current) {
        // Transform des alten Bildes zurücksetzen, sonst bleibt es klein/versetzt stehen
        const old = mediaRefs.current[indexRef.current]
        if (old) old.style.transform = ""
        indexRef.current = i
        onNavigate(i)
        mediaRefs.current.forEach((m) => m?.querySelector("video")?.pause())
      }
      if (reduceMotion.current && velocity === undefined) s.x.set(-i * width())
      else s.x.to(-i * width(), { ...PAGE_SPRING, velocity })
    },
    [items.length, onNavigate],
  )

  // Federn anlegen und aus der Kachel heraus öffnen
  useLayoutEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const x = new Spring(-currentIndex * width(), () => render())
    const y = new Spring(0, () => render())
    const p = new Spring(0, () => render(), 0.001)
    springs.current = { x, y, p }
    originRef.current = measureOrigin(currentIndex)
    render()
    p.to(1, OPEN_SPRING)
    return () => {
      x.stop()
      y.stop()
      p.stop()
    }
    // nur beim Öffnen
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Externe Index-Änderungen (Tastatur) nachziehen
  useEffect(() => {
    if (currentIndex !== indexRef.current) goTo(currentIndex)
  }, [currentIndex, goTo])

  // Tastatur
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") goTo(indexRef.current - 1)
      if (e.key === "ArrowRight") goTo(indexRef.current + 1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [close, goTo])

  // Seite dahinter nicht scrollen; bei Größenänderung auf die Seite einrasten
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onResize = () => springs.current?.x.set(-indexRef.current * width())
    window.addEventListener("resize", onResize)
    rootRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // ---- Gesten: 1:1 folgen, Richtung nach 10px festlegen, Schwung beim Loslassen übernehmen ----
  const gesture = useRef<{
    id: number
    startX: number
    startY: number
    baseX: number
    baseY: number
    axis: "x" | "y" | null
    history: Sample[]
    onMedia: boolean
  } | null>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    const s = springs.current
    if (!s || closingRef.current || e.button !== 0) return
    const target = e.target as HTMLElement
    if (target.closest("button, video, a")) return
    e.currentTarget.setPointerCapture(e.pointerId)
    // Unterbrechen: laufende Animation anhalten und vom aktuellen Bildschirmwert weitermachen
    s.x.stop()
    s.y.stop()
    gesture.current = {
      id: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      baseX: s.x.value,
      baseY: s.y.value,
      axis: null,
      history: [{ t: performance.now(), x: e.clientX, y: e.clientY }],
      onMedia: !!target.closest("[data-lightbox-media]"),
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    const g = gesture.current
    const s = springs.current
    if (!g || !s || g.id !== e.pointerId) return
    const dx = e.clientX - g.startX
    const dy = e.clientY - g.startY
    if (!g.axis) {
      if (Math.hypot(dx, dy) < AXIS_THRESHOLD) return
      g.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y"
    }
    const now = performance.now()
    g.history.push({ t: now, x: e.clientX, y: e.clientY })
    g.history = g.history.filter((h) => now - h.t < 100)

    if (g.axis === "x") {
      const W = width()
      const min = -(items.length - 1) * W
      let raw = g.baseX + dx
      if (raw > 0) raw = rubberband(raw, W)
      else if (raw < min) raw = min - rubberband(min - raw, W)
      s.x.set(raw)
    } else {
      s.y.set(g.baseY + dy)
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const g = gesture.current
    const s = springs.current
    gesture.current = null
    if (!g || !s || g.id !== e.pointerId) return

    // Tippen ohne Bewegung neben das Bild = schließen
    if (!g.axis) {
      if (!g.onMedia) close()
      return
    }

    const first = g.history[0]
    const last = g.history[g.history.length - 1]
    const dt = Math.max((last.t - first.t) / 1000, 0.001)
    const vx = g.history.length > 1 ? (last.x - first.x) / dt : 0
    const vy = g.history.length > 1 ? (last.y - first.y) / dt : 0

    if (g.axis === "x") {
      // Wohin würde der Schwung das Bild tragen? Dort einrasten – höchstens eine Seite weiter.
      const W = width()
      const projected = s.x.value + project(vx)
      const i = indexRef.current
      const next = Math.max(i - 1, Math.min(i + 1, Math.round(-projected / W)))
      goTo(next, vx)
    } else {
      const projected = s.y.value + project(vy)
      if (Math.abs(projected) > height() * 0.22) close(vy)
      else s.y.to(0, { ...PAGE_SPRING, velocity: vy })
    }
  }

  const current = items[currentIndex]

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      tabIndex={-1}
      className="lightbox fixed inset-0 z-50 overscroll-contain outline-none"
    >
      <div ref={backdropRef} className="absolute inset-0 bg-black/95" style={{ opacity: 0 }} />

      {/* Gestenfläche: alles darunter folgt dem Finger */}
      <div
        className="absolute inset-0 overflow-hidden touch-none select-none cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={trackRef} className="flex h-full will-change-transform">
          {items.map((item, i) => (
            <div key={item.id} className="flex h-full w-screen shrink-0 items-center justify-center px-4 pt-16 pb-40 md:px-20 md:pb-36">
              <div
                ref={(el) => {
                  mediaRefs.current[i] = el
                }}
                data-lightbox-media
                className="relative h-full w-full max-w-6xl will-change-transform"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    draggable={false}
                    className="pointer-events-none object-contain"
                    sizes="100vw"
                    priority={i === currentIndex}
                  />
                ) : (
                  <video src={item.src} className="h-full w-full rounded-lg object-contain" controls playsInline>
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bedienelemente und Bildtext – blenden beim Wegziehen aus */}
      <div ref={chromeRef} className="pointer-events-none absolute inset-0" style={{ opacity: 0 }}>
        <button
          onClick={() => close()}
          className="lightbox-btn pointer-events-auto absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] rounded-full p-2"
          aria-label="Schließen"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {currentIndex > 0 && (
          <button
            onClick={() => goTo(currentIndex - 1)}
            className="lightbox-btn pointer-events-auto absolute top-1/2 left-[max(1rem,env(safe-area-inset-left))] hidden -translate-y-1/2 rounded-full p-2 md:block"
            aria-label="Vorheriges"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        )}
        {currentIndex < items.length - 1 && (
          <button
            onClick={() => goTo(currentIndex + 1)}
            className="lightbox-btn pointer-events-auto absolute top-1/2 right-[max(1rem,env(safe-area-inset-right))] hidden -translate-y-1/2 rounded-full p-2 md:block"
            aria-label="Nächstes"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        )}

        <div className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
          <h3 className="mx-auto mb-1 max-w-2xl text-lg font-semibold tracking-[-0.01em] text-white md:text-xl">
            {current.title}
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-white/75 md:text-base">{current.description}</p>
          {/* Seitenpunkte: zeigen, wo man ist und dass man wischen kann */}
          <div className="mt-3 flex justify-center gap-1.5" aria-label={`Bild ${currentIndex + 1} von ${items.length}`}>
            {items.map((item, i) => (
              <span
                key={item.id}
                className={`h-1.5 rounded-full bg-white transition-[width,opacity] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === currentIndex ? "w-4 opacity-100" : "w-1.5 opacity-40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
