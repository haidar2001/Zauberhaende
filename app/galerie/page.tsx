"use client"

import Image from "next/image"
import { useState } from "react"
import { Play, ZoomIn } from "lucide-react"
import galleryData from "@/data/gallery.json"
import { GalleryLightbox } from "@/components/gallery-lightbox"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface GalleryItem {
  id: number
  type: "image" | "video"
  src: string
  title: string
  description: string
}

export default function GaleriePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const items = galleryData as GalleryItem[]

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">Unsere Arbeiten</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Entdecken Sie eine Auswahl unserer professionellen Änderungen, Anpassungen und Reparaturen. Jedes
                Kleidungsstück wird mit höchster Präzision und Sorgfalt bearbeitet.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {item.type === "image" ? (
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <video src={item.src} className="w-full h-full object-cover" muted loop playsInline>
                        Ihr Browser unterstützt das Video-Tag nicht.
                      </video>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {item.type === "image" ? (
                        <ZoomIn className="w-12 h-12 text-white" />
                      ) : (
                        <Play className="w-12 h-12 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {item.type === "image" ? "Bild" : "Video"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Möchten Sie auch perfekt sitzende Kleidung?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Vereinbaren Sie einen Termin für eine kostenlose Beratung. Wir beraten Sie gerne zu allen
                Änderungswünschen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+49222262779"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Jetzt anrufen
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-accent/10 transition-colors"
                >
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">📝 So fügen Sie neue Bilder/Videos hinzu:</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>
                  Speichern Sie Ihre Bilder/Videos im Ordner{" "}
                  <code className="bg-muted px-2 py-1 rounded">public/gallery/</code>
                </li>
                <li>
                  Öffnen Sie die Datei <code className="bg-muted px-2 py-1 rounded">data/gallery.json</code>
                </li>
                <li>
                  Fügen Sie einen neuen Eintrag hinzu mit:
                  <ul className="ml-6 mt-1 space-y-1 list-disc">
                    <li>
                      <code className="bg-muted px-1 rounded">type</code>: "image" oder "video"
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">src</code>: Pfad zur Datei (z.B. "/gallery/mein-bild.jpg")
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">title</code>: Titel
                    </li>
                    <li>
                      <code className="bg-muted px-1 rounded">description</code>: Beschreibung
                    </li>
                  </ul>
                </li>
                <li>Die Galerie wird automatisch aktualisiert</li>
              </ol>
              <p className="mt-4 text-xs text-muted-foreground">
                Tipp: Verwenden Sie optimierte Bilder (WebP/JPEG, max. 1920x1440px) und Videos (MP4, max. 1080p) für
                beste Performance.
              </p>
            </div>
          </div>
        </section>
      </main>

      {lightboxOpen && (
        <GalleryLightbox
          items={items}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}

      <Footer />
    </div>
  )
}
