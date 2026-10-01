import { services } from "@/lib/services"
import { locations } from "@/lib/locations"
import galleryData from "@/data/gallery.json"

// Eigene Sitemap statt app/sitemap.ts, weil Next.js 14 dort keine Bilder unterstützt
export const dynamic = "force-static"

const baseUrl = "https://zh-alfter.de"
// Festes Datum statt new Date(): bei inhaltlichen Änderungen hier anpassen
const lastUpdated = "2026-10-01"

interface SitemapEntry {
  path: string
  changeFrequency: "monthly" | "yearly"
  priority: number
  images?: string[]
}

const galleryImages = (galleryData as { type: string; src: string }[])
  .filter((item) => item.type === "image")
  .map((item) => item.src)

const entries: SitemapEntry[] = [
  {
    path: "",
    changeFrequency: "monthly",
    priority: 1,
    images: ["/alfter-video-thumbnail.webp"],
  },
  { path: "/leistungen", changeFrequency: "monthly", priority: 0.8 },
  ...locations.map((location) => ({
    path: `/${location.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...services.map((service) => ({
    path: `/leistungen/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: service.images?.map((image) => image.src),
  })),
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
  { path: "/galerie", changeFrequency: "monthly", priority: 0.7, images: galleryImages },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
]

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

export function GET() {
  const urls = entries
    .map((entry) => {
      const images = (entry.images ?? [])
        .map((src) => `<image:image><image:loc>${escapeXml(baseUrl + encodeURI(src))}</image:loc></image:image>`)
        .join("")
      return `<url><loc>${baseUrl}${entry.path}</loc><lastmod>${lastUpdated}</lastmod><changefreq>${entry.changeFrequency}</changefreq><priority>${entry.priority}</priority>${images}</url>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}
