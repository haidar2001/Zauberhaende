import Image from "next/image"
import Link from "next/link"
import galleryData from "@/data/gallery.json"

interface GalleryItem {
  id: number
  type: "image" | "video"
  src: string
  title: string
}

const items = (galleryData as GalleryItem[]).filter((item) => item.type === "image")

/** Vorher/Nachher-Bilder als Laufband (gleiche Bewegung wie das Bewertungs-Band, siehe .reviews-marquee) */
export function BeforeAfterMarquee() {
  if (items.length === 0) return null

  // Liste so oft wiederholen, dass das Band breiter als der Bildschirm ist; die zweite Hälfte schließt die Schleife
  const repeat = Math.max(1, Math.ceil(6 / items.length))
  const loop = Array.from({ length: repeat }, () => items).flat()

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Vorher &amp; Nachher aus unserer Werkstatt</h2>
        <p className="text-muted-foreground">Echte Reparaturen und Änderungen aus unserer Schneiderei in Alfter.</p>
      </div>

      <div className="reviews-marquee relative">
        <div
          className="reviews-marquee-track flex w-max items-stretch"
          style={{ "--marquee-duration": `${loop.length * 10}s` } as React.CSSProperties}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-6 pr-6" aria-hidden={copy === 1 ? true : undefined}>
              {loop.map((item, i) => (
                <Link
                  key={`${item.id}-${i}`}
                  href="/galerie"
                  tabIndex={copy === 1 ? -1 : undefined}
                  className="w-80 sm:w-[26rem] shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1920}
                    height={1440}
                    sizes="(min-width: 640px) 416px, 320px"
                    className="w-full h-auto"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      <div className="text-center mt-8 px-4">
        <Link href="/galerie" className="text-accent font-medium hover:underline">
          Alle Vorher/Nachher-Bilder in der Galerie ansehen
        </Link>
      </div>
    </section>
  )
}
