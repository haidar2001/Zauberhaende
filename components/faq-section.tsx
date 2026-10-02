import { Card, CardContent } from "@/components/ui/card"
import type { ServiceFaq } from "@/lib/services"

export function FaqSection({
  faqs,
  title = "Häufige Fragen",
  subtitle = "Die wichtigsten Antworten auf einen Blick",
}: {
  faqs: ServiceFaq[]
  title?: string
  subtitle?: string
}) {
  return (
    <section className="py-16 bg-secondary/20 overflow-x-clip">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Card
              key={faq.question}
              className={`hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in duration-500 ${
                index % 2 === 0 ? "slide-in-from-left" : "slide-in-from-right"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
