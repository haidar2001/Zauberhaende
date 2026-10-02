export interface Review {
  name: string
  text: string
}

// Echte 5-Sterne-Bewertungen von Google, Text wortgetreu übernommen
export const reviews = {
  skyg: {
    name: "SKYG",
    text: "Super verlässlich, hyper freundlich und immer sehr gute Arbeit! Ich komme immer wieder gerne hierher, ist inzwischen meine Schneiderei des Vertrauens!",
  },
  florian: {
    name: "Florian",
    text: "Top Service. Mega freundlich. Super kompetent. Machen immer sehr gute Arbeit. Komme immer wieder gerne. Bis zum nächsten Mal",
  },
  nour: {
    name: "Nour H.",
    text: "Ich bin super zufrieden kann die Schneiderei nur weiterempfehlen. Mein Kleid wurde so gekürzt wie es besprochen wurde einfach nur top 👍",
  },
  lokman: {
    name: "Lokman I.",
    text: "Sehr gute änderungsschneidrei. Ich komme extra aus Bonn Duisdorf zu Ihn. Ich kann Zauberhände nur weiter empfohlen. Mein Jacke wurde perfekt für mich angepasst.",
  },
  jan: {
    name: "Jan M.",
    text: "Ich komme extra aus Bonn. Es lohnt sich jedes Mal. Super zufrieden. Kann es jeden empfehlen.",
  },
  rauend: {
    name: "Rauend D.",
    text: "Top Service, super schnell und nebenbei auch nette Unterhaltung. Ich habe kurzfristig einen Anzugsanpassung gebraucht und hab innerhalb von 3 Tagen ein Top Ergebnis bekommen. Die Nähte sind hervorragend verarbeitet und alles sitzt 1a! Die Hose meine Frau wurde während meiner Anprobe repariert. Kann ich nur jedem empfehlen.",
  },
} satisfies Record<string, Review>

type ReviewKey = keyof typeof reviews

const homeReviews: ReviewKey[] = ["rauend", "skyg", "nour", "lokman", "florian", "jan"]

// Passende Bewertungen je Leistungs- oder Ortsseite
const pageReviews: Record<string, ReviewKey[]> = {
  "hosen-kuerzen": ["rauend", "skyg"],
  "brautkleid-aendern": ["nour", "florian"],
  "reissverschluss-ersetzen": ["lokman", "skyg"],
  "leder-aenderungen": ["lokman", "florian"],
  textilreinigung: ["skyg", "florian"],
  karnevalskostueme: ["skyg", "rauend"],
  "aenderungsschneiderei-bonn": ["lokman", "jan"],
  "aenderungsschneiderei-alfter": ["skyg", "florian"],
  "aenderungsschneiderei-bornheim": ["rauend", "nour"],
  "aenderungsschneiderei-wesseling": ["florian", "skyg"],
}

export function getReviews(page?: string): Review[] {
  const keys = (page && pageReviews[page]) || homeReviews
  return keys.map((key) => reviews[key])
}
