import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata: Metadata = {
  title: {
    default: "Änderungsschneiderei Bonn & Bornheim - Zauberhände Schneiderei Alfter",
    template: "%s | Zauberhände",
  },
  description:
    "Professionelle Änderungsschneiderei und Textilreinigung in Alfter bei Bonn & Bornheim. Schneiderei für Hosenkürzen, Kleideränderungen & Reinigung mit Abholservice. Nur 14 Min. von Bonn, 10 Min. von Bornheim. Express-Service verfügbar.",
  keywords: [
    "Änderungsschneiderei Bonn",
    "Schneiderei Bonn",
    "Änderungsschneiderei Bornheim",
    "Schneiderei Bornheim",
    "Änderungsschneiderei Alfter",
    "Schneider Bonn",
    "Schneider Bornheim",
    "Hosenkürzen Bonn",
    "Hosenkürzen Bornheim",
    "Textilreinigung Bonn",
    "Textilreinigung Bornheim",
    "Reinigung Bonn",
    "Reinigung Bornheim",
    "Reinigungsannahme Bonn",
    "Reinigungsannahme Bornheim",
    "Lederreinigung Bonn",
    "Lederreinigung Bornheim",
    "Kleideränderung Bonn",
    "Kleideränderung Bornheim",
    "Schneiderei Alfter",
    "Änderungsschneiderei Bonn Duisdorf",
    "Schneiderei in der Nähe",
    "Schneiderei Bonn Umgebung",
    "Schneiderei Bornheim Umgebung",
    "Hosenkürzen Alfter",
    "Textilreparatur Bonn",
    "Textilreparatur Bornheim",
    "Express Service Bonn",
    "Express Service Bornheim",
    "Textilpflege Bonn",
    "Textilpflege Bornheim",
    "Schneider Alfter",
    "Änderungen Bonn",
    "Änderungen Bornheim",
    "Bornheim",
    "Wesseling",
  ],
  authors: [{ name: "Zauberhände Änderungsschneiderei" }],
  creator: "Zauberhände Änderungsschneiderei",
  publisher: "Zauberhände Änderungsschneiderei",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zh-alfter.de"),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
    },
  },
  openGraph: {
    title: "Änderungsschneiderei Bonn & Bornheim - Zauberhände Schneiderei Alfter",
    description:
      "Professionelle Änderungsschneiderei & Textilreinigung in Alfter bei Bonn & Bornheim. Nur 14 Min. von Bonn, 10 Min. von Bornheim. Hosenkürzen, Kleideränderungen und Reinigung mit Abholservice.",
    url: "https://zh-alfter.de",
    siteName: "Zauberhände",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zauberhände - Professionelle Änderungsschneiderei und Textilreinigung in Alfter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Änderungsschneiderei Bonn & Bornheim - Zauberhände Alfter",
    description:
      "Professionelle Schneiderei & Textilreinigung in Alfter bei Bonn & Bornheim. Hosenkürzen, Änderungen & Reinigung.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://zh-alfter.de",
              name: "Zauberhände Änderungsschneiderei",
              alternateName: "Zauberhände",
              description:
                "Professionelle Änderungsschneiderei und Textilreinigung in Alfter bei Bonn & Bornheim. Nur 14 Minuten von Bonn, 10 Minuten von Bornheim entfernt.",
              url: "https://zh-alfter.de",
              telephone: "+49-2222-62779",
              email: "kontakt@zh-alfter.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Holzgasse 13a",
                addressLocality: "Alfter",
                postalCode: "53347",
                addressCountry: "DE",
                addressRegion: "Nordrhein-Westfalen",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "50.7344",
                longitude: "7.0044",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "10:00",
                  closes: "13:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "13:00",
                },
              ],
              priceRange: "€€",
              paymentAccepted: "Cash, Credit Card, Debit Card",
              currenciesAccepted: "EUR",
              areaServed: [
                {
                  "@type": "City",
                  name: "Alfter",
                },
                {
                  "@type": "City",
                  name: "Bonn",
                },
                {
                  "@type": "City",
                  name: "Bornheim",
                },
                {
                  "@type": "City",
                  name: "Wesseling",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Schneider- und Reinigungsdienstleistungen",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hosenkürzen",
                      description: "Professionelles Kürzen von Hosen aller Art",
                      areaServed: ["Alfter", "Bonn", "Bornheim", "Wesseling"],
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Textilreinigung",
                      description: "Schonende Reinigung aller Textilien mit Abholservice",
                      areaServed: ["Alfter", "Bonn", "Bornheim", "Wesseling"],
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lederreinigung",
                      description: "Spezialisierte Pflege für Leder und Wildleder",
                      areaServed: ["Alfter", "Bonn", "Bornheim", "Wesseling"],
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kleideränderungen",
                      description: "Professionelle Änderungen für perfekte Passform",
                      areaServed: ["Alfter", "Bonn", "Bornheim", "Wesseling"],
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Express-Service",
                      description: "Schnelle Bearbeitung für eilige Aufträge",
                      areaServed: ["Alfter", "Bonn", "Bornheim", "Wesseling"],
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <CookieBanner />
      </body>
    </html>
  )
}
