import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ArrowRight, CheckCircle, MapPin, Car, Train, Scissors, Shirt, Leaf } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { ProgressiveHeroMedia } from "@/components/progressive-hero-media"

export const metadata: Metadata = {
  title: "Änderungsschneiderei Bonn & Bornheim - Zauberhände | Schneiderei Alfter",
  description:
    "Ihre Änderungsschneiderei in Alfter bei Bonn & Bornheim. Professionelle Schneiderarbeiten, Hosenkürzen, Kleideränderungen & Textilreinigung mit Abholservice. Nur 14 Min. von Bonn, 10 Min. von Bornheim.",
  keywords:
    "Änderungsschneiderei Bonn, Schneiderei Bonn, Änderungsschneiderei Bornheim, Schneiderei Bornheim, Änderungsschneiderei Alfter, Schneider Bonn, Schneider Bornheim, Hosenkürzen Bonn, Hosenkürzen Bornheim, Textilreinigung Bonn, Textilreinigung Bornheim, Reinigung Bonn, Reinigung Bornheim, Kleideränderung Bonn, Kleideränderung Bornheim, Schneiderei Alfter, Änderungsschneiderei Bonn Duisdorf, Schneiderei in der Nähe, Express Service Bonn, Express Service Bornheim, Lederreinigung Bonn, Lederreinigung Bornheim, Reinigungsannahme Bonn, Reinigungsannahme Bornheim, Textilpflege Bonn, Textilpflege Bornheim",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-screen w-full overflow-hidden">
        <ProgressiveHeroMedia />

        {/* Gradient Overlay - Dark on left (desktop) or bottom (mobile), fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:bg-gradient-to-r lg:from-black/85 lg:via-black/40 lg:to-transparent" />

        {/* Text Content - Left side on desktop, bottom on mobile */}
        <div className="relative z-10 min-h-screen flex items-end lg:items-center pb-8 lg:pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl lg:max-w-2xl">
              <header>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 text-balance">
                  <span className="text-accent font-semibold">Zauberhände</span>
                  <span className="block text-white font-light mt-2">
                    Änderungsschneiderei in Alfter bei Bonn & Bornheim
                  </span>
                </h1>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="tel:+49222262779" className="flex items-center">
                    Jetzt anrufen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="/leistungen">Unsere Leistungen</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Unsere Hauptleistungen in Alfter, Bonn & Bornheim
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von präzisen Änderungen bis zur professionellen Reinigung – wir kümmern uns um alle Ihre Textilien mit
              höchster Sorgfalt.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Scissors className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Änderungsschneiderei</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Professionelle Anpassungen für perfekte Passform. Hosenkürzen, Ärmelkürzungen, Taillenweite und vieles
                  mehr.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Hosenkürzen & Säumen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Ärmel- & Rocklängen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Taillen- & Bundweite</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-background border-border">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <Shirt className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Reinigungsannahme</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Zuverlässige Reinigungsdienstleistungen für alle Textilien. Schonende Behandlung und termingerechte
                  Abholung.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Textilreinigung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">Lederreinigung</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link href="/leistungen">
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              So einfach geht's bei <span className="text-accent font-semibold">Zauberhände</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              In nur drei Schritten zu perfekt sitzender Kleidung und sauberen Textilien
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <article className="relative">
              <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Beratung & Annahme</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Besuchen Sie uns in Alfter oder nutzen Sie unseren Abholservice. Wir beraten Sie kostenlos und
                  erstellen ein transparentes Angebot.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-accent" />
              </div>
            </article>

            <article className="relative">
              <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Professionelle Bearbeitung</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Unsere erfahrenen Schneider*innen kümmern sich mit höchster Sorgfalt um Ihre Textilien. Schnell,
                  präzise und mit Qualitätsgarantie.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <ArrowRight className="h-8 w-8 text-accent" />
              </div>
            </article>

            <article>
              <div className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Abholung & Freude</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Holen Sie Ihre perfekt angepassten oder gereinigten Textilien ab. Auf Wunsch liefern wir auch direkt
                  zu Ihnen nach Hause.
                </p>
              </div>
            </article>
          </div>

          <div className="bg-background border border-accent/20 rounded-lg p-8 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Kostenlose Beratung für Ihre Änderungswünsche
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sie sind unsicher, welche Änderungen möglich sind? Besuchen Sie uns in unserer Schneiderei in Alfter für
              eine kostenlose Beratung. Wir nehmen uns Zeit für Sie!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="tel:+49222262779" className="flex items-center justify-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Jetzt anrufen: 02222 62779
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                asChild
              >
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Warum <span className="text-accent font-semibold">Zauberhände</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nachhaltige Textilreparatur</h3>
              <p className="text-muted-foreground">
                Wir verlängern die Lebensdauer Ihrer Kleidung durch fachgerechte Änderungen und Reparaturen -
                ressourcenschonend und umweltfreundlich.
              </p>
            </article>

            <article className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Schneller Service</h3>
              <p className="text-muted-foreground">
                Kurze Bearbeitungszeiten ohne Kompromisse bei der Qualität. Express-Service für eilige Aufträge
                verfügbar.
              </p>
            </article>

            <article className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Qualitätsgarantie</h3>
              <p className="text-muted-foreground">
                Höchste Qualitätsstandards und persönliche Beratung für optimale Ergebnisse bei jedem Auftrag.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Ihre Schneiderei in Alfter - Gut erreichbar aus Bonn & Bornheim
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Unsere Änderungsschneiderei in <strong className="text-accent">Alfter</strong> ist zentral gelegen und
              damit der ideale Anlaufpunkt für Kund*innen aus <strong className="text-accent">Bonn</strong>,{" "}
              <strong className="text-accent">Bornheim</strong> und der gesamten Region.
            </p>
            <p className="text-muted-foreground text-lg mt-4">
              Ob mit <strong className="text-accent">Bus, Bahn oder Auto</strong> – von Bonn aus erreichen Sie uns in
              nur 14 Minuten, von Bornheim in etwa 10 Minuten. Perfekt für alle, die eine professionelle Schneiderei in
              Bonn- und Bornheim-Nähe suchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Alfter</h3>
                <p className="text-sm text-muted-foreground">
                  Unser Hauptstandort - mitten im
                  <br />
                  Zentrum
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Train className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Bonn</h3>
                <p className="text-sm text-muted-foreground">
                  Nur 14 Minuten mit öffentlichen
                  <br />
                  Verkehrsmitteln entfernt
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Car className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Bornheim</h3>
                <p className="text-sm text-muted-foreground">
                  Etwa 10 Minuten Fahrtzeit - gute
                  <br />
                  Busverbindung
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background border-border">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Car className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Wesseling</h3>
                <p className="text-sm text-muted-foreground">Nur 20 Minuten mit dem Auto</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
              asChild
            >
              <Link href="/kontakt">
                Kontakt aufnehmen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
