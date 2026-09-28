export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServicePage {
  slug: string
  name: string
  title: string
  description: string
  h1: string
  intro: string
  details: string[]
  faqs: ServiceFaq[]
}

const priceFaq: ServiceFaq = {
  question: "Was kostet das?",
  answer:
    "Feste Preise gibt es bei uns nicht – der Preis richtet sich nach Aufwand und Material. Kommen Sie einfach vorbei, wir schauen uns Ihr Kleidungsstück an und nennen Ihnen den Preis direkt vor Ort.",
}

const appointmentFaq: ServiceFaq = {
  question: "Brauche ich einen Termin?",
  answer:
    "Nein. Sie können während unserer Öffnungszeiten jederzeit ohne Termin in unser Geschäft in der Holzgasse 13a in Alfter kommen.",
}

export const services: ServicePage[] = [
  {
    slug: "hosen-kuerzen",
    name: "Hosen kürzen",
    title: "Hosen kürzen in Alfter bei Bonn & Bornheim",
    description:
      "Hosen kürzen lassen in Alfter bei Bonn & Bornheim: Jeans, Anzughosen und Stoffhosen. Ohne Termin vorbeikommen.",
    h1: "Hosen kürzen in Alfter bei Bonn & Bornheim",
    intro:
      "Ob Jeans, Anzughose oder Stoffhose – in unserer Änderungsschneiderei in Alfter kürzen wir Ihre Hose auf die richtige Länge. Wir stecken die Länge direkt bei Ihnen ab, damit die Hose perfekt sitzt.",
    details: [
      "Jeans kürzen",
      "Anzughosen und Stoffhosen kürzen",
      "Bundweite enger oder weiter machen",
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      {
        question: "Soll ich die Hose mit den passenden Schuhen anprobieren?",
        answer:
          "Ja, am besten bringen Sie die Schuhe mit, die Sie zur Hose tragen. So können wir die Länge genau abstecken.",
      },
    ],
  },
  {
    slug: "brautkleid-aendern",
    name: "Brautkleid ändern",
    title: "Brautkleid ändern lassen in Alfter bei Bonn",
    description:
      "Brautkleid und Abendkleid ändern lassen in Alfter bei Bonn & Bornheim: kürzen, enger machen, anpassen. Persönliche Beratung ohne Termin.",
    h1: "Brautkleid & Abendkleid ändern in Alfter bei Bonn",
    intro:
      "Ihr Brautkleid soll am großen Tag perfekt sitzen. Wir passen Brautkleider, Abendkleider und festliche Mode mit viel Sorgfalt an – von der Länge bis zur Passform.",
    details: [
      "Brautkleid kürzen",
      "Brautkleid enger oder weiter machen",
      "Träger anpassen",
      "Abendkleider und festliche Mode ändern",
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      {
        question: "Wann sollte ich mit meinem Brautkleid vorbeikommen?",
        answer:
          "Kommen Sie möglichst frühzeitig vor der Hochzeit, damit genug Zeit für die Änderungen und eine Anprobe bleibt. Bringen Sie am besten die Schuhe mit, die Sie zur Hochzeit tragen.",
      },
    ],
  },
  {
    slug: "reissverschluss-ersetzen",
    name: "Reißverschluss ersetzen",
    title: "Reißverschluss ersetzen & Kleidung reparieren in Alfter",
    description:
      "Reißverschluss kaputt? Wir ersetzen Reißverschlüsse an Jacken, Hosen und Kleidern und reparieren Kleidung in Alfter bei Bonn & Bornheim. Ohne Termin.",
    h1: "Reißverschluss ersetzen & Kleidung reparieren",
    intro:
      "Ein kaputter Reißverschluss ist kein Grund, ein Lieblingsstück wegzuwerfen. Wir ersetzen Reißverschlüsse und reparieren Risse, Löcher und Futter – damit Ihre Kleidung noch lange hält.",
    details: [
      "Reißverschlüsse an Jacken, Hosen, Röcken und Kleidern ersetzen",
      "Futter in Jacken und Mänteln reparieren",
      "Risse und Löcher ausbessern",
      "Knöpfe annähen",
    ],
    faqs: [appointmentFaq, priceFaq],
  },
  {
    slug: "leder-aenderungen",
    name: "Leder-Änderungen",
    title: "Lederjacke ändern & reparieren in Alfter bei Bonn",
    description:
      "Lederjacken und Lederbekleidung ändern und reparieren in Alfter bei Bonn & Bornheim – plus Lederreinigung. Ohne Termin vorbeikommen.",
    h1: "Leder-Änderungen & Lederreinigung in Alfter",
    intro:
      "Leder braucht Erfahrung und Feingefühl. Wir ändern und reparieren Lederjacken und Lederbekleidung und nehmen Leder und Wildleder zur Reinigung an.",
    details: [
      "Lederjacken kürzen oder enger machen",
      "Reißverschlüsse und Futter in Lederjacken erneuern",
      "Lederbekleidung reparieren",
      "Reinigung von Leder und Wildleder",
    ],
    faqs: [appointmentFaq, priceFaq],
  },
  {
    slug: "textilreinigung",
    name: "Textilreinigung",
    title: "Textilreinigung & Reinigungsannahme in Alfter",
    description:
      "Reinigungsannahme in Alfter bei Bonn & Bornheim: Anzüge, Kleider, Hemden, Leder, Brautkleider und mehr. Ohne Termin abgeben.",
    h1: "Textilreinigung in Alfter bei Bonn & Bornheim",
    intro:
      "Geben Sie Ihre Kleidung bei uns in Alfter zur Reinigung ab – ganz ohne Termin. Wir nehmen Alltagskleidung genauso an wie empfindliche Stücke.",
    details: [
      "Anzüge, Kleider, Hemden, Blusen und Hosen",
      "Leder und Wildleder",
      "Brautkleider",
      "Teppiche",
    ],
    faqs: [appointmentFaq, priceFaq],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
