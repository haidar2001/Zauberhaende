"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/startseite", label: "Startseite" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 animate-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/startseite" className="flex items-center space-x-2 group">
            <div className="relative group-hover:scale-110 transition-transform duration-200">
              <Image
                src="/images/logo.webp"
                alt="Zauberhände Änderungsschneiderei Logo"
                width={40}
                height={40}
                className="object-contain rounded-sm"
                priority
                quality={90}
              />
            </div>
            <span className="font-semibold text-lg text-foreground">Zauberhände</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-accent hover:scale-105 animate-in fade-in slide-in-from-top duration-300 ${
                  pathname === item.href ? "text-foreground border-b-2 border-accent" : "text-muted-foreground"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="ml-4 hover:scale-105 transition-transform duration-200">
              <a href="tel:+49222262779">Anrufen</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:scale-110 transition-transform duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-105 ${
                    pathname === item.href
                      ? "text-foreground bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="w-full hover:scale-105 transition-transform duration-200">
                  <a href="tel:+4922819999999">Anrufen</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
