export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceSection {
  heading: string
  text: string
}

export interface ServicePage {
  slug: string
  name: string
  title: string
  description: string
  h1: string
  intro: string
  details: string[]
  sections: ServiceSection[]
  faqs: ServiceFaq[]
}

export const priceFaq: ServiceFaq = {
  question: "Was kostet das?",
  answer:
    "Feste Preise gibt es bei uns nicht – der Preis richtet sich nach Aufwand und Material. Kommen Sie einfach vorbei, wir schauen uns Ihr Kleidungsstück an und nennen Ihnen den Preis direkt vor Ort, bevor wir mit der Arbeit beginnen.",
}

export const appointmentFaq: ServiceFaq = {
  question: "Brauche ich einen Termin?",
  answer:
    "Nein. Sie können während unserer Öffnungszeiten jederzeit ohne Termin in unser Geschäft in der Holzgasse 13a in Alfter kommen.",
}

export const expressFaq: ServiceFaq = {
  question: "Geht es auch schnell?",
  answer:
    "Ja, für eilige Aufträge bieten wir einen Express-Service an. Je nach Aufwand können Änderungen sogar noch am selben Tag fertig werden. Sagen Sie uns bei der Abgabe einfach, bis wann Sie das Stück brauchen.",
}

export const services: ServicePage[] = [
  {
    slug: "hosen-kuerzen",
    name: "Hosen kürzen",
    title: "Hosen kürzen in Alfter bei Bonn & Bornheim",
    description:
      "Hosen kürzen lassen in Alfter bei Bonn & Bornheim: Jeans, Anzughosen und Stoffhosen. Ohne Termin vorbeikommen, Express möglich.",
    h1: "Hosen kürzen in Alfter bei Bonn & Bornheim",
    intro:
      "Ob Jeans, Anzughose oder Stoffhose – in unserer Änderungsschneiderei in Alfter kürzen wir Ihre Hose auf die richtige Länge. Wir stecken die Länge direkt bei Ihnen ab, damit die Hose perfekt sitzt.",
    details: [
      "Jeans kürzen",
      "Anzughosen und Stoffhosen kürzen",
      "Bundweite enger machen",
      "Hose verlängern oder weiter machen – wenn genug Stoff vorhanden ist",
    ],
    sections: [
      {
        heading: "Die richtige Länge – direkt bei Ihnen abgesteckt",
        text: "Die passende Hosenlänge hängt von den Schuhen, dem Schnitt und Ihrem Geschmack ab. Deshalb messen wir nicht nur, sondern stecken die Länge direkt an Ihnen ab, während Sie die Hose tragen. So sehen Sie schon vor der Änderung, wie die Hose später fällt – ob knapp über dem Schuh, mit leichtem Aufschlag oder bodenlang.",
      },
      {
        heading: "Wovon der Aufwand abhängt",
        text: "Eine einfache Stoffhose ist schneller gekürzt als eine Jeans mit festem Stoff oder eine gefütterte Anzughose. Auch die Art des Saums, Aufschläge und Schlitze spielen eine Rolle. Deshalb nennen wir Ihnen den Preis erst, wenn wir die Hose gesehen haben – dafür wissen Sie ihn vorher ganz genau.",
      },
      {
        heading: "Mehrere Hosen auf einmal",
        text: "Gerade bei neu gekauften Hosen lohnt es sich, gleich alle auf einmal mitzubringen. Wir stecken jede Hose einzeln ab, damit jede zu den Schuhen passt, mit denen Sie sie tragen. Neben der Länge können wir bei Bedarf auch die Bundweite anpassen.",
      },
      {
        heading: "Hose verlängern oder weiter machen – was ist möglich?",
        text: "Kürzen und enger machen geht fast immer. Verlängern oder weiter machen ist dagegen nur manchmal möglich, und dann meist nur um wenige Zentimeter. Das hängt davon ab, wie viel Stoff im Saum oder in den Nähten eingeschlagen ist – und das ist bei jeder Hose anders. Bei manchen Hosen bleibt außerdem die alte Saum- oder Nahtkante leicht sichtbar. Bringen Sie die Hose einfach vorbei: Wir schauen uns die Nähte an und sagen Ihnen ehrlich, ob und wie viel möglich ist.",
      },
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      expressFaq,
      {
        question: "Kann man eine Hose verlängern oder weiter machen?",
        answer:
          "Manchmal, aber meist nur um wenige Zentimeter. Wie viel möglich ist, hängt davon ab, wie viel Stoff im Saum und in den Nähten vorhanden ist – das ist bei jeder Hose anders. Wir prüfen das kostenlos vor Ort, ohne Termin.",
      },
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
    sections: [
      {
        heading: "Persönliche Anprobe und Beratung",
        text: "Jedes Brautkleid ist anders geschnitten und verarbeitet. Bei der ersten Anprobe schauen wir uns gemeinsam mit Ihnen an, wo das Kleid noch nicht perfekt sitzt – an der Taille, an den Trägern oder bei der Länge – und besprechen, was sich ändern lässt. Die Beratung ist kostenlos.",
      },
      {
        heading: "Wovon der Aufwand abhängt",
        text: "Brautkleider haben oft mehrere Lagen aus Tüll, Spitze oder Satin, dazu Futter und Verzierungen. Je mehr Lagen und Details, desto aufwendiger ist eine Änderung. Den genauen Preis nennen wir Ihnen deshalb nach der Anprobe, wenn wir das Kleid und Ihre Wünsche kennen.",
      },
      {
        heading: "Auch für Abendkleider und festliche Anlässe",
        text: "Nicht nur Brautkleider: Auch Abendkleider, Kleider für Brautjungfern, Abiball-Kleider und festliche Mode passen wir an. Kommen Sie am besten mit genug Vorlauf vor Ihrem Anlass, damit Zeit für die Änderung und eine abschließende Anprobe bleibt.",
      },
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      {
        question: "Wann sollte ich mit meinem Brautkleid vorbeikommen?",
        answer:
          "Kommen Sie möglichst frühzeitig vor der Hochzeit, damit genug Zeit für die Änderungen und eine Anprobe bleibt. Bringen Sie am besten die Schuhe mit, die Sie zur Hochzeit tragen.",
      },
      {
        question: "Kann ich mein Brautkleid nach der Hochzeit auch reinigen lassen?",
        answer:
          "Ja, wir nehmen Brautkleider zur Reinigung an und geben sie an unsere Fachreinigung weiter. Bei der Abgabe sagen wir Ihnen, wann Sie das Kleid wieder abholen können.",
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
    sections: [
      {
        heading: "Reparieren statt wegwerfen",
        text: "Viele Kleidungsstücke landen im Müll, nur weil ein Reißverschluss klemmt, eine Naht aufgeht oder das Futter reißt. Dabei lässt sich das meist gut reparieren. Eine Reparatur verlängert die Lebensdauer Ihrer Kleidung und schont Ressourcen – besonders bei hochwertigen Jacken, Mänteln und Lieblingsstücken.",
      },
      {
        heading: "Wovon der Aufwand abhängt",
        text: "Ein Reißverschluss in einem Rock ist schneller ersetzt als einer in einer gefütterten Winterjacke oder Daunenjacke, bei der erst Futter und Nähte geöffnet werden müssen. Auch Länge und Art des Reißverschlusses spielen eine Rolle. Wir schauen uns das Stück an und sagen Ihnen vorab, was die Reparatur kostet.",
      },
      {
        heading: "Risse, Löcher und Brandlöcher",
        text: "Neben Reißverschlüssen reparieren wir Risse, aufgegangene Nähte, Löcher und beschädigtes Futter und nähen Knöpfe an. Beispiele unserer Arbeit – etwa eine reparierte Daunenjacke oder ein ausgebessertes Brandloch – finden Sie in unserer Galerie.",
      },
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      expressFaq,
      {
        question: "Lohnt sich eine Reparatur bei einer älteren Jacke?",
        answer:
          "Oft ja – gerade bei hochwertigen Jacken und Mänteln ist eine Reparatur meist deutlich günstiger als ein Neukauf. Bringen Sie das Stück vorbei, wir sagen Ihnen ehrlich, ob sich die Reparatur lohnt.",
      },
    ],
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
    sections: [
      {
        heading: "Warum Leder besondere Sorgfalt braucht",
        text: "Anders als bei Stoff bleibt bei Leder jeder Nadelstich sichtbar – eine Naht lässt sich nicht einfach wieder auftrennen und neu setzen. Deshalb planen wir jede Änderung an Leder genau, bevor wir schneiden oder nähen. Kommen Sie mit Ihrer Lederjacke vorbei, dann besprechen wir gemeinsam, was möglich ist.",
      },
      {
        heading: "Ändern und reparieren",
        text: "Wir kürzen Ärmel und Jacken, machen Lederbekleidung enger und erneuern Reißverschlüsse und Futter. Wie aufwendig eine Änderung ist, hängt von der Lederart, dem Futter und der Verarbeitung der Jacke ab. Den Preis nennen wir Ihnen, nachdem wir das Stück gesehen haben.",
      },
      {
        heading: "Leder und Wildleder reinigen lassen",
        text: "Leder und Wildleder gehören nicht in die Waschmaschine. Bei uns können Sie Lederjacken, Ledermäntel und Wildleder zur Reinigung abgeben – wir geben sie an unsere Fachreinigung weiter und sagen Ihnen bei der Abgabe, wann Sie das Stück wieder abholen können.",
      },
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      {
        question: "Kann ich eine Lederjacke ändern und gleich reinigen lassen?",
        answer:
          "Ja. Sprechen Sie uns bei der Abgabe einfach darauf an, dann planen wir Änderung und Reinigung gemeinsam.",
      },
      {
        question: "Wie lange dauert eine Leder-Änderung?",
        answer:
          "Das hängt von der Art der Änderung und der Verarbeitung der Jacke ab. Bei der Annahme sagen wir Ihnen, wann Sie Ihr Stück wieder abholen können.",
      },
    ],
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
    sections: [
      {
        heading: "So funktioniert unsere Reinigungsannahme",
        text: "Sie geben Ihre Kleidung während unserer Öffnungszeiten bei uns im Geschäft in Alfter ab. Wir nehmen die Stücke sorgfältig auf, geben sie an unsere Partner-Fachreinigung weiter und sagen Ihnen bei der Abgabe, wann Sie alles wieder abholen können. So sparen Sie sich den Weg zur Reinigung.",
      },
      {
        heading: "Änderung und Reinigung aus einer Hand",
        text: "Ihr Mantel braucht einen neuen Reißverschluss und sollte ohnehin gereinigt werden? Oder die Anzughose muss gekürzt und gereinigt werden? Bei uns geben Sie beides an einer Stelle ab – das spart Ihnen Zeit und Wege.",
      },
      {
        heading: "Auch für empfindliche Stücke",
        text: "Neben Alltagskleidung wie Hemden, Blusen, Hosen und Anzügen nehmen wir auch Leder, Wildleder, Brautkleider und Teppiche zur Reinigung an. Sagen Sie uns bei der Abgabe, wenn ein Stück Flecken hat oder besonders empfindlich ist.",
      },
    ],
    faqs: [
      appointmentFaq,
      priceFaq,
      {
        question: "Reinigen Sie die Kleidung selbst?",
        answer:
          "Nein, wir sind eine Reinigungsannahme: Wir nehmen Ihre Kleidung an und geben sie an unsere Partner-Fachreinigung weiter. Abgabe und Abholung erfolgen bei uns im Geschäft in Alfter.",
      },
      {
        question: "Wann kann ich meine Kleidung wieder abholen?",
        answer:
          "Bei der Abgabe nennen wir Ihnen den Abholtermin. Sie holen Ihre gereinigte Kleidung dann während unserer Öffnungszeiten bei uns im Geschäft ab.",
      },
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
