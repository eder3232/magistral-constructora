import { LenisSmoothScroll } from "@/components/lenis-smooth-scroll";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { SobreElEdificio } from "@/components/sobre-el-edificio";
import { Caracteristicas } from "@/components/caracteristicas";
import { Estadisticas } from "@/components/estadisticas";
import { AvanceDeObra } from "@/components/avance-de-obra";
import { DistribucionDepartamentos } from "@/components/distribucion-departamentos";
import { Sostenibilidad } from "@/components/sostenibilidad";
import { Ubicacion } from "@/components/ubicacion";
import { CtaContacto } from "@/components/cta-contacto";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <LenisSmoothScroll />
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Sobre el Edificio */}
        <SobreElEdificio />

        {/* 3. Características & Amenities */}
        <Caracteristicas />

        {/* 4. Estadísticas del Edificio */}
        <Estadisticas />

        {/* 5. Avance de Obra */}
        <AvanceDeObra />

        {/* 6. Distribución de Departamentos */}
        <DistribucionDepartamentos />

        {/* 7. Sostenibilidad */}
        <Sostenibilidad />

        {/* 8. Ubicación */}
        <Ubicacion />

        {/* 9. CTA de Contacto */}
        <CtaContacto />
      </main>

      <Footer />
    </>
  );
}
