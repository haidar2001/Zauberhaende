"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Blendet Inhalte beim ersten Hineinscrollen sanft ein (einmalig).
 * Ohne JavaScript bzw. bei "Bewegung reduzieren" bleibt alles sofort sichtbar
 * (siehe .reveal in globals.css). Kinder mit [data-reveal-item] erscheinen
 * nacheinander (Stagger).
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  stagger = 70,
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  /** Abstand zwischen den einzelnen [data-reveal-item]-Elementen in ms */
  stagger?: number
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.querySelectorAll<HTMLElement>("[data-reveal-item]").forEach((item, i) => {
      item.style.setProperty("--reveal-delay", `${i * stagger}ms`)
    })

    if (!("IntersectionObserver" in window)) {
      el.dataset.visible = ""
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).dataset.visible = ""
            observer.disconnect()
          }
        }
      },
      // erst auslösen, wenn der Bereich wirklich ein Stück im Bild ist
      { rootMargin: "0px 0px -12% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [stagger])

  return (
    <Tag ref={ref} className={cn("reveal", className)}>
      {children}
    </Tag>
  )
}
