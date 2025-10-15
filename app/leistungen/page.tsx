import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, Shirt, CheckCircle, ArrowRight, Zap, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leistungen - Zauberhände Änderungsschneiderei | Alfter",
  description:
    "Entdecken Sie unser komplettes Leistungsspektrum: Professionelle Änderungsschneiderei, Textilreinigung, Reparaturen und Express-Service. Höchste Qualität in Alfter.",
  keywords:
    "Änderungsschneiderei, Hosenkürzen, Ärmelkürzung, Textilreinigung, Kleiderreparatur, Express Service, Zauberhände Alfter",
}

export default function LeistungenPage() {
  const alterationServices = [
    {
      category: "Hosen & Röcke",
      services: [
        { name: "Hosenkürzen" },
        { name: "Bundweite ändern" },
        { name: "Rocklänge kürzen" },
        { name: "Reißverschluss ersetzen" },
      ],
    },
    {
      category: "Oberteile & Jacken",
      services: [
        { name: "Ärmellänge kürzen" },
        { name: "Seitennähte enger" },
        { name: "Knöpfe annähen" },
        { name: "Futter reparieren" },
      ],
    },
    {
      category: "Spezielle Arbeiten",
      services: [
        { name: "Brautkleid anpassen" },
        { name: "Anzug komplett" },
        { name: "Leder-Änderungen" },
        { name: "Vintage-Restauration" },
      ],
    },
  ]

  const cleaningServices = [
    {
      category: "Standard Reinigung",
      services: [{ name: "Anzug (2-teilig)" }, { name: "Kleid" }, { name: "Hemd/Bluse" }, { name: "Hose" }],
    },
    {
      category: "Spezialreinigung",
      services: [{ name: "Leder/Wildleder" }, { name: "Brautkleid" }, { name: "Pelz" }, { name: "Teppiche" }],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Zauberhände Änderungsschneiderei Services",
            description: "Komplettes Leistungsspektrum der Zauberhände Änderungsschneiderei in Alfter",
            itemListElement: [
              {
                "@type": "Service",
                name: "Hosenkürzen",
                description: "Professionelles Kürzen von Hosen aller Art mit perfekter Passform",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Zauberhände Änderungsschneiderei",
                },
                areaServed: "Alfter, Bonn, Bornheim, Wesseling",
                serviceType: "Änderungsschneiderei",
              },
              {
                "@type": "Service",
                name: "Textilreinigung",
                description: "Schonende und umweltfreundliche Reinigung aller Textilien",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Zauberhände Änderungsschneiderei",
                },
                areaServed: "Alfter, Bonn, Bornheim, Wesseling",
                serviceType: "Textilreinigung",
              },
              {
                "@type": "Service",
                name: "Brautkleid Anpassung",
                description: "Spezialisierte Anpassungen für Brautkleider und festliche Kleidung",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Zauberhände Änderungsschneiderei",
                },
                areaServed: "Alfter, Bonn, Bornheim, Wesseling",
                serviceType: "Spezialanpassung",
              },
              {
                "@type": "Service",
                name: "Express-Service",
                description: "Schnelle Bearbeitung für eilige Aufträge",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Zauberhände Änderungsschneiderei",
                },
                areaServed: "Alfter, Bonn, Bornheim, Wesseling",
                serviceType: "Express-Service",
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
              Unsere Leistungen
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              Von präzisen Änderungen bis zur schonenden Reinigung – entdecken Sie unser komplettes Serviceangebot.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 animate-in fade-in slide-in-from-left duration-500">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Express-Service</h3>
                <p className="text-sm text-muted-foreground">Eilaufträge möglich</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Qualitätsgarantie</h3>
                <p className="text-sm text-muted-foreground">100% Zufriedenheitsgarantie</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 animate-in fade-in slide-in-from-right duration-500 delay-400">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Kostenlose Beratung</h3>
                <p className="text-sm text-muted-foreground">Persönliche Beratung vor Ort</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alteration Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:rotate-12 transition-transform duration-300 animate-in fade-in slide-in-from-bottom duration-500">
              <Scissors className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              Änderungsschneiderei
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-500 delay-300">
              Professionelle Anpassungen für die perfekte Passform. Alle Arbeiten werden von erfahrenen Schneidern
              ausgeführt.
            </p>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto bg-secondary/30 p-4 rounded-lg animate-in fade-in slide-in-from-bottom duration-500 delay-400">
              Die Preise variieren je nach Aufwand und Komplexität der Arbeit. Genaue Kosten können wir Ihnen nach einer
              kostenlosen Beratung mitteilen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {alterationServices.map((category, index) => (
              <Card
                key={index}
                className={`h-full hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center border-b border-border pb-3 last:border-b-0 hover:bg-secondary/10 transition-colors duration-200 rounded p-2"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          {service.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:rotate-12 transition-transform duration-300 animate-in fade-in slide-in-from-bottom duration-500">
              <Shirt className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
              Reinigungsannahme
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-500 delay-300">
              Schonende und umweltfreundliche Reinigung für alle Textilien. Wir arbeiten mit modernsten Verfahren und
              umweltschonenden Mitteln.
            </p>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto bg-background/50 p-4 rounded-lg animate-in fade-in slide-in-from-bottom duration-500 delay-400">
              Die Preise variieren je nach Aufwand und Komplexität der Arbeit. Genaue Kosten können wir Ihnen nach einer
              kostenlosen Beratung mitteilen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cleaningServices.map((category, index) => (
              <Card
                key={index}
                className={`h-full hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom duration-500`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center border-b border-border pb-3 last:border-b-0 hover:bg-secondary/10 transition-colors duration-200 rounded p-2"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
                          {service.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 animate-in fade-in slide-in-from-bottom duration-500">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-500 delay-200">
            Rufen Sie uns an für eine kostenlose Beratung oder besuchen Sie uns direkt in unserem Geschäft in Alfter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-500 delay-400">
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 hover:scale-105 transition-transform duration-200"
            >
              <a href="tel:+4922819999999" className="flex items-center">
                Jetzt anrufen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
