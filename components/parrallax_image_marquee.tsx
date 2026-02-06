"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const MARQUEE_BASE = "/landing/parralax_image_marquee";

const ROW1_IMAGES = [
    "marquee-row1-01.png",
    "marquee-row1-02.png",
    "marquee-row1-03.png",
    "marquee-row1-04.png",
    "marquee-row1-05.png",
    "marquee-row1-06.png",
    "marquee-row1-07.png",
] as const;

const ROW2_IMAGES = [
    "marquee-row2-01.png",
    "marquee-row2-02.png",
    "marquee-row2-03.png",
    "marquee-row2-04.png",
    "marquee-row2-05.png",
    "marquee-row2-06.png",
    "marquee-row2-07.png",
] as const;

const IMAGE_WIDTH = 280;
const IMAGE_HEIGHT = 210; // 4:3

function MarqueeImageCard({ src, alt }: { src: string; alt: string }) {
    return (
        <figure className="relative h-full w-[280px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-brand-navy/5 shadow-lg transition-shadow hover:shadow-xl">
            <Image
                src={src}
                alt={alt}
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
                sizes="280px"
                className="aspect-[4/3] object-cover"
                loading="lazy"
            />
        </figure>
    );
}

export function ParrallaxImageMarquee() {
    return (
        <section
            aria-label="Galería de estilos de vida"
            className="relative w-full overflow-hidden py-8 md:py-12"
        >
            <div
                className="relative flex flex-col gap-4"
            >
                {/* Fila 1: desplazamiento hacia la izquierda */}
                <Marquee
                    pauseOnHover
                    className="[--duration:60s] [--gap:6rem] [--marquee-content-width:calc(7*280px+6*var(--gap))]"
                    repeat={2}
                >
                    {ROW1_IMAGES.map((filename, i) => (
                        <MarqueeImageCard
                            key={filename}
                            src={`${MARQUEE_BASE}/${filename}`}
                            alt={`Estilo de vida ${i + 1}`}
                        />
                    ))}
                </Marquee>

                {/* Fila 2: desplazamiento hacia la derecha (reverse) */}
                <Marquee
                    reverse={true}
                    pauseOnHover
                    className="[--duration:90s] [--gap:6rem] [--marquee-content-width:calc(7*280px+6*var(--gap))]"
                    repeat={2}
                >
                    {ROW2_IMAGES.map((filename, i) => (
                        <MarqueeImageCard
                            key={filename}
                            src={`${MARQUEE_BASE}/${filename}`}
                            alt={`Estilo de vida ${i + 8}`}
                        />
                    ))}
                </Marquee>
            </div>

            {/* Gradientes laterales para suavizar los bordes */}
            <div
                className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent md:w-32"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent md:w-32"
                aria-hidden
            />
        </section>
    );
}
