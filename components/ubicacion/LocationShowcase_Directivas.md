# Ubicación — Directivas de Implementación

Documento de referencia para implementar el **componente de ubicación estratégica** del proyecto. El componente es **modular** (varios archivos en `components/ubicacion/`), no un monolito. En caso de conflicto (colores, tipografía), prevalecen las **directrices generales del proyecto** (`directrices_magistral.md`).

---

## 1. Requerimientos de Datos

Esta sección define toda la información real que debes recopilar **antes** de escribir una línea de código. Los datos se dividen en dos bloques: los datos del proyecto (el edificio) y los datos de los puntos de interés cercanos.

---

### 1.1 Datos del Proyecto (el edificio)

Los datos del proyecto se almacenan en un JSON (por ejemplo `ubicacion_proyecto.json`) con la siguiente estructura. Estos nombres de clave son la fuente de verdad para el componente:

| Campo | Tipo | Ejemplo | Descripción |
|---|---|---|---|
| `projectName` | `string` | `"Edificio Magistral"` | Nombre comercial del proyecto |
| `projectAddress` | `string` | `"Calle Los Arces N° 220 A, Cayma, Arequipa"` | Dirección completa para referencia y leyenda |
| `coordinates` | `{ lat: number, lng: number }` | `{ lat: -16.3868, lng: -71.5496 }` | Coordenadas GPS del edificio. Centro del mapa y origen para distancias |

**Ejemplo de JSON del proyecto (`ubicacion_proyecto.json`):**

```json
{
  "projectName": "Edificio Magistral",
  "projectAddress": "Calle Los Arces N° 220 A, Pueblo de Cayma, Cayma, Arequipa, Perú",
  "coordinates": {
    "lat": -16.38685194195108,
    "lng": -71.5496474671317
  }
}
```

**Cómo obtener las coordenadas del edificio:**  
Abre Google Maps, ubica la dirección exacta del edificio, haz clic en el punto y copia las coordenadas (formato: `lat, lng`). El primer número es la latitud (`lat`) y el segundo la longitud (`lng`).

---

### 1.2 Datos de los Puntos de Interés (POIs)

Cada lugar cercano al edificio requiere la siguiente estructura. Se recomienda entre **8 y 15 POIs** para que el mapa se vea completo. Cada POI puede tener hasta **tres tipos de distancia**: a pie (caminando), en vehículo propio o en colectivo; al menos uno debe estar definido.

**Modos de transporte (TravelMode):**

| Id | Etiqueta en UI | Uso |
|---|---|---|
| `caminando` | A pie | Distancia y tiempo caminando desde el edificio |
| `carro_propio` | En vehículo propio | Distancia en metros y tiempo en auto |
| `bus_colectivo` | En colectivo | Distancia y tiempo en bus/transporte público |

```typescript
type TravelModeId = "caminando" | "carro_propio" | "bus_colectivo";

interface TravelInfo {
  distanceMeters: number;   // Distancia desde el edificio en metros
  travelTimeMinutes: number;
}

/** Por cada modo de transporte, distancia y tiempo. Al menos uno debe estar presente. */
interface POITravel {
  caminando?: TravelInfo;
  carro_propio?: TravelInfo;
  bus_colectivo?: TravelInfo;
}

interface POI {
  id: number;                   // Identificador único (1, 2, 3...) — sin duplicados
  name: string;                 // Nombre del lugar
  category: CategoryId;         // Una de las categorías (ver sección 1.3)
  coordinates: { lat: number; lng: number };
  /** Distancias y tiempos por modo. La UI permite elegir el modo activo (a pie / vehículo / colectivo). */
  travel: POITravel;
  description?: string;         // Descripción corta (opcional, para tooltip o InfoWindow)
}
```

**Ejemplo de POI con los tres modos:**

```typescript
{
  id: 1,
  name: "Real Plaza",
  category: "comercial",
  coordinates: { lat: -16.38917, lng: -71.54947 },
  travel: {
    caminando:     { distanceMeters: 400, travelTimeMinutes: 6 },
    carro_propio:  { distanceMeters: 380, travelTimeMinutes: 2 },
    bus_colectivo: { distanceMeters: 500, travelTimeMinutes: 4 }
  },
  description: "Supermercado Real Plaza Arequipa"
}
```

