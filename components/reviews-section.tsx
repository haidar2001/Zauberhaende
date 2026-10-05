import { Star } from "lucide-react"
import { MAPS_URL } from "@/lib/business"
import type { Review } from "@/lib/reviews"

function ReviewCard({ review, cardBg }: { review: Review; cardBg: string }) {
  return (
    <figure className={`w-80 sm:w-96 shrink-0 rounded-xl border border-border ${cardBg} p-6 shadow-sm flex flex-col`}>
      <div className="flex gap-1 mb-4" aria-label="5 von 5 Sternen">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-[#c89b3c] text-[#c89b3c]" />
        ))}
      </div>
      <blockquote className="text-foreground leading-relaxed flex-1">„{review.text}“</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-foreground">
        {review.name} <span className="font-normal text-muted-foreground">· Google-Bewertung</span>
      </figcaption>
    </figure>
  )
}

export function ReviewsSection({
  reviews,
  title = "Das sagen unsere Kunden",
  tone = "background",
}: {
  reviews: Review[]
  title?: string
  /** Hintergrund des Abschnitts, damit er sich von den Nachbarabschnitten abhebt */
  tone?: "background" | "card"
}) {
  const sectionBg = tone === "card" ? "bg-card" : "bg-background"
  const cardBg = tone === "card" ? "bg-background" : "bg-card"
  const fade = tone === "card" ? "from-card" : "from-background"
  // Liste so oft wiederholen, dass das Band breiter als der Bildschirm ist; die zweite Hälfte schließt die Schleife
  const repeat = Math.max(1, Math.ceil(6 / reviews.length))
  const loop = Array.from({ length: repeat }, () => reviews).flat()

  return (
    <section className={`py-16 ${sectionBg} overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">{title}</h2>
        {/* Hinweis zur Herkunft der Bewertungen (§ 5b Abs. 3 UWG) */}
        <p className="text-sm text-muted-foreground">
          Eine Auswahl echter Bewertungen unserer Kundinnen und Kunden auf Google.
        </p>
      </div>

      <div className="reviews-marquee relative">
        <div
          className="reviews-marquee-track flex w-max items-stretch"
          style={{ "--marquee-duration": `${loop.length * 12}s` } as React.CSSProperties}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-6 pr-6" aria-hidden={copy === 1 ? true : undefined}>
              {loop.map((review, i) => (
                <ReviewCard key={`${review.name}-${i}`} review={review} cardBg={cardBg} />
              ))}
            </div>
          ))}
        </div>
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r ${fade} to-transparent`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l ${fade} to-transparent`} />
      </div>

      <div className="text-center mt-8 px-4">
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
          Alle Bewertungen auf Google ansehen
        </a>
      </div>
    </section>
  )
}
