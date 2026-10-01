import { Mail, Phone } from "lucide-react"

export function MobileContactBar() {
  return (
    <nav
      aria-label="Schnellkontakt"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 border-t border-primary-foreground/20 bg-primary text-primary-foreground pb-[env(safe-area-inset-bottom)]"
    >
      <a href="tel:+49222262779" className="flex items-center justify-center gap-2 py-3 font-medium">
        <Phone className="h-5 w-5" />
        Anrufen
      </a>
      <a
        href="mailto:zauberhaende.alfter@gmail.com?subject=Anfrage%20%C3%BCber%20die%20Website"
        className="flex items-center justify-center gap-2 py-3 font-medium border-l border-primary-foreground/20"
      >
        <Mail className="h-5 w-5" />
        E-Mail
      </a>
    </nav>
  )
}
