import type { CategoryId, TravelModeId } from "./puntos_de_interes";
import {
  ShoppingBag,
  Bus,
  GraduationCap,
  Heart,
  Trees,
  MapPin,
  Footprints,
  Building2,
  Car,
  Bus as BusIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Colores del proyecto (directrices §2.1) */
export const COLORS = {
  navy: "#e8e679",
  navyDark: "#0F2540",
  orange: "#E8722A",
  verde: "#266902",
  white: "#FFFFFF",
  cream: "#F5F0EB",
  graySoft: "#8A9BB0",
} as const;

/** Categorías con etiqueta, color e icono (paleta del proyecto) */
export const CATEGORIES: Record<
  CategoryId,
  { label: string; color: string; Icon: LucideIcon }
> = {
  comercial: {
    label: "Comercial",
    color: COLORS.orange,
    Icon: ShoppingBag,
  },
  // transporte: {
  //   label: "Transporte",
  //   color: COLORS.graySoft,
  //   Icon: Bus,
  // },
  servicios: {
    label: "Servicios",
    color: COLORS.verde,
    Icon: Building2,
  },
  educacion: {
    label: "Educación",
    color: COLORS.navy,
    Icon: GraduationCap,
  },
  salud: {
    label: "Salud",
    color: "#b85c5c",
    Icon: Heart,
  },
  // recreacion: {
  //   label: "Recreación",
  //   color: "#5a8a5a",
  //   Icon: Trees,
  // },
};

/** Opciones del selector de modo de transporte */
export const TRAVEL_MODE_OPTIONS: Record<
  TravelModeId,
  { label: string; Icon: LucideIcon }
> = {
  caminando: { label: "A pie", Icon: Footprints },
  carro_propio: { label: "En vehículo propio", Icon: Car },
  bus_colectivo: { label: "En colectivo", Icon: BusIcon },
};

/** Id para filtro "Todos" */
export const FILTER_ALL = "todos" as const;

/** Radios de los anillos del mapa en metros */
export const MAP_RING_RADII_METERS = [100, 250, 500, 1000];

/** Estilos del mapa (tema oscuro, paleta del proyecto) */
export const DARK_MAP_STYLES: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#1a2332" }] },
  { elementType: "geometry.fill", stylers: [{ color: COLORS.navyDark }] },
  { elementType: "geometry.stroke", stylers: [{ color: "#2a3f52" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: COLORS.graySoft }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: COLORS.navyDark }],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [{ color: COLORS.navy }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2a3f52" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#133147" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [{ color: COLORS.navyDark }],
  },
];
