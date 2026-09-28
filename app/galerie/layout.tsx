import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galerie – Vorher/Nachher unserer Schneiderarbeiten in Alfter",
  alternates: { canonical: "/galerie" },
  description:
    "Vorher/Nachher-Bilder unserer Änderungen und Reparaturen: Jackenreparatur, Brandlöcher, Hosen kürzen und mehr – Zauberhände Änderungsschneiderei in Alfter bei Bonn.",
}

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return children
}
