import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
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
        {children}
      </body>
    </html>
  );
}