**Ejemplo de POI con un solo modo (p. ej. solo a pie):**

```typescript
{
  id: 2,
  name: "Parque cercano",
  category: "recreacion",
  coordinates: { lat: -16.38735, lng: -71.54880 },
  travel: {
    caminando: { distanceMeters: 250, travelTimeMinutes: 4 }
  }
}
```

**Cómo obtener coordenadas y distancias:**  
Para cada POI, en Google Maps: (1) Buscar el lugar y copiar coordenadas. (2) Direcciones desde el edificio → destino, y anotar **distancia en metros** y **tiempo** para cada modo que aplique: "A pie", "En coche" y "Transporte público" (colectivo). Si un modo no aplica (p. ej. no hay ruta en bus), se omite esa clave en `travel`.

**Nota de migración:** Si los POIs están hoy con un solo modo (p. ej. `distanceMeters`, `travelTimeMinutes`, `travelMode`), hay que migrarlos al objeto `travel` con las claves `caminando`, `carro_propio`, `bus_colectivo` para soportar el selector de modo en la UI.

---

### 1.3 Definición de Categorías

Cada categoría tiene una etiqueta, un color y un icono (lucide-react). Los colores deben alinearse con la paleta del proyecto cuando haya conflicto; el acento general del sitio (p. ej. "Estratégica", marcador central, anillos) usa el **naranja** del proyecto (`#E8722A`), no dorado.

| `CategoryId` | Etiqueta | Color Hex (proyecto) | Icono (lucide-react) | Lugares típicos |
|---|---|---|---|---|
| `"comercial"` | Comercial | Acento naranja `#E8722A` o tono compatible | `ShoppingBag` | Supermercados, centros comerciales, bancos |
| `"transporte"` | Transporte | Gris suave / azul `#8A9BB0` o tono compatible | `Bus` | Paraderos, rutas de bus, taxi |
| `"educacion"` | Educación | Variante azul marino / gris del proyecto | `GraduationCap` | Colegios, universidades, institutos |
| `"salud"` | Salud | Tono compatible con paleta (evitar rojo puro) | `Heart` | Clínicas, hospitales, farmacias |
| `"recreacion"` | Recreación | Tono compatible (verde suave o secundario) | `Trees` o `Footprints` | Parques, campos deportivos, piscinas |

Si se agrega otra categoría, se define aquí su `CategoryId`, etiqueta, color e icono antes de implementar.

---

### 1.4 Datos de las Stats Cards

Las 4 tarjetas debajo del mapa muestran métricas resumen. Se ajustan según los datos reales del proyecto. La etiqueta **Ubicación** debe reflejar que la zona es estratégica cuando aplique.

| Tarjeta | Valor | Cómo calcular |
|---|---|---|
| **Caminable** | Score 1-10 | Cuántos POIs están a menos de 500 m a pie. Ej.: 8+ POIs → 9 o 10 |
| **Transporte** | Tipo + distancia | POI de categoría transporte más cercano (por modo activo si aplica) |
| **Comercial** | Cantidad | Número de POIs de categoría `"comercial"` |
| **Ubicación** | Etiqueta cualitativa | Según la zona: **"Ubicación estratégica"**, "Premium", "Exclusiva", etc. |

---

## 2. Requerimientos Técnicos

---

### 2.1 Google Cloud Platform — Configuración de API Key

Esto es lo que necesitas hacer en Google Cloud antes de tocar código:

