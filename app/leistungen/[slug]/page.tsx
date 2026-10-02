import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactCta } from "@/components/contact-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, DoorOpen, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getService, services } from "@/lib/services"
import { FaqSection } from "@/components/faq-section"

const baseUrl = "https://zh-alfter.de"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/leistungen/${service.slug}` },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const url = `${baseUrl}/leistungen/${service.slug}`
  const otherServices = services.filter((s) => s.slug !== service.slug)

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.name,
              description: service.description,
              url,
              provider: { "@id": `${baseUrl}/#business` },
              areaServed: ["Alfter", "Bonn", "Bornheim", "Wesseling"],
              ...(service.images && { image: service.images.map((image) => `${baseUrl}${image.src}`) }),
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
                { "@type": "ListItem", position: 2, name: "Leistungen", item: `${baseUrl}/leistungen` },
                { "@type": "ListItem", position: 3, name: service.name, item: url },
              ],
            },
          ]),
        }}
      />

      <Navigation />

      <main>
        <section className="py-16 lg:py-24 bg-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Brotkrumen" className="text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground">
                Startseite
              </Link>
              {" / "}
              <Link href="/leistungen" className="hover:text-foreground">
                Leistungen
              </Link>
              {" / "}
              <span className="text-foreground">{service.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">{service.h1}</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">{service.intro}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Unsere Leistungen</h2>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Einfach vorbeikommen</h2>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <DoorOpen className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  Ohne Termin – kommen Sie während der Öffnungszeiten einfach vorbei.
                </p>
                <p className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  Holzgasse 13a, 53347 Alfter – nur wenige Minuten von Bonn und Bornheim.
                </p>
                <p className="text-sm text-muted-foreground bg-secondary/30 p-4 rounded-lg">
                  Der Preis richtet sich nach Aufwand und Material. Wir beraten Sie vor Ort kostenlos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {service.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
            ))}
            {service.images?.map((image) => (
              <figure key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1440}
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="w-full h-auto rounded-lg border border-border"
                />
                <figcaption className="text-sm text-muted-foreground mt-2">{image.caption}</figcaption>
              </figure>
            ))}
            <p className="text-muted-foreground">
              Beispiele unserer Arbeit finden Sie in der{" "}
              <Link href="/galerie" className="text-accent font-medium hover:underline">
                Galerie mit Vorher/Nachher-Bildern
              </Link>
              .
            </p>
          </div>
        </section>

        <FaqSection faqs={service.faqs} subtitle={`Die wichtigsten Antworten rund um „${service.name}“`} />

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-foreground mb-6">Weitere Leistungen</h2>
            <div className="flex flex-wrap gap-3">
              {otherServices.map((s) => (
                <Button key={s.slug} variant="outline" asChild>
                  <Link href={`/leistungen/${s.slug}`}>{s.name}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <ContactCta title={`Fragen zu „${service.name}“? Rufen Sie uns an`} />
      </main>

      <Footer />
    </div>
  )
}
