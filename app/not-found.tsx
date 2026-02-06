import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      {/* Hero 404 — fondo oscuro, título centrado */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-brand-navy-dark">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mx-auto h-1 w-12 rounded-full bg-brand-orange" />
          <h1 className="mt-4 font-display text-4xl font-bold text-brand-white md:text-5xl lg:text-7xl">
            404
          </h1>
          <p className="mt-3 font-display text-2xl font-bold text-brand-white md:text-3xl lg:text-4xl">
            Página no encontrada
          </p>
          <p className="mt-2 text-base text-brand-white/90 md:text-lg">
            El enlace que seguiste puede haber expirado o la página no existe.
          </p>
        </div>
      </section>

      {/* Sección contenido — fondo crema, CTA */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Volvamos a tu hogar
            </h2>
            <p className="mt-6 text-base text-muted-foreground lg:text-lg">
              Te invitamos a regresar al inicio y descubrir el Edificio Magistral:
              tu nuevo hogar en Cayma, Arequipa.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="min-h-[44px] min-w-[200px] bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90"
              >
                <Link href="/">Volver al inicio</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="min-h-[44px] min-w-[200px] border-2 border-brand-navy bg-transparent text-foreground hover:bg-brand-navy/10"
              >
                <Link href="/#contacto">Contacto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
