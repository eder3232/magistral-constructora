import Image from "next/image";
import Link from "next/link";
import {
  Gem,
  Handshake,
  Users,
  Ruler,
  Building2,
  Home,
  LayoutGrid,
  UserCheck,
  Check,
  MapPin,
  Phone,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONTACT } from "@/lib/site-config";

export const metadata = {
  title: "Nosotros | Magistral Constructora",
  description:
    "Conoce a Magistral Constructora: empresa arequipeña de proyectos inmobiliarios modernos. Calidad, transparencia y compromiso con tu hogar.",
};

const SECTION_CLASS =
  "mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32";
const TITLE_CLASS_LIGHT =
  "font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl";
const TITLE_CLASS_DARK =
  "font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl";
const LINE_ORANGE = "h-1 w-10 rounded-full bg-brand-orange";
const PARAGRAPH_LIGHT =
  "text-base text-muted-foreground lg:text-lg [&+&]:mt-4";
const PARAGRAPH_DARK = "text-base text-brand-white/90 lg:text-lg [&+&]:mt-4";

const VALORES = [
  {
    icon: Gem,
    title: "Calidad sin concesiones",
    text: "Cada detalle importa. Construimos con estándares superiores desde la estructura hasta los acabados.",
  },
  {
    icon: Handshake,
    title: "Transparencia y confianza",
    text: "Creemos en relaciones claras, procesos honestos y comunicación directa con nuestros clientes.",
  },
  {
    icon: Users,
    title: "Compromiso con el cliente",
    text: "Acompañamos cada etapa: desde la primera visita hasta la entrega final.",
  },
  {
    icon: Ruler,
    title: "Responsabilidad técnica",
    text: "Aplicamos criterios de ingeniería moderna y normativas vigentes para garantizar seguridad.",
  },
  {
    icon: Building2,
    title: "Innovación en diseño urbano",
    text: "Creamos proyectos que se integran a la ciudad y mejoran la experiencia de vivir en ella.",
  },
] as const;

const QUE_HACEMOS = [
  {
    icon: Building2,
    title: "Construcción de Edificios Multifamiliares",
    text: "Desarrollamos proyectos residenciales modernos, seguros y pensados para el estilo de vida actual.",
  },
  {
    icon: Home,
    title: "Venta de Departamentos",
    text: "Comercializamos unidades diseñadas para brindar confort, funcionalidad y valorización.",
  },
  {
    icon: LayoutGrid,
    title: "Desarrollo de Proyectos Inmobiliarios",
    text: "Planificamos desde cero: ubicación estratégica, arquitectura contemporánea y ejecución eficiente.",
  },
  {
    icon: UserCheck,
    title: "Atención Personalizada",
    text: "Nuestro equipo acompaña al cliente durante todo el proceso de compra e inversión.",
  },
] as const;

