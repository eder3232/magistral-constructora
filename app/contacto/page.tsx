import Link from "next/link";
import {
    MapPin,
    Clock,
    Phone,
    Mail,
    MessageCircle,
    Globe,
    Instagram,
    Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONTACT } from "@/lib/site-config";

export const metadata = {
    title: "Contacto | Magistral Constructora",
    description:
        "Contáctanos para información sobre el Edificio Multifamiliar Magistral. Oficina en Yanahuara, Arequipa. Horario Lun-Vie 9:00–17:00. WhatsApp, teléfono y email.",
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

const CONTACTO = {
    oficina: {
        nombre: "Magistral Constructora",
        direccion: "Calle Chullo 225, Yanahuara",
        ciudad: "Arequipa, Perú — 04013",
        mapUrl: "https://share.google/oXKsHYzKM9IyLPvdV",
    },
    horario: {
        area: "Atención al Cliente",
        semana: "Lunes a Viernes: 9:00 a.m. – 5:00 p.m.",
        finDeSemana: "Sábados y Domingos: Atención previa coordinación",
    },
    web: "https://magistralconstructora.com",
    telefono: "913 367 960",
    whatsapp: "+51 913 367 960",
    whatsappHref: "https://wa.me/51913367960",
    email: SITE_CONTACT.email,
    instagram: "https://instagram.com/magistralconstructora",
    instagramHandle: "@magistralconstructora",
    facebook: "https://facebook.com/MagistralConstructora",
    facebookNombre: "Magistral Constructora",
} as const;

export default function ContactoPage() {
    return (
        <>
                {/* Hero */}
                <section
                    className="relative flex min-h-[45vh] items-center justify-center bg-brand-navy-dark"
                    aria-label="Contacto"
                >
                    <div className="mx-auto max-w-4xl px-4 text-center">
                        <div className="mx-auto h-1 w-12 rounded-full bg-brand-orange" />
                        <h1 className="mt-4 font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl">
                            Contacto
                        </h1>
                        <p className="mt-2 text-base text-brand-white/90 md:text-lg">
                            Conversemos
                        </p>
                        <p className="mt-4 text-base text-brand-white/90 lg:text-lg">
                            En <strong>Magistral Constructora</strong> estamos listos para
                            ayudarte a dar el siguiente paso hacia tu nuevo hogar o inversión
                            inmobiliaria.
                        </p>
                        <p className="mt-2 text-base text-brand-white/90 lg:text-lg">
                            Si deseas más información sobre el{" "}
                            <strong>Edificio Multifamiliar Magistral</strong>, agendar una
                            visita o resolver cualquier consulta, contáctanos por nuestros
                            canales oficiales.
                        </p>
                    </div>
                </section>

                {/* Oficina Principal — fondo claro */}
                <section className="bg-brand-cream" aria-label="Oficina principal">
                    <div className={SECTION_CLASS}>
                        <div className={LINE_ORANGE} />
                        <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>
                            Oficina Principal
                        </h2>
                        <p className="mt-6 font-medium text-foreground">
                            {CONTACTO.oficina.nombre}
                        </p>
                        <p className={PARAGRAPH_LIGHT}>
                            {CONTACTO.oficina.direccion}
                            <br />
                            {CONTACTO.oficina.ciudad}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="mt-6 min-h-[44px] bg-brand-orange px-6 text-brand-white hover:bg-brand-orange/90"
                        >
                            <a
                                href={CONTACTO.oficina.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MapPin className="mr-2 size-4" aria-hidden />
                                Ver en Google Maps
                            </a>
                        </Button>
                    </div>
                </section>

                {/* Horario de atención — fondo oscuro */}
                <section
                    className="bg-brand-navy"
                    aria-label="Horario de atención"
                >
                    <div className={SECTION_CLASS}>
                        <div className={LINE_ORANGE} />
                        <h2 className={`mt-4 ${TITLE_CLASS_DARK}`}>
                            Horario de Atención
                        </h2>
                        <p className="mt-2 text-brand-white/80">
                            Área responsable: {CONTACTO.horario.area}
                        </p>
                        <ul className="mt-6 space-y-2 text-brand-white/90 lg:text-lg">
                            <li className="flex items-center gap-3">
                                <Clock className="size-5 shrink-0 text-brand-orange" aria-hidden />
                                <span>{CONTACTO.horario.semana}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="size-5 shrink-0 text-brand-orange" aria-hidden />
                                <span className="italic">{CONTACTO.horario.finDeSemana}</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Información de contacto — fondo claro, cards */}
                <section
                    className="bg-brand-cream"
                    aria-label="Información de contacto"
                >
                    <div className={SECTION_CLASS}>
                        <div className={LINE_ORANGE} />
                        <h2 className={`mt-4 ${TITLE_CLASS_LIGHT}`}>
                            Canales de contacto
                        </h2>
                        <p className="mt-4 text-muted-foreground lg:text-lg">
                            Escríbenos o llámanos por cualquiera de estos medios.
                        </p>
                        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card className="border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                                <CardContent className="pt-6">
                                    <Phone className="size-8 text-brand-orange" aria-hidden />
                                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                                        Teléfono
                                    </h3>
                                    <a
                                        href={SITE_CONTACT.telefonoHref}
                                        className="mt-1 block text-muted-foreground hover:text-brand-orange focus:underline"
                                    >
                                        {CONTACTO.telefono}
                                    </a>
                                </CardContent>
                            </Card>
                            <Card className="border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                                <CardContent className="pt-6">
                                    <MessageCircle className="size-8 text-brand-orange" aria-hidden />
                                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                                        WhatsApp
                                    </h3>
                                    <a
                                        href={CONTACTO.whatsappHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-muted-foreground hover:text-brand-orange focus:underline"
                                    >
                                        {CONTACTO.whatsapp}
                                    </a>
                                </CardContent>
                            </Card>
                            <Card className="border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                                <CardContent className="pt-6">
                                    <Mail className="size-8 text-brand-orange" aria-hidden />
                                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                                        Correo
                                    </h3>
                                    <a
                                        href={`mailto:${CONTACTO.email}`}
                                        className="mt-1 block break-all text-muted-foreground hover:text-brand-orange focus:underline"
                                    >
                                        {CONTACTO.email}
                                    </a>
                                </CardContent>
                            </Card>
                            <Card className="border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                                <CardContent className="pt-6">
                                    <Globe className="size-8 text-brand-orange" aria-hidden />
                                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                                        Sitio web
                                    </h3>
                                    <a
                                        href={CONTACTO.web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-muted-foreground hover:text-brand-orange focus:underline"
                                    >
                                        magistralconstructora.com
                                    </a>
                                </CardContent>
                            </Card>
                            <Card className="border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                                <CardContent className="pt-6">
                                    <Instagram className="size-8 text-brand-orange" aria-hidden />
                                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                                        Instagram
                                    </h3>
                                    <a
                                        href={CONTACTO.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-muted-foreground hover:text-brand-orange focus:underline"
                                    >
                                        {CONTACTO.instagramHandle}
                                    </a>
                                </CardContent>
                            </Card>
                            <Card className="border-border bg-background shadow-sm transition-shadow hover:shadow-md">
                                <CardContent className="pt-6">
                                    <Facebook className="size-8 text-brand-orange" aria-hidden />
                                    <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                                        Facebook
                                    </h3>
                                    <a
                                        href={CONTACTO.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-muted-foreground hover:text-brand-orange focus:underline"
                                    >
                                        {CONTACTO.facebookNombre}
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA final — fondo oscuro */}
                <section
                    className="bg-gradient-to-b from-brand-navy to-brand-navy-dark"
                    aria-label="Llamado a la acción"
                >
                    <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24 lg:py-32">
                        <h2 className={TITLE_CLASS_DARK}>
                            ¿Listo para dar el siguiente paso?
                        </h2>
                        <p className="mt-4 text-base text-brand-white/90 md:text-lg">
                            Agenda una visita al Edificio Multifamiliar Magistral o solicita
                            más información. Nuestro equipo está listo para atenderte.
                        </p>
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                            <Button
                                asChild
                                size="lg"
                                className="min-h-[44px] w-full bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90 sm:w-auto"
                            >
                                <Link href="/#contacto">Agendar visita</Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="min-h-[44px] w-full border-2 border-brand-white bg-transparent text-brand-white hover:bg-brand-white/70 sm:w-auto"
                            >
                                <a href={CONTACTO.whatsappHref} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 size-4" aria-hidden />
                                    Escribir por WhatsApp
                                </a>
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
                    </div>
                </section>
        </>
    );
}
