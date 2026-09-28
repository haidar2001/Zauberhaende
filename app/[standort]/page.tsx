import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, DoorOpen, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLocation, locations } from "@/lib/locations"
import { services } from "@/lib/services"
import { MAPS_URL } from "@/lib/business"

const baseUrl = "https://zh-alfter.de"

export const dynamicParams = false

export function generateStaticParams() {
  return locations.map((location) => ({ standort: location.slug }))
}

export function generateMetadata({ params }: { params: { standort: string } }): Metadata {
  const location = getLocation(params.standort)
  if (!location) return {}

  return {
    title: { absolute: `${location.title} | Zauberhände` },
    description: location.description,
    alternates: { canonical: `/${location.slug}` },
  }
}

export default function LocationPage({ params }: { params: { standort: string } }) {
  const location = getLocation(params.standort)
  if (!location) notFound()

  const url = `${baseUrl}/${location.slug}`
  const otherLocations = locations.filter((l) => l.slug !== location.slug)

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
              { "@type": "ListItem", position: 2, name: `Änderungsschneiderei ${location.city}`, item: url },
            ],
          }),
        }}
      />

      <Navigation />

      <main>
        <section className="py-16 lg:py-24 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">{location.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">{location.intro}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">So finden Sie uns in Alfter</h2>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>
                    Zauberhände Änderungsschneiderei
                    <br />
                    Holzgasse 13a, 53347 Alfter
                  </span>
                </p>
                <p className="text-muted-foreground">{location.arrival}</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-accent font-medium hover:underline"
                >
                  Route in Google Maps planen
                </a>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <DoorOpen className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  Ohne Termin – kommen Sie einfach vorbei.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-6 w-6 text-accent" />
                  Öffnungszeiten
                </h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <span className="font-medium text-foreground">Mo, Di, Do, Fr:</span> 10:00–13:00 und 14:00–18:00 Uhr
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Mi & Sa:</span> 10:00–13:00 Uhr
                  </p>
                  <p>
                    <span className="font-medium text-foreground">So:</span> geschlossen
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-foreground mb-4">
              Unsere Leistungen für Kundinnen und Kunden aus {location.city}
            </h2>
            <p className="text-muted-foreground mb-6">
              Alle Arbeiten erledigen wir in unserer Schneiderei in Alfter. Der Preis richtet sich nach Aufwand und
              Material – wir beraten Sie vor Ort kostenlos.
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <Button key={service.slug} variant="outline" asChild>
                  <Link href={`/leistungen/${service.slug}`}>{service.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-foreground mb-4">{location.districtsText}</h2>
            <ul className="flex flex-wrap gap-2 mb-10">
              {location.districts.map((district) => (
                <li key={district} className="px-3 py-1 rounded-full bg-accent/10 text-foreground text-sm">
                  {district}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-light text-foreground mb-4">Auch gut erreichbar aus</h2>
            <div className="flex flex-wrap gap-3">
              {otherLocations.map((l) => (
                <Button key={l.slug} variant="outline" asChild>
                  <Link href={`/${l.slug}`}>{l.city}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">Fragen? Rufen Sie uns an</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                <a href="tel:+49222262779" className="flex items-center">
                  02222 62779 anrufen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/kontakt">Anfahrt & Kontakt</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
