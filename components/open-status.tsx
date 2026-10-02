"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// Öffnungszeiten in Minuten ab Mitternacht (0 = Sonntag … 6 = Samstag)
const HOURS: Record<number, [number, number][]> = {
  0: [],
  1: [[600, 780], [840, 1080]],
  2: [[600, 780], [840, 1080]],
  3: [[600, 780]],
  4: [[600, 780], [840, 1080]],
  5: [[600, 780], [840, 1080]],
  6: [[600, 780]],
}
const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]

// "18" statt "18:00" – kurz genug, damit die Anzeige auch am kleinen Handy einzeilig bleibt
const fmt = (m: number) => (m % 60 === 0 ? String(m / 60) : `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`)

function berlinNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date())
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? ""
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"))
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) }
}

export function getOpenStatus({ day, minutes } = berlinNow()) {
  const today = HOURS[day]
  const idx = today.findIndex(([o, c]) => minutes >= o && minutes < c)

  if (idx !== -1) {
    const closesToday = today[today.length - 1][1]
    const next = today[idx + 1]
    // Vormittags an Tagen mit Nachmittagsöffnung: Mittagspause dazusagen,
    // sonst denkt man, es wäre nur bis 13 Uhr geöffnet.
    if (next) {
      return {
        open: true,
        text: `Geöffnet bis ${fmt(closesToday)} Uhr · Pause ${fmt(today[idx][1])}–${fmt(next[0])} Uhr`,
      }
    }
    return { open: true, text: `Jetzt geöffnet · bis ${fmt(closesToday)} Uhr` }
  }

  const laterToday = today.find(([o]) => minutes < o)
  if (laterToday) {
    const isLunchBreak = today.some(([, c]) => minutes >= c)
    return {
      open: false,
      text: isLunchBreak
        ? `Mittagspause · ab ${fmt(laterToday[0])} Uhr wieder offen`
        : `Öffnet heute um ${fmt(laterToday[0])} Uhr`,
    }
  }

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    if (HOURS[d].length) {
      const when = i === 1 ? "morgen" : DAY_NAMES[d]
      return { open: false, text: `Öffnet ${when} um ${fmt(HOURS[d][0][0])} Uhr` }
    }
  }
  return { open: false, text: "" }
}

/** Live-Anzeige "Jetzt geöffnet" – wird erst im Browser berechnet (keine falsche Uhrzeit aus dem Build). */
export function OpenStatus({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const [status, setStatus] = useState<ReturnType<typeof getOpenStatus> | null>(null)

  useEffect(() => {
    setStatus(getOpenStatus())
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <p
      aria-live="polite"
      className={cn(
        "open-status inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium backdrop-blur",
        tone === "dark" ? "bg-black/35 text-white" : "bg-primary-foreground/10 text-primary-foreground",
        // Platz reservieren und erst einblenden, wenn der Status feststeht (kein Springen)
        status ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn("open-status-dot relative h-2 w-2 rounded-full", status?.open ? "bg-emerald-400" : "bg-amber-400")}
        data-open={status?.open ? "" : undefined}
      />
      {status?.text ?? "Öffnungszeiten"}
    </p>
  )
}
