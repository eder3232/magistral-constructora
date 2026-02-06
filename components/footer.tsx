import Image from "next/image";
import Link from "next/link";
import { SITE_CONTACT } from "@/lib/site-config";

const ENLACES_PROYECTO = [
  { href: "#el-proyecto", label: "El Edificio" },
  { href: "#caracteristicas", label: "Características" },
  { href: "#avance-de-obra", label: "Avance de Obra" },
  { href: "#ubicacion", label: "Ubicación" },
] as const;

export function Footer() {
  return (
    <footer
      className="bg-brand-navy-dark px-4 py-12 md:px-8 md:py-16 lg:px-16"
      aria-label="Pie de página"
    >
      <div className="mx-auto max-w-6xl">
        {/* Logo */}
        <Link
          href="#inicio"
          className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-dark"
          aria-label="Magistral Constructora - Inicio"
        >
          <Image
            src="/brand/logo_magistral.svg"
            alt="Magistral Constructora"
            width={160}
            height={48}
            className="h-10 w-auto"
          />
        </Link>

        {/* Tres columnas */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-12">
          {/* Columna 1 — Magistral */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-white/90">
              Magistral
            </h3>
            <p className="mt-3 text-sm text-brand-white/80">
              Una constructora comprometida con crear hogares de calidad donde
              las familias puedan crecer juntas.
            </p>
          </div>

          {/* Columna 2 — El Proyecto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-white/90">
              El Proyecto
            </h3>
            <ul className="mt-3 space-y-2">
              {ENLACES_PROYECTO.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-white/80 transition-colors hover:text-brand-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-white/90">
              Contacto
            </h3>
            <address className="mt-3 not-italic text-sm text-brand-white/80">
              <p>{SITE_CONTACT.direccion}</p>
              <p className="mt-2">
                <a
                  href={SITE_CONTACT.telefonoHref}
                  className="transition-colors hover:text-brand-white"
                >
                  {SITE_CONTACT.telefonoDisplay}
                </a>
              </p>
              <p className="mt-2">
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="transition-colors hover:text-brand-white"
                >
                  {SITE_CONTACT.email}
                </a>
              </p>
              <p className="mt-2">
                <Link
                  href="/libro-reclamaciones"
                  className="transition-colors hover:text-brand-white"
                >
                  Libro de reclamaciones
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Línea inferior — copyright */}
        <div className="mt-12 border-t border-brand-white/10 pt-8">
          <p className="text-center text-xs text-brand-white/60 md:text-sm">
            © 2026 Magistral Constructora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
