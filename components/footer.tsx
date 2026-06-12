import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-200">
                <Image
                  src="/images/logo.webp"
                  alt="Zauberhände Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="font-semibold text-lg">Zauberhände</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Ihre Änderungsschneiderei in Alfter - wir sorgen mit präziser Arbeit und individuellem Service dafür, dass
              Ihre Kleidung perfekt sitzt.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/people/Zauberh%C3%A4nde-%C3%84nderungsschneiderei/61557229961543/#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@zh_alfter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://de.pinterest.com/zauberhaende_alfter/_created/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-200">
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-4 w-4 text-accent mt-1 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-primary-foreground/80">
                  Zauberhände Änderungsschneiderei
                  <br />
                  Holzgasse 13a
                  <br />
                  53347 Alfter
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-200" />
                <a
                  href="tel:+49222262779"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  02222 62779
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-200" />
                <a
                  href="mailto:kontakt@zh-alfter.de"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  kontakt@zh-alfter.de
                </a>
              </div>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom duration-500 delay-400">
            <h3 className="font-semibold text-lg mb-4">Öffnungszeiten</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-medium">Montag bis Freitag:</p>
                <p className="text-sm">10:00–13:00 Uhr</p>
                <p className="text-sm">14:00–18:00 Uhr</p>
              </div>
              <div>
                <p className="font-medium">Mittwoch & Samstag:</p>
                <p className="text-sm">10:00–13:00 Uhr</p>
              </div>
              <div>
                <p className="font-medium">Sonntag geschlossen</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center animate-in fade-in slide-in-from-bottom duration-500 delay-600">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Zauberhände Änderungsschneiderei. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/datenschutz"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm hover:scale-105 transition-all duration-200"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-primary-foreground/60 hover:text-primary-foreground text-sm hover:scale-105 transition-all duration-200"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
