import { Mail, Navigation, Phone } from "lucide-react"
import { MAPS_URL } from "@/lib/business"

const itemClass =
  "flex min-h-[3.75rem] flex-col items-center justify-center gap-0.5 py-2 text-sm font-semibold transition-[scale,background-color] duration-100 ease-out active:scale-[0.97]"

export function MobileContactBar() {
  return (
    <nav
      aria-label="Schnellkontakt"
      data-track-position="Kontaktleiste Handy"
      className="touch-control md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 px-[env(safe-area-inset-left,0px)] border-t border-primary-foreground/20 bg-primary text-primary-foreground shadow-[0_-4px_12px_rgba(0,0,0,0.15)] pb-[env(safe-area-inset-bottom)]"
    >
      {/* Anrufen ist die wichtigste Aktion und deshalb in der Akzentfarbe hervorgehoben */}
      <a href="tel:+49222262779" className={`${itemClass} bg-accent text-accent-foreground active:bg-accent/80`}>
        <Phone className="h-5 w-5" />
        Anrufen
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${itemClass} active:bg-primary-foreground/10`}
      >
        <Navigation className="h-5 w-5" />
        Route
      </a>
      <a
        href="mailto:zauberhaende.alfter@gmail.com?subject=Anfrage%20%C3%BCber%20die%20Website"
        className={`${itemClass} border-l border-primary-foreground/20 active:bg-primary-foreground/10`}
      >
        <Mail className="h-5 w-5" />
        E-Mail
      </a>
    </nav>
  )
}
