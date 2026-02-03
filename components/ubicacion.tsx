"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PUNTOS_REFERENCIA = [
  "A 5 minutos del centro comercial más cercano",
  "Zona residencial tranquila y consolidada",
  "Conectado a las principales avenidas de Cayma",
  "Cerca de colegios, clínicas y servicios públicos",
] as const;

const ROOT_MARGIN = "0px 0px -100px 0px";
const THRESHOLD = 0;

export function Ubicacion() {
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
      id="ubicacion"
      aria-label="Ubicación"
      className={cn("ubicacion", inView && "in-view")}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32">
        <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Una ubicación que suma
        </h2>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Columna texto */}
          <div className="ubicacion-texto">
            <p className="text-lg font-medium text-foreground">
              Calle Los Arces N°220, Cayma, Arequipa
            </p>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              Puntos de referencia:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-2 text-muted-foreground">
              {PUNTOS_REFERENCIA.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
          </div>

          {/* Columna mapa — por ahora imagen; TODO: reemplazar por Google Maps */}
          <div className="ubicacion-mapa relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted/30 lg:aspect-video">
            <Image
              src="/landing/ubicacion/ubicacion.png"
              alt="Ubicación del Edificio Magistral - Calle Los Arces, Cayma, Arequipa"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
