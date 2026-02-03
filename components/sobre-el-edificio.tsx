"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROOT_MARGIN = "0px 0px -80px 0px";
const THRESHOLD = 0.15;

export function SobreElEdificio() {
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
      id="el-proyecto"
      aria-label="El Proyecto"
      className={inView ? "sobre-edificio in-view" : "sobre-edificio"}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Columna texto — en mobile va abajo (order-2), en desktop izquierda */}
          <div className="order-2 lg:order-1">
            <div className="sobre-edificio-line h-1 rounded-full bg-brand-orange" />
            <h2 className="sobre-edificio-title mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              El primer paso hacia un hogar magistral
            </h2>
            <p className="sobre-edificio-p1 mt-6 text-base text-muted-foreground lg:text-lg">
              En Magistral Constructora creemos que un hogar no es solo un
              espacio físico — es el lugar donde se construyen los recuerdos más
              importantes de tu vida. El Edificio Magistral es nuestra primera
              obra, y la hemos proyectado con esa misma convicción: cada detalle
              fue pensado para que tú y tu familia se sientan en casa desde el
              día uno.
            </p>
            <p className="sobre-edificio-p2 mt-4 text-base text-muted-foreground lg:text-lg">
              Ubicado en una de las zonas más tranquilas y conectadas de Cayma,
              el edificio combina una arquitectura moderna con acabados de
              primera calidad. Desde el estacionamiento hasta la azotea, cada
              nivel fue diseñado buscando el máximo confort y seguridad para su
              familia.
            </p>
          </div>

          {/* Columna imagen — en mobile arriba (order-1), en desktop derecha */}
          <div className="sobre-edificio-img relative order-1 aspect-[4/3] overflow-hidden rounded-lg lg:order-2 lg:aspect-auto lg:h-[420px]">
            <Image
              src="/landing/sobre_el_edificio.png"
              alt="Edificio Magistral - Tipología y distribución, departamentos de 2 y 3 habitaciones"
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
