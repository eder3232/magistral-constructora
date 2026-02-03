"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ROOT_MARGIN = "0px 0px -100px 0px";
const THRESHOLD = 0;

/** Reemplazar con el número real cuando esté disponible */
const TELEFONO_DISPLAY = "+51 913 367 960";
const TELEFONO_HREF = "tel:+51913367960    "; // placeholder; usar tel:+51987654321 cuando haya número real

export function CtaContacto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contacto"
      aria-label="Contacto"
      className={cn(
        "cta-contacto bg-gradient-to-b from-brand-navy to-brand-navy-dark",
        inView && "in-view"
      )}
    >
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24 lg:py-32">
        <h2 className="cta-title font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="cta-desc mt-4 text-base text-brand-white/90 md:text-lg">
          Agenda una visita o solicita más información sobre el Edificio
          Magistral. Nuestro equipo está listo para atenderte.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <Button
            asChild
            size="lg"
            className="cta-btn1 min-h-[44px] w-full bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90 sm:w-auto"
          >
            <Link href="#contacto">Agendar Visita</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="cta-btn2 min-h-[44px] w-full border-2 border-brand-white bg-transparent text-brand-white hover:bg-brand-white/10 sm:w-auto"
          >
            <a href={TELEFONO_HREF}>
              Llamar al {TELEFONO_DISPLAY}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
