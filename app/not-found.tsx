import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light text-foreground mb-6">Seite nicht gefunden</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diese Seite gibt es leider nicht. Hier geht es weiter zu unserer Änderungsschneiderei in Alfter:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild>
              <Link href="/">Startseite</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/leistungen">Leistungen</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/kontakt">Kontakt & Öffnungszeiten</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
