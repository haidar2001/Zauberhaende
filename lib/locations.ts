import type { ServiceFaq, ServiceSection } from "@/lib/services"

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
  sections: ServiceSection[]
  faqs: ServiceFaq[]
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
    sections: [
      {
        heading: "Schneiderei und Reinigungsannahme im Ort",
        text: "Für eine gekürzte Hose oder eine Jacke zur Reinigung müssen Sie aus Alfter nicht nach Bonn fahren. Bei uns in der Holzgasse erledigen Sie Änderungen, Reparaturen und die Abgabe zur Reinigung an einer Stelle – ohne Termin, während unserer Öffnungszeiten.",
      },
      {
        heading: "Alles, was Ihre Kleidung braucht",
        text: "Wir kürzen Hosen, Röcke und Ärmel, machen Kleidung enger oder weiter, ersetzen Reißverschlüsse, reparieren Futter, Risse und Löcher und ändern Lederjacken. Auch Brautkleider und festliche Mode passen wir an. Kleidung, Leder und Wildleder nehmen wir zur Reinigung an und geben sie an unsere Fachreinigung weiter.",
      },
      {
        heading: "Persönliche Beratung ohne Termin",
        text: "Kommen Sie einfach mit Ihrem Kleidungsstück vorbei. Wir schauen es uns gemeinsam mit Ihnen an, stecken bei Bedarf direkt ab und nennen Ihnen den Preis, bevor wir anfangen. Wenn es eilig ist, fragen Sie nach unserem Express-Service.",
      },
    ],
    faqs: [
      {
        question: "Wo genau ist die Schneiderei in Alfter?",
        answer:
          "Sie finden uns in der Holzgasse 13a, 53347 Alfter. Über den Link „Route in Google Maps planen“ auf dieser Seite können Sie direkt die Route starten.",
      },
      {
        question: "Kann ich Änderung und Reinigung zusammen abgeben?",
        answer:
          "Ja. Sie können Kleidung zum Ändern und zur Reinigung gleichzeitig bei uns abgeben und später alles zusammen wieder abholen.",
      },
    ],
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
    sections: [
      {
        heading: "Aus dem Bonner Westen schnell bei uns",
        text: "Unsere Schneiderei liegt direkt hinter der Bonner Stadtgrenze. Aus Duisdorf, Lengsdorf, Hardtberg oder vom Brüser Berg sind Sie oft schneller bei uns als in der Bonner Innenstadt – und parken direkt vor dem Geschäft statt im Parkhaus. Einen Termin brauchen Sie nicht.",
      },
      {
        heading: "Schnelle Hilfe vor dem Termin",
        text: "Die Hose für das Vorstellungsgespräch ist zu lang, am Wintermantel klemmt der Reißverschluss oder das Kleid für die Feier sitzt nicht? Für eilige Aufträge bieten wir einen Express-Service an – je nach Aufwand ist die Änderung sogar noch am selben Tag fertig.",
      },
      {
        heading: "Alle Änderungen und die Reinigung an einem Ort",
        text: "Ob Hosen kürzen, Kleidung enger machen, Reißverschluss ersetzen, Lederjacke ändern oder Brautkleid anpassen: Alle Arbeiten erledigen wir selbst in unserer Schneiderei. Kleidung zur Reinigung geben Sie gleich mit ab – wir leiten sie an unsere Fachreinigung weiter.",
      },
    ],
    faqs: [
      {
        question: "Wie komme ich aus Bonn zu Ihnen?",
        answer:
          "Mit Bus oder Bahn sind Sie aus Bonn in etwa 14 Minuten bei uns in der Holzgasse 13a in Alfter. Mit dem Auto parken Sie direkt vor dem Geschäft. Über „Route in Google Maps planen“ starten Sie die Route von Ihrem Standort.",
      },
      {
        question: "Lohnt sich der Weg aus der Bonner Innenstadt?",
        answer:
          "Bei uns kommen Sie ohne Termin vorbei, parken direkt vor dem Geschäft und können eilige Änderungen per Express erledigen lassen. Rufen Sie uns gern vorher an, wenn Sie Fragen zu Ihrem Kleidungsstück haben.",
      },
    ],
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
    sections: [
      {
        heading: "Ihre Nachbar-Schneiderei im Vorgebirge",
        text: "Alfter und Bornheim liegen direkt nebeneinander am Vorgebirge. Aus Roisdorf, Brenig, Merten oder Bornheim-Ort sind Sie in rund 10 Minuten bei uns in der Holzgasse 13a – mit dem Bus oder mit dem Auto, Parkplätze gibt es direkt vor dem Geschäft.",
      },
      {
        heading: "Von der Alltagskleidung bis zum Festkleid",
        text: "Wir kürzen Hosen und Ärmel, passen die Weite an, ersetzen Reißverschlüsse und reparieren Futter, Risse und Löcher. Auch Lederjacken, Brautkleider und festliche Mode ändern wir. Bringen Sie am besten die passenden Schuhe mit, wenn es um Längen geht – dann stecken wir direkt richtig ab.",
      },
      {
        heading: "Reinigung gleich mit abgeben",
        text: "Sie müssen nicht extra zur Reinigung fahren: Anzüge, Kleider, Hemden, Leder und Wildleder können Sie bei uns zur Reinigung abgeben, wenn Sie ohnehin zum Ändern kommen. Wir geben alles an unsere Fachreinigung weiter.",
      },
    ],
    faqs: [
      {
        question: "Wie lange brauche ich aus Bornheim?",
        answer:
          "Aus Bornheim sind Sie in etwa 10 Minuten bei uns in Alfter. Es gibt eine gute Busverbindung, und mit dem Auto parken Sie direkt vor dem Geschäft.",
      },
      {
        question: "Muss ich für eine Änderung zweimal kommen?",
        answer:
          "In der Regel kommen Sie einmal zur Abgabe, bei der wir direkt abstecken, und einmal zur Abholung. Bei aufwendigen Änderungen wie Brautkleidern kann eine zusätzliche Anprobe sinnvoll sein.",
      },
    ],
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
    sections: [
      {
        heading: "Mehrere Stücke auf einmal mitbringen",
        text: "Wenn Sie aus Wesseling zu uns kommen, lohnt es sich, alles auf einmal mitzubringen: die Hosen, die gekürzt werden müssen, die Jacke mit dem kaputten Reißverschluss und die Kleidung für die Reinigung. Wir nehmen alles zusammen an, stecken direkt ab und sagen Ihnen, wann Sie alles wieder abholen können.",
      },
      {
        heading: "Für besondere Stücke",
        text: "Gerade bei Brautkleidern, Abendkleidern und Lederjacken kommt es auf Erfahrung und Sorgfalt an. Bei uns besprechen Sie Ihre Wünsche persönlich, ohne Termin, und erfahren den Preis, bevor wir mit der Arbeit beginnen.",
      },
      {
        heading: "Planen Sie Ihren Besuch",
        text: "Unsere Öffnungszeiten finden Sie auf dieser Seite – beachten Sie, dass wir mittwochs und samstags nur vormittags geöffnet haben. Über „Route in Google Maps planen“ starten Sie die Route von Wesseling direkt zu unserem Geschäft in Alfter.",
      },
    ],
    faqs: [
      {
        question: "Wie lange fahre ich aus Wesseling?",
        answer:
          "Mit dem Auto sind Sie aus Wesseling in etwa 20 Minuten bei uns in Alfter. Parkplätze finden Sie direkt vor dem Geschäft.",
      },
      {
        question: "Kann ich anrufen, bevor ich komme?",
        answer:
          "Gern. Unter 02222 62779 beantworten wir Ihre Fragen zu Ihrem Kleidungsstück, damit sich der Weg für Sie lohnt.",
      },
    ],
  },
]

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug)
}
