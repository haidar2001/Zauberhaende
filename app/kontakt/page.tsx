import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt - Zauberhände Änderungsschneiderei | Alfter",
  description:
    "Kontaktieren Sie Zauberhände für Terminvereinbarungen und Beratung. Holzgasse 13a, 53347 Alfter. Tel: +49 2281 999 9999. Öffnungszeiten Mo-Sa.",
  keywords: "Kontakt Änderungsschneiderei, Termin vereinbaren, Schneider Alfter, Öffnungszeiten, Beratung, Zauberhände",
}

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom duration-500">
              Kontakt & Beratung
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              Haben Sie Fragen oder möchten einen Termin vereinbaren? Rufen Sie uns an oder besuchen Sie uns direkt in
              unserem Geschäft in Alfter.
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
                <h3 className="text-xl font-semibold text-foreground mb-4">Unser Standort</h3>
                <div className="text-muted-foreground space-y-1">
                  <p className="font-semibold text-accent">Zauberhände Änderungsschneiderei</p>
                  <p>Holzgasse 13a</p>
                  <p>53347 Alfter</p>
                  <p className="text-sm mt-4">
                    Zentral in Alfter gelegen
                    <br />
                    Parkplätze vor dem Geschäft
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Phone & Email */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors group-hover:rotate-12 duration-300">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Kontaktdaten</h3>
                <div className="text-muted-foreground space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+49222262779" className="hover:text-accent transition-colors">
                      +492222 62779
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:Kontakt@zh-alfter.de" className="hover:text-accent transition-colors">
                      Kontakt@zh-alfter.de
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
                <h3 className="text-xl font-semibold text-foreground mb-4">Öffnungszeiten</h3>
                <div className="text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>10:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span></span>
                    <span>14:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag & Mittwoch:</span>
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
                <CardTitle className="text-center text-2xl">Gut erreichbar - auch aus der Umgebung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-8">
                  <p className="text-muted-foreground text-lg mb-4">
                    Unsere Änderungsschneiderei in <strong>Alfter</strong> ist zentral gelegen und damit der ideale
                    Anlaufpunkt für Kund*innen aus der gesamten Region.
                  </p>
                  <p className="text-muted-foreground">
                    Ob mit <strong>Bus, Bahn oder Auto</strong> – dank unserer verkehrsgünstigen Lage erreichen Sie uns
                    schnell und bequem.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                    <h4 className="font-semibold text-accent mb-2">Alfter</h4>
                    <p className="text-sm text-muted-foreground">
                      Unser Hauptstandort - mitten im
                      <br />
                      Zentrum
                    </p>
                  </div>

                  <div className="text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                    <h4 className="font-semibold text-accent mb-2">Bonn Duisdorf</h4>
                    <p className="text-sm text-muted-foreground">
                      Nur 14 Minuten mit öffentlichen
                      <br />
                      Verkehrsmitteln
                    </p>
                  </div>

                  <div className="text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                    <h4 className="font-semibold text-accent mb-2">Bornheim</h4>
                    <p className="text-sm text-muted-foreground">
                      Etwa 10 Minuten Fahrtzeit - gute
                      <br />
                      Busverbindung
                    </p>
                  </div>

                  <div className="text-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors duration-200">
                    <h4 className="font-semibold text-accent mb-2">Wesseling</h4>
                    <p className="text-sm text-muted-foreground">Nur 20 Minuten mit dem Auto</p>
                  </div>
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
                      +492222 62779
                    </a>
                    <a
                      href="mailto:Kontakt@zh-alfter.de"
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
      <section className="py-16 bg-secondary/20">
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