**Paso 1: Crear un proyecto en Google Cloud**
Abre [console.cloud.google.com](https://console.cloud.google.com), inicia sesión con tu cuenta de Google, y crea un proyecto nuevo. Ponle un nombre descriptivo como `inmobiliaria-proyecto-alma`.

**Paso 2: Habilitar la API de Maps JavaScript**
Dentro de tu proyecto, ve a `APIs y servicios → Biblioteca`, busca `Maps JavaScript API` y hazla click en `Habilitar`. Esta es la API principal y es obligatoria.

**Paso 3: Crear la API Key**
Ve a `APIs y servicios → Credenciales → Crear credencial → Clave de API`. Google te generará una clave que se ve así: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXX`.

**Paso 4: Restringir la API Key (importante para producción)**
En la misma pantalla de la clave, haz clic en `Restringir clave`. En la sección de restricción por aplicación, selecciona `Sitios web` y agrega los dominios donde va a funcionar:
- `localhost` (para desarrollo local)
- `tu-dominio-real.com` (para producción)

**Paso 5: Facturación**
Google requiere que habilites facturación en tu proyecto, pero la API de Maps tiene un crédito gratuito de `$200 USD/mes`. Para un sitio web estático de inmobiliaria este límite es más que suficiente y probablemente nunca pagues nada.

---

### 2.2 APIs de Google que se necesitan

| API | ¿Obligatoria? | Uso |
|---|---|---|
| `Maps JavaScript API` | Sí | Renderizar el mapa interactivo |
| `Geocoding API` | No | Si quieres buscar direcciones por texto en lugar de coordenadas |
| `Places API` | No | Si quieres agregar un buscador de lugares en el mapa |
| `Distance Matrix API` | No | Si quieres calcular distancias automáticamente desde el backend |

Para este componente solo necesitas la primera. Las demás son opcionales y dependen de si quieres agregar funcionalidades más avanzadas después.

---

### 2.3 Paquetes npm

```bash
pnpm add @react-google-maps/api
```

En este proyecto las dependencias se gestionan con **pnpm**. Si ya usas `lucide-react`, no hace falta agregar más paquetes para iconos.

**Versiones sugeridas:**

| Paquete | Versión mínima |
|---|---|
| `@react-google-maps/api` | `^2.18.0` |
| `next` | `^13.0.0` (compatible con App Router y Pages Router) |
| `lucide-react` | `^0.260.0` |

---

### 2.4 Variables de Entorno

Nunca hardcodes la API key directamente en el código. En Next.js las variables de entorno que empiezan con `NEXT_PUBLIC_` son accesibles desde el lado del cliente, que es lo que necesitamos aquí.

Crea o edita el archivo `.env.local` en la raíz de tu proyecto:

```env
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXX
```

Y la consumes así en el código:

```typescript
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!;
```

**Importante:** El archivo `.env.local` debe estar en el `.gitignore` para que la key no suba al repositorio.

---

### 2.5 Consideración clave de Next.js: No hay SSR en mapas

Google Maps usa `window` y `document` internamente, que no existen durante el server-side rendering de Next.js. Si importas el componente directamente vas a obtener el error `window is not defined` en el build.

La solución es importar el componente del mapa con `next/dynamic` y deshabilitar SSR:

```typescript
import dynamic from "next/dynamic";

const UbicacionSection = dynamic(
  () => import("@/components/ubicacion/ubicacion").then((m) => m.UbicacionSection),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[500px] bg-[#0F2540] rounded-2xl animate-pulse" />
    ),
  }
);
```

El parámetro `loading` define qué se muestra mientras el mapa se carga. Usar un placeholder con el color de fondo del proyecto (`#0F2540`) para una transición coherente.

---

### 2.6 Estilos del Mapa (Dark Theme)

Google Maps por defecto usa colores claros. Para alinearlo con el proyecto (fondos oscuros), se pasa un array de `styles` al `GoogleMap`. Usar tonos coherentes con la paleta: **Azul oscuro** `#0F2540`, **Azul marino** `#1B3A5C`, grises derivados.

```typescript
const darkMapStyles: google.maps.MapTypeStyle[] = [
  { elementType: "geometry",        stylers: [{ color: "#1a2332" }] },
  { elementType: "geometry.fill",  stylers: [{ color: "#0F2540" }] },
  { elementType: "geometry.stroke", stylers: [{ color: "#2a3f52" }] },
  { featureType: "poi",            stylers: [{ visibility: "off" }] },
  { featureType: "transit",        stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill",   stylers: [{ color: "#8A9BB0" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0F2540" }] },
  { featureType: "road", elementType: "geometry.fill",   stylers: [{ color: "#1B3A5C" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#2a3f52" }] },
  { featureType: "water", elementType: "geometry.fill",  stylers: [{ color: "#133147" }] },
  { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#0F2540" }] },
];
```

```tsx
<GoogleMap options={{ styles: darkMapStyles, disableDefaultUI: true }} ...>
```

---

## 3. Características del Componente

Esta sección describe exactamente cómo debe comportarse el componente una vez implementado, basándose en el mockup creado.

---

