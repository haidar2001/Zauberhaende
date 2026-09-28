import type { MetadataRoute } from "next"
import { services } from "@/lib/services"
import { locations } from "@/lib/locations"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zh-alfter.de"
  // Festes Datum statt new Date(): bei inhaltlichen Änderungen hier anpassen
  const lastUpdated = new Date("2026-09-28")

  return [
    {
      url: baseUrl,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...locations.map((location) => ({
      url: `${baseUrl}/${location.slug}`,
      lastModified: lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/leistungen/${service.slug}`,
      lastModified: lastUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/kontakt`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
     {
      url: `${baseUrl}/galerie`,
      lastModified: lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: lastUpdated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
