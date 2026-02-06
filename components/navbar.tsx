"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { cn } from "@/lib/utils";

// TODO: Transición a rutas — Actualmente varios ítems apuntan a secciones del home (/#...).
// A futuro todos los elementos del nav serán rutas (/nosotros, /contacto, /proyecto, etc.);
// no habrá links a anclas del home. Cuando se migre, reemplazar cada href por su ruta.
const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" }, // TODO: ruta actual es home; puede quedarse como "/"
  { href: "/#el-proyecto", label: "El Proyecto" }, // TODO: futura ruta ej. /proyecto
  { href: "/#caracteristicas", label: "Características" }, // TODO: futura ruta si aplica
  { href: "/#ubicacion", label: "Ubicación" }, // TODO: futura ruta ej. /ubicacion
  { href: "/nosotros", label: "Nosotros" }, // ya es ruta
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          "pt-[env(safe-area-inset-top)]",
          scrolled
            ? "bg-brand-navy-dark/95 backdrop-blur-md text-brand-white"
            : "bg-transparent text-foreground"
        )}
        aria-label="Navegación principal"
      >
        <nav className="mx-auto flex min-h-[44px] max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          {/* Logo — TODO: cuando el nav sea solo rutas, mantener href="/" */}
          <Link
            href="/"
            className={cn(
              "flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              scrolled
                ? "focus-visible:ring-brand-white focus-visible:ring-offset-brand-navy-dark"
                : "focus-visible:ring-foreground focus-visible:ring-offset-background"
            )}
            aria-label="Magistral Constructora - Inicio"
          >
            <Image
              src="/brand/logo_magistral.svg"
              alt="Magistral Constructora"
              width={120}
              height={40}
              className="h-8 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop: links + CTA */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-brand-white/90 hover:text-brand-white"
                    : "text-foreground/90 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            {/* TODO: CTA — actualmente ancla #contacto en home; futura ruta /contacto */}
            <Button
              asChild
              size="lg"
              className="min-h-[44px] bg-brand-orange px-6 text-brand-white hover:bg-brand-orange/90"
            >
              <Link href="/#contacto">Agendar Visita</Link>
            </Button>
          </div>

          {/* Mobile: hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={cn(
                "flex size-11 items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden",
                scrolled
                  ? "text-brand-white focus-visible:ring-brand-white focus-visible:ring-offset-brand-navy-dark"
                  : "text-foreground focus-visible:ring-foreground focus-visible:ring-offset-background"
              )}
              aria-label="Abrir menú"
            >
              <MenuIcon className="size-6" aria-hidden />
            </SheetTrigger>
            <SheetContent
              side="left"
              showCloseButton
              className={cn(
                "inset-0 h-full w-full max-w-full border-0 bg-brand-navy-dark/97 backdrop-blur-sm text-brand-white",
                "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
                "flex flex-col justify-center gap-8 px-8 py-16",
                "[&>button]:text-brand-white [&>button]:opacity-90 [&>button:hover]:opacity-100 [&>button]:focus:ring-brand-white/50"
              )}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center justify-center text-lg font-medium text-brand-white transition-opacity hover:opacity-90"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 min-h-[44px] w-full max-w-xs bg-brand-orange text-brand-white hover:bg-brand-orange/90"
                  >
                    <Link href="/#contacto">Agendar Visita</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
        <ScrollProgress
          className="!top-[calc(4.25rem+env(safe-area-inset-top,0px))] bg-brand-orange"
        />
      </header>
    </>
  );
}