const DIFERENCIALES = [
  "Enfoque en proyectos multifamiliares modernos",
  "Diseño arquitectónico contemporáneo",
  "Construcción bajo normativa técnica y estándares antisísmicos",
  "Acabados seleccionados para alta durabilidad y estética",
  "Compromiso real con los tiempos de entrega",
  "Atención cercana y trato transparente",
] as const;

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-[50vh] items-center justify-center overflow-hidden"
          aria-label="Presentación Nosotros"
        >
          <Image
            src="/nosotros/hero.jpg"
            alt="Magistral Constructora — construcción y equipo"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-brand-navy-dark/85 via-brand-navy-dark/70 to-brand-navy-dark"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
            <div className="mx-auto h-1 w-12 rounded-full bg-brand-orange" />
            <h1 className="mt-4 font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl">
              Nosotros
            </h1>
            <p className="mt-2 text-base text-brand-white/90 md:text-lg">
              Construimos espacios que elevan tu estilo de vida.
            </p>
          </div>
        </section>

        {/* Intro Magistral — fondo claro */}
        <section className="bg-brand-cream" aria-label="Quiénes somos">
          <div className={SECTION_CLASS}>
            <div className={LINE_ORANGE} />
            <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>
              Magistral Constructora
            </h2>
            <p className={`mt-6 ${PARAGRAPH_LIGHT}`}>
              En <strong>Magistral Constructora</strong>, somos una empresa
              arequipeña dedicada al desarrollo de proyectos inmobiliarios
              modernos, seguros y funcionales. Nuestro propósito es claro:
              crear hogares y edificios multifamiliares con estándares de
              calidad superiores, pensados para brindar bienestar, confianza y
              valorización a largo plazo.
            </p>
            <p className={PARAGRAPH_LIGHT}>
              Desde Arequipa, trabajamos con una visión contemporánea de la
              construcción: diseño inteligente, ingeniería responsable y
              compromiso total con nuestros clientes.
            </p>
          </div>
        </section>

        {/* Nuestra Historia — fondo oscuro */}
        <section
          className="bg-brand-navy-dark"
          aria-label="Nuestra historia"
        >
          <div className={SECTION_CLASS}>
            <div className={LINE_ORANGE} />
            <h2 className={`mt-4 ${TITLE_CLASS_DARK}`}>Nuestra Historia</h2>
            <p className={`mt-6 ${PARAGRAPH_DARK}`}>
              Magistral Constructora nace con el objetivo de transformar la
              forma en que se vive la ciudad. Creemos que un edificio no es
              solo concreto y planos: es un espacio donde se construyen
              familias, sueños y futuro.
            </p>
            <p className={PARAGRAPH_DARK}>
              Nuestro primer gran proyecto, el{" "}
              <strong className="text-brand-white">Edificio Multifamiliar
              Magistral</strong>, representa el inicio de una nueva etapa en el
              desarrollo urbano de Arequipa: arquitectura moderna, acabados de
              alta calidad y una ejecución estructural rigurosa.
            </p>
            <p className={PARAGRAPH_DARK}>
              Hoy, avanzamos con una meta firme: consolidarnos como una
              constructora referente en el sur del Perú.
            </p>
          </div>
        </section>

        {/* Misión y Visión — fondo claro */}
        <section
          className="bg-brand-cream"
          aria-label="Misión y visión"
        >
          <div className={SECTION_CLASS}>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className={LINE_ORANGE} />
                <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>Misión</h2>
                <p className={`mt-6 ${PARAGRAPH_LIGHT}`}>
                  Desarrollar proyectos inmobiliarios en Arequipa que combinen{" "}
                  <strong>calidad estructural, diseño moderno y confianza</strong>
                  , ofreciendo a nuestros clientes hogares seguros, funcionales
                  y con alta valorización.
                </p>
              </div>
              <div>
                <div className={LINE_ORANGE} />
                <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>Visión</h2>
                <p className={`mt-6 ${PARAGRAPH_LIGHT}`}>
                  Ser una de las constructoras e inmobiliarias más reconocidas
                  del sur del país, destacando por nuestra{" "}
                  <strong>
                    excelencia constructiva, innovación en proyectos
                    multifamiliares y compromiso con cada familia que confía en
                    nosotros.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores — fondo oscuro */}
        <section
          className="bg-brand-navy"
          aria-label="Nuestros valores"
        >
          <div className={SECTION_CLASS}>
            <div className="mx-auto max-w-3xl text-center">
              <div className={`${LINE_ORANGE} mx-auto`} />
              <h2 className={`mt-4 ${TITLE_CLASS_DARK}`}>Nuestros Valores</h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              {VALORES.map(({ icon: Icon, title, text }) => (
                <Card
                  key={title}
                  className="border-brand-navy-dark bg-brand-navy-dark/50 text-brand-white shadow-none"
                >
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold text-brand-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-white/90 lg:text-base">
                      {text}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Qué Hacemos — fondo claro */}
        <section
          className="bg-brand-cream"
          aria-label="Qué hacemos"
        >
          <div className={SECTION_CLASS}>
            <div className={LINE_ORANGE} />
            <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>Qué Hacemos</h2>
            <p className={`mt-4 ${PARAGRAPH_LIGHT}`}>
              En Magistral Constructora ofrecemos soluciones integrales en el
              sector inmobiliario:
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {QUE_HACEMOS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className={`mt-2 flex-grow ${PARAGRAPH_LIGHT}`}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestro Diferencial — fondo oscuro */}
        <section
          className="bg-brand-navy-dark"
          aria-label="Nuestro diferencial"
        >
          <div className={SECTION_CLASS}>
            <div className={LINE_ORANGE} />
            <h2 className={`mt-4 ${TITLE_CLASS_DARK}`}>Nuestro Diferencial</h2>
            <p className={`mt-4 ${PARAGRAPH_DARK}`}>
              En un mercado competitivo, Magistral Constructora destaca por:
            </p>
            <ul className="mt-8 space-y-4">
              {DIFERENCIALES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-brand-white/90"
                >
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-brand-orange"
                    aria-hidden
                  />
                  <span className="text-base lg:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Proyecto Destacado — fondo claro + imagen */}
        <section
          className="bg-brand-cream"
          aria-label="Proyecto destacado"
        >
          <div className={SECTION_CLASS}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/landing/sobre_el_edificio.png"
                  alt="Edificio Multifamiliar Magistral"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className={LINE_ORANGE} />
                <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>
                  Edificio Multifamiliar Magistral
                </h2>
                <p className={`mt-6 ${PARAGRAPH_LIGHT}`}>
                  Nuestro primer proyecto representa la esencia de nuestra
                  marca:
                </p>
                <ul className="mt-4 space-y-2 text-base text-muted-foreground lg:text-lg">
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Ubicación estratégica en Arequipa
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Arquitectura moderna y funcional
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Espacios pensados para familias y profesionales
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Áreas comunes diseñadas para comodidad y estilo
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Construcción segura con visión de futuro
                  </li>
                </ul>
                <p className={`mt-6 ${PARAGRAPH_LIGHT}`}>
                  <strong>Edificio Multifamiliar Magistral</strong> es el
                  comienzo de una nueva propuesta inmobiliaria en la ciudad.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 min-h-[44px] bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90"
                >
                  <Link href="/#el-proyecto">Conocer el proyecto</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo — fondo oscuro + imagen */}
        <section
          className="bg-brand-navy"
          aria-label="Nuestro equipo"
        >
          <div className={SECTION_CLASS}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/nosotros/equipo.jpg"
                  alt="Equipo de Magistral Constructora"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <div className={LINE_ORANGE} />
                <h2 className={`mt-4 ${TITLE_CLASS_DARK}`}>Nuestro Equipo</h2>
                <p className={`mt-6 ${PARAGRAPH_DARK}`}>
                  Magistral Constructora está conformada por un equipo
                  multidisciplinario de profesionales comprometidos con la
                  excelencia:
                </p>
                <ul className="mt-6 space-y-3 text-brand-white/90">
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Ingenieros civiles especializados en estructuras
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Arquitectos enfocados en diseño residencial moderno
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Supervisión técnica permanente en obra
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-5 shrink-0 text-brand-orange" />
                    Asesoría inmobiliaria profesional para cada cliente
                  </li>
                </ul>
                <p className={`mt-6 ${PARAGRAPH_DARK}`}>
                  Cada proyecto es ejecutado con planificación, experiencia y
                  responsabilidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compromiso con Arequipa — fondo claro + imagen */}
        <section
          className="bg-brand-cream"
          aria-label="Compromiso con Arequipa"
        >
          <div className={SECTION_CLASS}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:order-2">
                <Image
                  src="/nosotros/misti.jpg"
                  alt="Arequipa — ciudad donde construimos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="lg:order-1">
                <div className={LINE_ORANGE} />
                <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>
                  Compromiso con Arequipa
                </h2>
                <p className={`mt-6 ${PARAGRAPH_LIGHT}`}>
                  Creemos en el crecimiento urbano sostenible. Por eso,
                  desarrollamos proyectos que aportan valor a la ciudad, elevan
                  el estándar de vivienda y generan oportunidades para nuevas
                  familias e inversionistas.
                </p>
                <p className={PARAGRAPH_LIGHT}>
                  Construimos pensando en el presente, pero también en el futuro
                  de Arequipa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Conversemos — fondo oscuro */}
        <section
          className="bg-gradient-to-b from-brand-navy to-brand-navy-dark"
          aria-label="Contacto"
        >
          <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24 lg:py-32">
            <h2 className="font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl">
              Conversemos
            </h2>
            <p className="mt-4 text-base text-brand-white/90 md:text-lg">
              ¿Buscas invertir en un departamento o conocer nuestro proyecto
              actual?
            </p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-brand-white/90">
              <MapPin className="size-4 shrink-0" aria-hidden />
              <span>Magistral Constructora — Arequipa</span>
            </p>
            <p className="mt-1 text-brand-white/90">
              Agenda una visita o contáctanos para más información.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button
                asChild
                size="lg"
                className="min-h-[44px] w-full bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90 sm:w-auto"
              >
                <Link href="/#contacto">Agendar Visita</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-[44px] w-full border-2 border-brand-white bg-transparent text-brand-white hover:bg-brand-white/70 sm:w-auto"
              >
                <a href={SITE_CONTACT.telefonoHref}>
                  <Phone className="mr-2 size-4" aria-hidden />
                  {SITE_CONTACT.telefonoDisplay}
                </a>
              </Button>
            </div>
            <Button
              asChild
              variant="link"
              className="mt-6 text-brand-orange hover:text-brand-orange/90"
            >
              <Link href="/#el-proyecto">
                Descubre el Edificio Multifamiliar Magistral →
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
