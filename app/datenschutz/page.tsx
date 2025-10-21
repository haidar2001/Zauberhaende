import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutz - Zauberhände Änderungsschneiderei",
  description: "Datenschutzerklärung der Zauberhände Änderungsschneiderei in Alfter",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-in fade-in slide-in-from-bottom duration-500">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Datenschutzerklärung</h1>

          <div className="bg-card rounded-lg shadow-sm p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="text-muted-foreground space-y-3">
                <h3 className="text-lg font-medium text-foreground">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <div className="text-muted-foreground space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Datenschutz</h3>
                  <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                    Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                    sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <div className="mt-2 pl-4 border-l-2 border-accent">
                    <p>Zauberhände Änderungsschneiderei</p>
                    <p>Mohamad Haidar</p>
                    <p>Holzgasse 13a</p>
                    <p>53347 Alfter</p>
                    <p>Telefon: +490222262779</p>
                    <p>E-Mail: Kontakt@zh-alfter.de</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
              <div className="text-muted-foreground space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Server-Log-Dateien</h3>
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="mt-2">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Kontakt und Kommunikation</h2>
              <div className="text-muted-foreground space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Kontaktaufnahme</h3>
                  <p>
                    Bei der Kontaktaufnahme mit uns (z.B. per Telefon oder E-Mail) werden die von Ihnen mitgeteilten
                    Daten von uns gespeichert, um Ihre Fragen zu bearbeiten. Die in diesem Zusammenhang anfallenden
                    Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder schränken die
                    Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ihre Rechte</h2>
              <div className="text-muted-foreground space-y-4">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                  <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
                  <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten bei uns</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                </ul>
                <p className="mt-4">
                  Bei Fragen wenden Sie sich gerne jederzeit unter der im Impressum angegebenen Adresse an uns. Des
                  Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="text-muted-foreground">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                  Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                  Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Änderung unserer Datenschutzbestimmungen
              </h2>
              <div className="text-muted-foreground">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
                  Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen,
                  z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue
                  Datenschutzerklärung.
                </p>
              </div>
            </section>

            <div className="text-sm text-muted-foreground mt-8 pt-4 border-t border-border">
              <p>Stand: Januar 2025</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
