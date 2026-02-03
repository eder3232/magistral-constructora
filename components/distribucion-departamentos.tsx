"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DEPT_2D = {
  title: "Departamento de 2 Dormitorios",
  espacios:
    "Sala · Comedor · Cocina · 2 Dormitorios · Baño completo · Balcón · Lavandería",
  area: "~85 m²",
  precio: "Consultar precio",
};

const DEPT_3D = {
  title: "Departamento de 3 Dormitorios",
  espacios:
    "Sala · Comedor · Cocina · 3 Dormitorios · 2 Baños · Balcón · Lavandería",
  area: "~110 m²",
  precio: "Consultar precio",
};

const ROOT_MARGIN = "0px 0px -100px 0px";
const THRESHOLD = 0;

export function DistribucionDepartamentos() {
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
      id="distribucion"
      aria-label="Distribución de Departamentos"
      className={cn("distribucion", inView && "in-view")}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32">
        <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Distribución de departamentos
        </h2>

        {/* Imagen de referencia de interior */}
        <div className="relative mx-auto mt-10 aspect-[16/10] max-w-4xl overflow-hidden rounded-xl lg:mt-12">
          <Image
            src="/landing/distribucion_departamentos/foto_interior_sala.png"
            alt="Interior de departamento - Sala y comedor Edificio Magistral"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Dos cards side by side */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Card
            className={cn(
              "distribucion-card-link distribucion-card-left relative overflow-hidden border shadow-sm",
              "rounded-xl bg-card"
            )}
          >
            <div
              className="distribucion-card-line absolute left-0 right-0 top-0 h-1 bg-brand-orange"
              aria-hidden
            />
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground lg:text-2xl">
                {DEPT_2D.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {DEPT_2D.espacios}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-foreground">{DEPT_2D.area}</p>
              <p className="text-sm text-muted-foreground">{DEPT_2D.precio}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="min-h-[44px]">
                <Link href="#contacto">Ver detalles</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card
            className={cn(
              "distribucion-card-link distribucion-card-right relative overflow-hidden border shadow-sm",
              "rounded-xl bg-card"
            )}
          >
            <div
              className="distribucion-card-line absolute left-0 right-0 top-0 h-1 bg-brand-orange"
              aria-hidden
            />
            <CardHeader>
              <CardTitle className="font-display text-xl text-foreground lg:text-2xl">
                {DEPT_3D.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {DEPT_3D.espacios}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-foreground">{DEPT_3D.area}</p>
              <p className="text-sm text-muted-foreground">{DEPT_3D.precio}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="min-h-[44px]">
                <Link href="#contacto">Ver detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Plano de planta debajo de las cards */}
        <div className="relative mt-12 overflow-hidden rounded-xl border bg-muted/30 lg:mt-16">
          <p className="px-4 pt-4 text-center text-sm font-medium text-muted-foreground">
            Plano de planta tipo
          </p>
          <div className="relative aspect-[4/3] w-full max-w-4xl mx-auto">
            <Image
              src="/landing/distribucion_departamentos/plano_planta_piso.png"
              alt="Plano de planta de piso típico - Edificio Magistral"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
