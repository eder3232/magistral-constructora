import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative flex min-h-dvh min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con zoom sutil al cargar */}
      <div className="absolute inset-0">
        <Image
          src="/landing/hero.jpg"
          alt="Familias en Edificio Magistral - Tu nuevo hogar en Arequipa"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 100vw"
          className="object-cover object-center hero-animate-image"
        />
        {/* Overlay oscuro gradiente */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/70 via-brand-navy-dark/50 to-brand-navy-dark/80"
          aria-hidden
        />
      </div>

      {/* Contenido centrado */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="hero-animate-subtitle text-sm font-medium tracking-wide text-brand-white/95 md:text-base lg:text-lg">
          Tu nuevo hogar en Arequipa
        </p>
        <h1 className="hero-animate-title mt-2 font-display text-4xl font-bold leading-tight text-brand-white md:text-5xl lg:text-7xl">
          Edificio Magistral
        </h1>
        <div className="hero-animate-line mx-auto mt-3 h-1 overflow-hidden rounded-full bg-brand-orange" />
        <p className="hero-animate-desc mt-6 text-base text-brand-white/90 md:text-lg">
          Departamentos de 2 y 3 dormitorios en el corazón de Cayma.
          <br className="hidden sm:inline" /> Diseñado para vivir diferente.
        </p>
        <div className="hero-animate-button mt-8">
          <Button
            asChild
            size="lg"
            className="min-h-[44px] bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90"
          >
            <Link href="#el-proyecto">Conocer el Proyecto</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