### 3.1 Layout y Estructura General

El componente se divide en tres zonas verticales:

**Zona superior — Header:** Un título con la palabra "Estratégica" (o similar) destacada con el **color acento del proyecto (naranja)**. Subtexto descriptivo y una etiqueta con la cantidad de POIs en el radio.

**Zona central — Mapa + Lista:** Un grid de dos columnas. La columna izquierda (más ancha, proporción 1.4fr) contiene el mapa interactivo. La columna derecha (1fr) contiene la lista scrolleable de POIs. Ambas se sincronizan.

**Zona inferior — Stats:** 4 tarjetas en un grid de 4 columnas que muestran métricas resumen de la ubicación.

En pantalla móvil (responsive), el grid del mapa y lista se apila verticalmente: primero el mapa, luego la lista, y las stats se convierten en un grid de 2x2.

---

### 3.2 Filtros de Categoría

Debajo del header hay una fila de botones que filtran los marcadores del mapa y los items de la lista simultáneamente. Los filtros son:

- **Todos** — muestra todos los POIs (estado por defecto)
- **Comercial**, **Transporte**, **Educación**, **Salud**, **Recreación** — según las categorías definidas en §1.3

Cuando un filtro está activo, su borde y fondo se iluminan con el color de esa categoría.

---

### 3.3 Marcadores en el Mapa

Cada POI se representa como un marcador circular en el mapa. Las características de cada marcador son:

- El color del círculo corresponde a la categoría del POI
- Dentro del círculo hay el icono de lucide-react de esa categoría
- Al hacer hover sobre un marcador, este se agranda ligeramente y emite un efecto de ripple (anillo que se expande y desaparece en loop)
- Al hacer hover, aparece un tooltip con: nombre del lugar, distancia en metros y tiempo según el **modo de transporte activo** (a pie / en vehículo propio / en colectivo). Si el POI no tiene datos para el modo activo, se muestra el modo más cercano disponible o "—".
- El edificio central tiene un marcador especial: círculo con color acento del proyecto (naranja), icono de edificio, glow animado y etiqueta "Su nuevo hogar" (o similar).

---

### 3.4 Sincronización Hover (Mapa ↔ Lista)

Esta es la interacción principal del componente y lo que lo hace diferente a un mapa estático:

- Cuando el usuario hace hover sobre un **marcador en el mapa**, el item correspondiente en la lista se resalta (cambia de color de fondo y se mueve ligeramente hacia la derecha)
- Cuando el usuario hace hover sobre un **item en la lista**, el marcador correspondiente en el mapa se activa (se agranda, emite ripple, muestra tooltip)
- Ambas direcciones comparten el mismo estado (`hoveredId`), lo que crea la sensación de que el mapa y la lista están conectados

---

### 3.5 Línea de Conexión

Cuando un POI está hovered (desde el mapa o la lista), aparece una línea punteada entre el marcador del edificio y el marcador del POI activo. La línea tiene el color de la categoría del POI y sirve para conectar visualmente la posición del edificio con el lugar de interés.

---

### 3.6 Anillos de Radio

En el centro del mapa (edificio) hay anillos concéntricos semi-transparentes en el **color acento del proyecto (naranja)**. Representan distancias (p. ej. 100 m, 250 m, 500 m, 1 km) para dar contexto visual.

Implementación: componente `Circle` de `@react-google-maps/api`, radio en metros desde las coordenadas del edificio.

---

### 3.7 Animaciones

El componente tiene las siguientes animaciones:

| Animación | Dónde se aplica | Tipo |
|---|---|---|
| `fadeUp` | Header, items de la lista, stats cards | Aparece hacia arriba al cargar la página. Cada elemento tiene un delay escalonado para crear un efecto cascada |
| `pulse` | Ripple del marcador hovered | Un anillo que se expande y se desaparece en un loop infinito |
| `glow` | Marcador central del edificio | Box-shadow que pulsa en el color acento (naranja) |
| Hover de marcador | Tamaño del marcador | Scale up suave de 32px a 37px |
| Hover de lista | Traslación del item | Se mueve 5px hacia la derecha |

---

### 3.8 Leyenda y selector de modo de transporte

