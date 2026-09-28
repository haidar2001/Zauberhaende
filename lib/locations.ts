export interface LocationPage {
  slug: string
  city: string
  title: string
  description: string
  h1: string
  intro: string
  arrival: string
  districts: string[]
  districtsText: string
}

export const locations: LocationPage[] = [
  {
    slug: "aenderungsschneiderei-alfter",
    city: "Alfter",
    title: "Änderungsschneiderei Alfter – Schneiderei & Reinigung vor Ort",
    description:
      "Ihre Änderungsschneiderei in Alfter: Hosen kürzen, Kleider ändern, Reparaturen, Leder und Textilreinigung. Holzgasse 13a – ohne Termin vorbeikommen.",
    h1: "Ihre Änderungsschneiderei in Alfter",
    intro:
      "Zauberhände ist Ihre Schneiderei direkt in Alfter. In unserem Geschäft in der Holzgasse 13a ändern, reparieren und pflegen wir Ihre Kleidung – persönlich, sorgfältig und ohne Termin.",
    arrival: "Unser Geschäft liegt zentral in Alfter, Parkplätze finden Sie direkt vor dem Geschäft.",
    districts: ["Alfter-Ort", "Oedekoven", "Impekoven", "Gielsdorf", "Witterschlick", "Volmershoven-Heidgen"],
    districtsText: "Wir sind die Schneiderei für ganz Alfter und alle Ortsteile:",
  },
  {
    slug: "aenderungsschneiderei-bonn",
    city: "Bonn",
    title: "Änderungsschneiderei nahe Bonn – nur 14 Min. entfernt",
    description:
      "Änderungsschneiderei für Bonn: Zauberhände in Alfter, nur 14 Minuten von Bonn. Hosen kürzen, Kleider ändern, Reparaturen, Reinigung. Ohne Termin.",
    h1: "Änderungsschneiderei für Bonn – direkt nebenan in Alfter",
    intro:
      "Sie suchen eine Änderungsschneiderei in Bonn? Zauberhände liegt direkt an der Stadtgrenze in Alfter – mit Bus, Bahn oder Auto nur rund 14 Minuten entfernt.",
    arrival:
      "Von Bonn aus erreichen Sie uns mit öffentlichen Verkehrsmitteln in etwa 14 Minuten. Mit dem Auto parken Sie direkt vor dem Geschäft – ohne Parkplatzsuche in der Innenstadt.",
    districts: ["Duisdorf", "Hardtberg", "Lengsdorf", "Brüser Berg", "Endenich", "Bonn-Zentrum"],
    districtsText: "Besonders schnell sind Sie bei uns aus den westlichen Bonner Stadtteilen:",
  },
  {
    slug: "aenderungsschneiderei-bornheim",
    city: "Bornheim",
    title: "Änderungsschneiderei nahe Bornheim – nur 10 Min. entfernt",
    description:
      "Änderungsschneiderei für Bornheim: Zauberhände in Alfter, etwa 10 Minuten von Bornheim. Hosen kürzen, Kleider ändern, Reparaturen, Reinigung. Ohne Termin.",
    h1: "Änderungsschneiderei für Bornheim – in 10 Minuten in Alfter",
    intro:
      "Aus Bornheim sind Sie in etwa 10 Minuten bei Zauberhände in Alfter. Ob Hose kürzen, Kleid anpassen oder Reißverschluss ersetzen – bei uns bekommen Sie alles aus einer Hand.",
    arrival:
      "Von Bornheim aus sind Sie in etwa 10 Minuten bei uns, es gibt eine gute Busverbindung. Mit dem Auto parken Sie direkt vor dem Geschäft.",
    districts: ["Bornheim-Ort", "Roisdorf", "Brenig", "Merten", "Sechtem", "Waldorf"],
    districtsText: "Wir sind gut erreichbar aus ganz Bornheim, zum Beispiel aus:",
  },
  {
    slug: "aenderungsschneiderei-wesseling",
    city: "Wesseling",
    title: "Änderungsschneiderei nahe Wesseling – Zauberhände Alfter",
    description:
      "Änderungsschneiderei für Wesseling und die Region: Zauberhände in Alfter, rund 20 Minuten mit dem Auto. Änderungen, Reparaturen, Reinigung. Ohne Termin.",
    h1: "Änderungsschneiderei für Wesseling & die Region",
    intro:
      "Unsere Schneiderei in Alfter ist auch aus Wesseling und der Region zwischen Köln und Bonn gut erreichbar. Mit dem Auto sind Sie in rund 20 Minuten bei Zauberhände.",
    arrival: "Von Wesseling aus sind Sie mit dem Auto in etwa 20 Minuten bei uns. Parkplätze gibt es direkt vor dem Geschäft.",
    districts: ["Wesseling", "Rhein-Sieg-Kreis", "Vorgebirge", "Region Bonn"],
    districtsText: "Wir sind Ihre Schneiderei für die ganze Region:",
  },
]

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug)
}
