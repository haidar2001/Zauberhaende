import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata } from "next"
import { MAPS_URL } from "@/lib/business"
import Link from "next/link"

const title = "Kontakt & Öffnungszeiten – Schneiderei Alfter bei Bonn"
const description =
  "Zauberhände, Holzgasse 13a in Alfter, direkt an der Bonner Stadtgrenze. Tel. 02222 62779. Mo–Sa ab 10 Uhr, Mo/Di/Do/Fr bis 18 Uhr. Ohne Termin vorbeikommen."

export const metadata: Metadata = {
  title: { absolute: title },
  alternates: { canonical: "/kontakt" },
  description,
  openGraph: {
    title,
    description,
    url: "https://zh-alfter.de/kontakt",
    siteName: "Zauberhände",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "@id": "https://zh-alfter.de/kontakt#webpage",
              url: "https://zh-alfter.de/kontakt",
              name: title,
              inLanguage: "de-DE",
              about: { "@id": "https://zh-alfter.de/#business" },
              mainEntity: { "@id": "https://zh-alfter.de/#business" },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Startseite", item: "https://zh-alfter.de" },
                { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://zh-alfter.de/kontakt" },
              ],
            },
            {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Brauche ich einen Termin?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ein Termin ist nicht notwendig - Sie können jederzeit ohne vorherige Vereinbarung vorbeikommen.",
                },
              },
              {
                "@type": "Question",
                name: "Wie lange dauern Änderungen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Die Bearbeitungszeit variiert je nach Art der Änderung. Gerne informieren wir Sie bei der Annahme über die voraussichtliche Dauer.",
                },
              },
              {
                "@type": "Question",
                name: "Kann ich auch Heimtextilien wie Gardinen oder Tischdecken ändern lassen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, wir bearbeiten nicht nur Kleidung, sondern auch Heimtextilien wie Gardinen, Vorhänge, Tischdecken oder Bettwäsche. Sprechen Sie uns einfach mit Ihrem Anliegen an.",
                },
              },
              {
                "@type": "Question",
                name: "Bieten Sie auch Express-Service an?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, für besonders eilige Aufträge bieten wir einen Express-Service an. Je nach Aufwand können Änderungen sogar noch am selben Tag fertiggestellt werden. Sprechen Sie uns einfach darauf an.",
                },
              },
            ],
            },
          ]),
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Kontakt & Anfahrt – Änderungsschneiderei in Alfter bei Bonn
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Haben Sie Fragen? Rufen Sie uns an oder besuchen Sie uns direkt in unserem Geschäft in Alfter – ganz
              ohne Termin. Aus Bonn sind Sie in rund 14 Minuten bei uns.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors group-hover:rotate-12 duration-300">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Unser Standort</h2>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-accent">Zauberhände Änderungsschneiderei</p>
                  <p>Holzgasse 13a</p>
                  <p>53347 Alfter</p>
                  <p className="text-sm mt-4">
                    Zentral in Alfter gelegen
                    <br />
                    Parkplätze vor dem Geschäft
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-accent font-medium hover:underline"
                  >
                    Route in Google Maps planen
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone & Email */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors group-hover:rotate-12 duration-300">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Kontaktdaten</h2>
                <div className="text-muted-foreground space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+49222262779" className="hover:text-accent transition-colors">
                      02222 62779
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:zauberhaende.alfter@gmail.com" className="hover:text-accent transition-colors">
                      zauberhaende.alfter@gmail.com
                    </a>
                  </div>
                 
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500 delay-400">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors group-hover:rotate-12 duration-300">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Öffnungszeiten</h2>
                <div className="text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Mo, Di, Do, Fr:</span>
                    <span>10:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span></span>
                    <span>14:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mittwoch & Samstag:</span>
                    <span>10:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                  <p className="text-sm mt-4 pt-2 border-t border-border">
                    Ein Termin ist nicht notwendig
                    <br />
                    
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="animate-in fade-in slide-in-from-bottom duration-500 delay-600">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  <h2>Anfahrt aus Bonn, Bornheim & Umgebung</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <p className="text-muted-foreground text-lg mb-4">
                    Unsere Änderungsschneiderei liegt in der Holzgasse 13a in <strong>Alfter</strong> – direkt an der
                    Stadtgrenze zu <strong>Bonn</strong>. Aus Duisdorf, Lengsdorf, Hardtberg oder Endenich sind Sie
                    schnell bei uns, mit öffentlichen Verkehrsmitteln aus Bonn in rund 14 Minuten.
                  </p>
                  <p className="text-muted-foreground">
                    Mit dem Auto parken Sie direkt vor dem Geschäft – ohne Parkplatzsuche in der Bonner Innenstadt. Ihre
                    Route planen Sie am einfachsten über{" "}
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium hover:underline"
                    >
                      Google Maps
                    </a>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/aenderungsschneiderei-bonn"
                    className="block text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-accent mb-2">Bonn</h3>
                    <p className="text-sm text-muted-foreground">Rund 14 Minuten mit Bus und Bahn</p>
                  </Link>

                  <Link
                    href="/aenderungsschneiderei-alfter"
                    className="block text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-accent mb-2">Alfter</h3>
                    <p className="text-sm text-muted-foreground">Unser Geschäft – zentral im Ort</p>
                  </Link>

                  <Link
                    href="/aenderungsschneiderei-bornheim"
                    className="block text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-accent mb-2">Bornheim</h3>
                    <p className="text-sm text-muted-foreground">Etwa 10 Minuten, gute Busverbindung</p>
                  </Link>

                  <Link
                    href="/aenderungsschneiderei-wesseling"
                    className="block text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200"
                  >
                    <h3 className="font-semibold text-accent mb-2">Wesseling</h3>
                    <p className="text-sm text-muted-foreground">Etwa 20 Minuten mit dem Auto</p>
                  </Link>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    <strong>Kontaktieren Sie uns am besten telefonisch oder per E-Mail:</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+49222262779"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-200 hover:scale-105 transform"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      02222 62779
                    </a>
                    <a
                      href="mailto:zauberhaende.alfter@gmail.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors duration-200 hover:scale-105 transform"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      E-Mail senden
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/20 overflow-x-clip">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 animate-in fade-in slide-in-from-bottom duration-500">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground text-lg animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              Die wichtigsten Antworten auf einen Blick
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-left duration-500 delay-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Brauche ich einen Termin?</h3>
                <p className="text-sm text-muted-foreground">
                  Ein Termin ist nicht notwendig - Sie können jederzeit ohne vorherige Vereinbarung vorbeikommen.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-right duration-500 delay-400">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Wie lange dauern Änderungen?</h3>
                <p className="text-sm text-muted-foreground">
                  Die Bearbeitungszeit variiert je nach Art der Änderung. Gerne informieren wir Sie bei der Annahme über
                  die voraussichtliche Dauer.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-left duration-500 delay-500">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Kann ich auch Heimtextilien wie Gardinen oder Tischdecken ändern lassen?</h3>
                <p className="text-sm text-muted-foreground">
                Ja, wir bearbeiten nicht nur Kleidung, sondern auch Heimtextilien wie Gardinen, Vorhänge, Tischdecken oder Bettwäsche. Sprechen Sie uns einfach mit Ihrem Anliegen an.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-right duration-500 delay-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Bieten Sie auch Express-Service an?</h3>
                <p className="text-sm text-muted-foreground">
Ja, für besonders eilige Aufträge bieten wir einen Express-Service an. Je nach Aufwand können Änderungen sogar noch am selben Tag fertiggestellt werden. Sprechen Sie uns einfach darauf an.                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
