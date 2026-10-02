import Link from "next/link"
import { ArrowRight, MapPin, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { OpenStatus } from "@/components/open-status"
import { MAPS_URL } from "@/lib/business"

/**
 * Abschluss jeder Seite: führt den Besucher zur Kontaktaufnahme.
 * Anrufen ist die Hauptaktion, Route und Kontaktseite die Alternativen.
 */
export function ContactCta({
  title = "Bereit für die perfekte Passform?",
  text = "Kommen Sie einfach ohne Termin vorbei oder rufen Sie kurz an – wir beraten Sie kostenlos und nennen Ihnen den Preis vorab.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section
      data-track-position="Kontakt-Abschluss"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      {/* dezente Naht-Linie als Stilelement */}
      <svg
        aria-hidden="true"
        className="cta-seam pointer-events-none absolute inset-x-0 top-6 h-2 w-full text-[#c89b3c]/50"
        preserveAspectRatio="none"
        viewBox="0 0 100 2"
      >
        <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="1.2 1" vectorEffect="non-scaling-stroke" />
      </svg>

      <Reveal className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <div data-reveal-item className="mb-5 flex justify-center">
          <OpenStatus tone="light" />
        </div>
        <h2 data-reveal-item className="mb-4 text-3xl font-light text-balance md:text-4xl">
          {title}
        </h2>
        <p data-reveal-item className="mx-auto mb-8 max-w-xl text-lg text-primary-foreground/80">
          {text}
        </p>

        <div data-reveal-item className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            className="cta-call h-12 bg-accent px-8 text-base text-accent-foreground hover:bg-accent/90"
          >
            <a href="tel:+49222262779">
              <Phone className="cta-call-icon h-4 w-4" />
              02222 62779 anrufen
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-primary-foreground/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" />
              Route planen
            </a>
          </Button>
        </div>

        <p data-reveal-item className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-primary-foreground/70 sm:flex-row sm:gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            Holzgasse 13a, 53347 Alfter
          </span>
          <Link
            href="/kontakt"
            className="cta-link inline-flex items-center gap-1 font-medium text-primary-foreground underline-offset-4 hover:underline"
          >
            Alle Kontaktwege
            <ArrowRight className="cta-link-arrow h-4 w-4" />
          </Link>
        </p>
      </Reveal>
    </section>
  )
}
