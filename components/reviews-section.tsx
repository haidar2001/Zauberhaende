import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { MAPS_URL } from "@/lib/business"
import type { Review } from "@/lib/reviews"

export function ReviewsSection({
  reviews,
  title = "Das sagen unsere Kunden",
}: {
  reviews: Review[]
  title?: string
}) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">{title}</h2>
          {/* Hinweis zur Herkunft der Bewertungen (§ 5b Abs. 3 UWG) */}
          <p className="text-sm text-muted-foreground">
            Eine Auswahl echter Bewertungen unserer Kundinnen und Kunden auf Google.
          </p>
        </div>

        <div className={`grid grid-cols-1 gap-6 ${reviews.length > 2 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {reviews.map((review) => (
            <Card key={review.name} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex gap-1 mb-4" aria-label="5 von 5 Sternen">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#c89b3c] text-[#c89b3c]" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed flex-1">„{review.text}“</blockquote>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {review.name} <span className="font-normal text-muted-foreground">· Google-Bewertung</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium hover:underline"
          >
            Alle Bewertungen auf Google ansehen
          </a>
        </div>
      </div>
    </section>
  )
}
