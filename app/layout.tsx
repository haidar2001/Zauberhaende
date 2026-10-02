import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import { MobileContactBar } from "@/components/mobile-contact-bar"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { MAPS_URL } from "@/lib/business"


// viewportFit "cover" ist nötig, damit env(safe-area-inset-*) echte Werte liefert
// (sonst ist der Abstand der Kontaktleiste zum Home-Balken am iPhone immer 0).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Farbe der Statusleiste/Browserleiste = Hintergrund der Navigation
  themeColor: "#ffffff",
  colorScheme: "light",
}

export const metadata: Metadata = {
  title: {
    default: "Zauberhände – Änderungsschneiderei in Alfter bei Bonn & Bornheim",
    template: "%s | Zauberhände",
  },
  description:
    "Professionelle Änderungsschneiderei und Textilreinigung in Alfter bei Bonn & Bornheim. Hosen kürzen, Kleider ändern, Reparaturen & Reinigungsannahme – ohne Termin, direkt an der Bonner Stadtgrenze. Express-Service verfügbar.",
  authors: [{ name: "Zauberhände Änderungsschneiderei" }],
  creator: "Zauberhände Änderungsschneiderei",
  publisher: "Zauberhände Änderungsschneiderei",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://zh-alfter.de"),
  openGraph: {
    title: "Zauberhände – Änderungsschneiderei in Alfter bei Bonn & Bornheim",
    description:
      "Professionelle Änderungsschneiderei & Textilreinigung in Alfter, direkt an der Grenze zu Bonn und Bornheim. Hosen kürzen, Kleider ändern und Reinigungsannahme – ohne Termin.",
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
    title: "Zauberhände – Änderungsschneiderei in Alfter bei Bonn & Bornheim",
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
              "@type": "WebSite",
              "@id": "https://zh-alfter.de/#website",
              url: "https://zh-alfter.de",
              name: "Zauberhände",
              alternateName: ["Zauberhände Änderungsschneiderei", "Zauberhände Alfter"],
              inLanguage: "de-DE",
              publisher: { "@id": "https://zh-alfter.de/#business" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://zh-alfter.de/#business",
              name: "Zauberhände Änderungsschneiderei",
              alternateName: "Zauberhände",
              description:
                "Professionelle Änderungsschneiderei und Textilreinigung in Alfter, direkt an der Grenze zu Bonn und Bornheim.",
              url: "https://zh-alfter.de",
              image: ["https://zh-alfter.de/alfter-video-thumbnail.webp", "https://zh-alfter.de/og-image.jpg"],
              hasMap: MAPS_URL,
              logo: "https://zh-alfter.de/images/logo.png",
              sameAs: [
                "https://www.facebook.com/people/Zauberh%C3%A4nde-%C3%84nderungsschneiderei/61557229961543/",
                "https://www.tiktok.com/@zh_alfter",
                "https://de.pinterest.com/zauberhaende_alfter/",
              ],
              telephone: "+49-2222-62779",
              email: "zauberhaende.alfter@gmail.com",
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
                closes: "13:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
                opens: "14:00",
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
                      description: "Reinigungsannahme für Textilien, Leder und Wildleder – gereinigt von unserer Partner-Fachreinigung",
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
                      name: "Brautkleid Anpassung",
                      description: "Spezialisierte Anpassungen für Brautkleider und festliche Kleidung",
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
              }
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        {/* Platz für die feste Kontaktleiste am Handy, in Footer-Farbe */}
        <div aria-hidden="true" className="h-[calc(3.75rem+env(safe-area-inset-bottom,0px))] bg-primary md:hidden" />
        <MobileContactBar />
        <CookieBanner />
        <SpeedInsights />
        <Analytics />

      </body>
    </html>
  )
}
