import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edificio Magistral | Magistral Constructora",
  description:
    "Departamentos de 2 y 3 dormitorios en Cayma, Arequipa. Tu nuevo hogar en el corazón de una de las zonas más tranquilas y conectadas. Conoce el proyecto.",
  openGraph: {
    title: "Edificio Magistral | Magistral Constructora",
    description:
      "Departamentos de 2 y 3 dormitorios en Cayma, Arequipa. Tu nuevo hogar en el corazón de una de las zonas más tranquilas y conectadas.",
  },
};

/**
 * Espacio superior del contenido: debe coincidir con la altura del navbar
 * (nav: min-h-[44px] + py-3 ≈ 4.25rem) + safe-area para dispositivos con notch.
 */
const MAIN_PT = "calc(4.25rem + env(safe-area-inset-top, 0px))";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${playfairDisplay.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pb-16" style={{ paddingTop: MAIN_PT }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
