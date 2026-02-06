import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { Hero } from "@/components/hero";
import { SobreElEdificio } from "@/components/sobre-el-edificio";
import { Caracteristicas } from "@/components/caracteristicas";
import { Estadisticas } from "@/components/estadisticas";
import { AvanceDeObra } from "@/components/avance-de-obra";
import { DistribucionDepartamentos } from "@/components/distribucion-departamentos";
import { Sostenibilidad } from "@/components/sostenibilidad";
import { CtaContacto } from "@/components/cta-contacto";
import { UbicacionSection } from "@/components/ubicacion/UbicacionSection";
import { CaracteristicasV2 } from "@/components/caracteristicas-v2";
import { ParrallaxImageMarquee } from "@/components/parrallax-image-marquee";

export default function Home() {
  return (
    <>
      <LenisSmoothScroll />
      {/* 1. Hero */}
      <Hero />

      {/* 2. Sobre el Edificio */}
      <SobreElEdificio />

      {/* 3. Características & Amenities */}
      {/* <Caracteristicas /> */}
      <CaracteristicasV2 />

      {/* 4. Estadísticas del Edificio */}
      <Estadisticas />

      {/* 5. Avance de Obra */}
      <AvanceDeObra />

      {/* 8. Ubicación */}
      <UbicacionSection />

      {/* 6. Distribución de Departamentos */}
      <DistribucionDepartamentos />

      {/* 7. Sostenibilidad */}
      <Sostenibilidad />

      <ParrallaxImageMarquee />



      {/* 9. CTA de Contacto */}
      <CtaContacto />
    </>
  );
}
