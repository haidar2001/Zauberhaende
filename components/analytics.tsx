"use client"

import Script from "next/script"
import { useEffect } from "react"

const UMAMI_WEBSITE_ID = "035a9b16-9635-40e4-9f2f-64fc17b39110"

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string>) => void }
  }
}

// Wo auf der Seite geklickt wurde: eigene Markierung, sonst Navigation, Footer oder Inhalt
function getPosition(element: Element) {
  const marked = element.closest<HTMLElement>("[data-track-position]")
  if (marked) return marked.dataset.trackPosition ?? "Inhalt"
  if (element.closest("footer")) return "Footer"
  if (element.closest("nav")) return "Navigation"
  return "Inhalt"
}

function getEventName(href: string, url: URL) {
  if (href.startsWith("tel:")) return "Anrufen"
  if (href.startsWith("mailto:")) return "E-Mail"
  if (url.hostname.includes("google.") && url.pathname.startsWith("/maps")) return "Route"
  if (/facebook|tiktok|pinterest|instagram/.test(url.hostname)) return "Social Media"
  if (url.origin !== window.location.origin) return "Externer Link"
  return "Interner Link"
}

// Zählt jeden Klick auf einen Link automatisch, auch auf Links, die später dazukommen
export function Analytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link || link.closest("[data-umami-event]")) return

      const href = link.getAttribute("href") ?? ""
      const url = new URL(link.href, window.location.href)
      window.umami?.track(getEventName(href, url), {
        seite: window.location.pathname,
        position: getPosition(link),
        text: ((link.textContent ?? "").trim() || link.getAttribute("aria-label") || "").replace(/\s+/g, " ").slice(0, 60),
        ziel:
          href.startsWith("tel:") || href.startsWith("mailto:")
            ? href.split("?")[0]
            : url.origin === window.location.origin
              ? url.pathname
              : url.origin + url.pathname,
      })
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return <Script defer src="https://cloud.umami.is/script.js" data-website-id={UMAMI_WEBSITE_ID} strategy="afterInteractive" />
}
