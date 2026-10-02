"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Geschlossenes Menü ist für Tastatur und Screenreader nicht erreichbar
  useEffect(() => {
    if (menuRef.current) menuRef.current.inert = !isMenuOpen
  }, [isMenuOpen])

  const navItems = [
    { href: "/", label: "Startseite" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/galerie", label: "Galerie" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <nav className="site-nav border-b border-border/60 bg-background/95 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative group-hover:scale-110 transition-transform duration-200">
              <Image
                src="/images/logo.webp"
                alt="Zauberhände Änderungsschneiderei Logo"
                width={40}
                height={40}
                className="object-contain rounded-sm"
                loading="eager"
                quality={90}
              />
            </div>
            <span className="font-semibold text-lg text-foreground">Zauberhände</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                  pathname === item.href ? "text-foreground border-b-2 border-accent" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4">
              <a href="tel:+49222262779">Anrufen</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMenuOpen}
              className="menu-toggle relative h-10 w-10"
              data-open={isMenuOpen ? "" : undefined}
            >
              <Menu className="menu-icon-open h-5 w-5" />
              <X className="menu-icon-close absolute h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Klappt von der Leiste nach unten auf und auf demselben Weg wieder zu */}
        <div ref={menuRef} className="mobile-menu md:hidden" data-open={isMenuOpen ? "" : undefined}>
          <div className="mobile-menu-inner">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors duration-150 ${
                    pathname === item.href
                      ? "text-foreground bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5 active:bg-accent/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full">
                  <a href="tel:+49222262779">Anrufen</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
