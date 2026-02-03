"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    icon: "/landing/caracteristicas/sun.png",
    title: "Sky Bar",
    description:
      "Disfruta del mejor panorama de Cayma desde la azotea con un espacio exclusivo para relajarte y socializar.",
  },
  {
    icon: "/landing/caracteristicas/coworking.png",
    title: "Coworking",
    description:
      "Un ambiente moderno y tranquilo para trabajar desde casa sin salir del edificio.",
  },
  {
    icon: "/landing/caracteristicas/grilling.png",
    title: "Área de Parrilla",
    description:
      "Celebra los momentos más importantes con tu familia en un espacio diseñado para compartir.",
  },
  {
    icon: "/landing/caracteristicas/palm-tree.png",
    title: "Techos Verdes",
    description:
      "Espacios verdes integrados que contribuyen al bienestar de los residentes y al medio ambiente.",
  },
  {
    icon: "/landing/caracteristicas/parking-area.png",
    title: "Estacionamiento",
    description:
      "13 estacionamientos vehiculares y 7 espacios para bicicletas en niveles subterráneos.",
  },
  {
    icon: "/landing/caracteristicas/bed.png",
    title: "Departamentos de 2 y 3 Dormitorios",
    description:
      "Espacios amplios y funcionales adaptados para familias de diferentes tamaños.",
  },
] as const;

/* Dispara cuando la sección está a ~150px de entrar al viewport */
const ROOT_MARGIN = "0px 0px -150px 0px";
const THRESHOLD = 0;

export function Caracteristicas() {
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
      id="caracteristicas"
      aria-label="Características"
      className={cn("caracteristicas bg-brand-cream", inView && "in-view")}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32">
        <h2 className="text-center font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Características y amenidades
        </h2>
        <div className="caracteristicas-grid mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {ITEMS.map((item) => (
            <Card
              key={item.title}
              className={cn(
                "caracteristicas-card caracteristicas-card-link relative overflow-hidden border-0 bg-card shadow-sm",
                "rounded-xl py-6"
              )}
            >
              <div
                className="caracteristicas-card-line absolute left-0 right-0 top-0 h-1 bg-brand-orange"
                aria-hidden
              />
              <CardHeader className="pb-2">
                <div className="relative h-12 w-12">
                  <Image
                    src={item.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="object-contain object-left"
                  />
                </div>
                <CardTitle className="text-lg text-foreground md:text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-base text-muted-foreground">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