- **Leyenda de categorías:** En la esquina inferior izquierda del mapa, una leyenda muestra los colores de categoría con sus etiquetas (Comercial, Transporte, Educación, Salud, Recreación). No cambia con los filtros.
- **Selector de modo:** Un control (pestañas o botones) permite elegir el modo de transporte activo: **A pie**, **En vehículo propio**, **En colectivo**. La lista de POIs y los tooltips del mapa muestran distancia y tiempo según el modo seleccionado. Si un POI no tiene datos para ese modo, se indica o se usa el modo disponible más cercano.

---

## 4. Estructura de Archivos (modular)

El componente **no** debe ser un monolito. Se divide en varios archivos dentro de `components/ubicacion/` para legibilidad y mantenibilidad.

```
components/
└── ubicacion/
    ├── ubicacion.tsx             # Punto de entrada: export y ensamble del componente raíz
    ├── UbicacionSection.tsx      # Componente raíz: layout (header, grid mapa+lista, stats)
    ├── MapSection.tsx             # Mapa: GoogleMap, marcadores, círculos de radio, leyenda
    ├── POIList.tsx                # Lista lateral de POIs (sincronizada con hover del mapa)
    ├── StatsCards.tsx             # Las 4 tarjetas de métricas (Caminable, Transporte, etc.)
    ├── CategoryFilters.tsx        # Botones de filtro por categoría
    ├── TravelModeSelector.tsx     # Selector de modo: A pie / Vehículo propio / Colectivo
    ├── constants.ts               # Colores (alineados a paleta del proyecto), iconos, categorías
    ├── tipos.ts                   # Tipos: POI, TravelMode, CategoryId, ProjectData, etc.
    ├── puntos_de_interes.ts       # Datos de POIs (o import desde aquí si están en otro módulo)
    ├── ubicacion_proyecto.json    # Datos del proyecto (projectName, projectAddress, coordinates)
    └── LocationShowcase_Directivas.md   # Este documento
```

En la página (por ejemplo `app/page.tsx`) se importa el componente con `next/dynamic` y `ssr: false`:

```typescript
import dynamic from "next/dynamic";

const UbicacionSection = dynamic(
  () => import("@/components/ubicacion/ubicacion").then((m) => m.UbicacionSection),
  { ssr: false, loading: () => <div className="w-full h-[500px] bg-[#0F2540] rounded-2xl animate-pulse" /> }
);
```

La variable de entorno `NEXT_PUBLIC_GOOGLE_MAPS_KEY` se define en `.env.local` en la raíz del proyecto.

---

## 5. Checklist de Implementación

Sigue estos pasos en orden:

- [ ] **Datos del proyecto:** Asegurar que `ubicacion_proyecto.json` tenga `projectName`, `projectAddress`, `coordinates` (lat/lng)
- [ ] **Datos POIs:** Archivo (p. ej. `puntos_de_interes.ts`) con estructura §1.2: `travel.caminando`, `travel.carro_propio`, `travel.bus_colectivo` según corresponda; IDs únicos
- [ ] **GCP y API Key:** Proyecto en Google Cloud, Maps JavaScript API habilitada, API Key creada y restringida por dominio; `NEXT_PUBLIC_GOOGLE_MAPS_KEY` en `.env.local`
- [ ] **Paquete:** `pnpm add @react-google-maps/api`
- [ ] **Tipos y constantes:** `tipos.ts` (POI, TravelMode, CategoryId, ProjectData) y `constants.ts` (colores de paleta, iconos, categorías)
- [ ] **Componentes modulares:** UbicacionSection (raíz), MapSection, POIList, StatsCards, CategoryFilters, TravelModeSelector
- [ ] **Estado compartido:** `hoveredId`, `filterId` (categoría), `travelMode` (a pie / vehículo / colectivo) entre mapa, lista y selector
- [ ] **MapSection:** GoogleMap, estilos dark (§2.6), marcadores por POI, círculos de radio, leyenda, tooltip con distancia/tiempo según modo activo
- [ ] **POIList y sincronización:** Hover lista ↔ mapa; mostrar distancia y tiempo según modo activo
- [ ] **Import con `dynamic()`:** En la página, importar el componente de ubicación con `ssr: false` y un loading placeholder
- [ ] **Pruebas:** Desarrollo y (si aplica) producción; verificar carga del mapa, filtros, selector de modo y restricción de API Key
