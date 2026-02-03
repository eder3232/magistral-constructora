# Magistral Constructora — Directrices del Proyecto Web
## Home Page · Edificio Magistral

---

## 1. Visión General

### Contexto
Magistral Constructora es una nueva constructora con su primer proyecto activo: **Edificio Magistral**, un edificio multifamiliar de 7 pisos ubicado en Calle Los Arces, Cayma, Arequipa. El edificio actualmente está en fase de excavación y la página debe girar 100% alrededor de este edificio.

### Objetivo
Crear una landing page impactante orientada a potenciales compradores de departamentos. La experiencia debe generar un impacto visual inmediato y transmitir confianza, calidad y modernidad.

### Audiencia
Familias y profesionales buscando comprar su departamento en Arequipa.

### Tono
Cálido y familiar, pero con un estilo moderno y profesional. No debe sentirse frío ni corporativo.

### Alcance del proyecto (presentación al cliente)
Este sitio **no es para producción**: es una **demostración para mostrar al cliente** y que acepte trabajar con el equipo. Los datos reales (teléfonos, emails definitivos, imágenes finales, etc.) se recibirán después, cuando el cliente apruebe. Por ahora se usan placeholders y contenido de ejemplo donde haga falta.

---

## 2. Identidad Visual

### 2.1 Paleta de Colores

| Nombre | Rol | Hex |
|---|---|---|
| Azul Marino | Color principal, navbar, headers | `#1B3A5C` |
| Azul Oscuro | Fondos oscuros, hero | `#0F2540` |
| Naranja | Acento: botones, líneas decorativas, highlights | `#E8722A` |
| Blanco | Texto sobre fondos oscuros | `#FFFFFF` |
| Crema | Fondos cálidos en secciones claras | `#F5F0EB` |
| Gris Suave | Texto secundario, bordes | `#8A9BB0` |

> El azul marino es el protagonista. El naranja da vida y calor. La crema reemplaza el blanco puro en los fondos para dar ese toque cálido y familiar que busca el cliente.

> **Implementación:** Las variables de color se definirán en `globals.css` (`:root`) **después** de instalar shadcn/ui, para integrarlas con el tema que trae shadcn y mantener una sola fuente de verdad.

### 2.2 Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display / Títulos | **Playfair Display** | Títulos principales, hero, sección headers |
| Body | **DM Sans** | Párrafos, descripciones, texto general |
| Números / Stats | **Playfair Display Bold** | Contadores animados, estadísticas |

> Playfair Display aporta elegancia y calor a la vez, contrasta muy bien con el azul marino y se ve genial en animaciones de texto letra por letra.

### 2.3 Logo
- En el navbar: usar el logo en versión adaptada (símbolo + texto blanco sobre fondo oscuro)
- En el footer: versión blanca completa

---

## 3. Stack Técnico

| Tecnología | Rol |
|---|---|
| Next.js 14+ (App Router) | Framework principal, SEO, enrutamiento |
| GSAP + ScrollTrigger | Animaciones principales al scroll |
| Lenis | Smooth scrolling premium |
| SplitType | Animaciones de texto (letras / palabras) |
| Tailwind CSS | Estilos |
| shadcn/ui | Componentes UI (botones, cards, sheet para menú móvil, etc.) |

**Gestor de paquetes:** todas las dependencias se instalan con **pnpm**. No usar npm ni yarn.

Cuando haga falta ejecutar comandos en la terminal (instalar paquetes, init de shadcn, etc.), el desarrollador los ejecuta en su máquina; ver la directiva del proyecto en `.cursor/rules/` sobre indicar los comandos por chat.

```bash
pnpm add gsap lenis split-type
# shadcn se instala con: pnpm dlx shadcn@latest init
```

> **Nota:** El paquete de smooth scroll es **lenis** (no `@studio-freight/lenis`); el nombre oficial del paquete es solo `lenis`.

---

## 4. Estructura de la Página Home

El orden de las secciones de arriba hacia abajo:

1. Navbar
2. Hero
3. Sobre el Edificio
4. Características & Amenities
5. Estadísticas del Edificio *(contadores animados)*
6. Avance de Obra *(timeline)*
7. Distribución de Departamentos
8. Sostenibilidad
9. Ubicación
10. CTA de Contacto
11. Footer

### Navegación y rutas
- **Landing (Home):** una sola página. Los links del **navbar** (Inicio, El Proyecto, Características, Ubicación) apuntan a **anclas** en la misma página: `#inicio`, `#el-proyecto`, `#caracteristicas`, `#ubicacion`.
- **Footer:** se busca que **todo sea enlace a rutas** (páginas de Next.js). Cuando una ruta aún no exista, se puede usar temporalmente ancla a la sección correspondiente en la landing; al implementar la ruta, el footer enlaza a esa ruta. Ejemplos futuros: `/el-proyecto`, `/caracteristicas`, `/avance-de-obra`, `/ubicacion`, `/libro-de-reclamaciones`, `/terminos-y-condiciones`.
- **Contacto:** por ahora **solo es una sección de la landing** (CTA de contacto, §5.10). No hay página `/contacto` en esta fase; el botón "Agendar Visita" y la información de contacto viven en esa sección. La ruta de contacto se implementará después si el cliente lo requiere.
- **Otras rutas (después):** Libro de Reclamaciones, Términos y Condiciones, etc. son rutas separadas que se implementarán más adelante.

---

## 5. Secciones Detalladas

---

### 5.1 NAVBAR

**Propósito:** Navegación principal, presente en toda la página.

**Contenido:**
- Logo (izquierda)
- Links: Inicio · El Proyecto · Características · Ubicación
- Botón CTA: **"Agendar Visita"** (naranja)

**Comportamiento:**
- Inicia transparente (sobre el hero)
- Al hacer scroll se vuelve opaco con fondo `#0F2540` + efecto `backdrop-filter: blur`
- Transición suave entre ambos estados

**Animaciones:**
- Al cargar la página los links aparecen con un stagger sutil (fade-in, delay de 0.1s entre cada uno)
- El cambio de estado transparente → opaco se maneja con ScrollTrigger

**Imágenes:** ninguna

---

### 5.2 HERO

**Propósito:** Primera impresión. Debe captar la atención en los primeros 2 segundos.

**Layout:** Fullscreen. Imagen de fondo con overlay oscuro gradiente. Contenido centrado encima.

**Contenido:**
```
Subtítulo:   "Tu nuevo hogar en Arequipa"
Título:      "Edificio Magistral"
Descripción: "Departamentos de 2 y 3 dormitorios en el corazón de Cayma.
              Diseñado para vivir diferente."
Botón CTA:   "Conocer el Proyecto"
Elemento:    Línea decorativa naranja debajo del título
```

**Animaciones (secuencia al cargar):**

| Elemento | Efecto | Duración | Delay |
|---|---|---|---|
| Imagen de fondo | Zoom sutil: scale `1.05 → 1` | 2s | 0s |
| Subtítulo | Fade-in + slide-up (`y: 30 → 0`) | 0.8s | 0.3s |
| Título | **SplitType en caracteres** + stagger | 1s | 0.6s |
| Línea naranja | Expand horizontal (`width: 0 → 50px`) | 0.6s | 1.4s |
| Descripción | Fade-in + slide-up | 0.8s | 1.6s |
| Botón | Scale up (`0.9 → 1`) + fade-in | 0.5s | 2s |

**Imágenes necesarias:**
- `render_fachada.jpg` — Render principal de la fachada del edificio 🔴 **PRIORIDAD ALTA**

---

### 5.3 SOBRE EL EDIFICIO

**Propósito:** Dar contexto del proyecto y generar confianza.

**Layout:** Dos columnas — texto a la izquierda, imagen a la derecha. En mobile se apila.

**Contenido:**
```
Elemento decorativo: línea naranja pequeña (arriba del título)
Título:              "El primer paso hacia un hogar magistral"

Párrafo 1:
  En Magistral Constructora creemos que un hogar no es solo un espacio
  físico — es el lugar donde se construyen los recuerdos más importantes
  de tu vida. El Edificio Magistral es nuestra primera obra, y la hemos
  proyectado con esa misma convicción: cada detalle fue pensado para que
  tú y tu familia se sientan en casa desde el día uno.

Párrafo 2:
  Ubicado en una de las zonas más tranquilas y conectadas de Cayma, el
  edificio combina una arquitectura moderna con acabados de primera
  calidad. Desde el estacionamiento hasta la azotea, cada nivel fue
  diseñado buscando el máximo confort y seguridad para su familia.
```

**Animaciones (al hacer scroll y entrar al viewport):**

| Elemento | Efecto |
|---|---|
| Línea naranja | Expand horizontal (`width: 0 → 40px`), duración 0.6s |
| Título | SplitType en **palabras**, stagger 0.1s por palabra |
| Párrafos | Fade-in + slide-up, cada párrafo con 0.2s de delay entre sí |
| Imagen | Slide desde la derecha (`x: 60 → 0`) + fade-in |

**Imágenes necesarias:**
- `render_edificio_lateral.jpg` — Render del edificio desde otro ángulo 🔴 **PRIORIDAD ALTA**

---

### 5.4 CARACTERÍSTICAS & AMENITIES

**Propósito:** Mostrar los puntos de venta fuertes del edificio de manera visual y rápida.

**Layout:** Título centrado arriba. Abajo un grid de 3 columnas (1 columna en mobile). Cada elemento es una card.

**Cards:**

| Icono (SVG) | Título | Descripción |
|---|---|---|
| ☀️ | Sky Bar | Disfruta del mejor panorama de Cayma desde la azotea con un espacio exclusivo para relajarte y socializar. |
| 💻 | Coworking | Un ambiente moderno y tranquilo para trabajar desde casa sin salir del edificio. |
| 🔥 | Área de Parrilla | Celebra los momentos más importantes con tu familia en un espacio diseñado para compartir. |
| 🌿 | Techos Verdes | Espacios verdes integrados que contribuyen al bienestar de los residentes y al medio ambiente. |
| 🚗 | Estacionamiento | 13 estacionamientos vehiculares y 7 espacios para bicicletas en niveles subterráneos. |
| 🏠 | 2 y 3 Dormitorios | Espacios amplios y funcionales adaptados para familias de diferentes tamaños. |

> Los iconos se hacen como SVG custom simples en naranja. No se necesitan imágenes externas.

**Animaciones (al hacer scroll):**
- Las cards aparecen con un **stagger**: la primera entra, luego la segunda con delay, etc.
- Efecto por card: fade-in + slide-up (`y: 40 → 0`), duración 0.6s, stagger 0.15s entre cards
- **Hover:** sutil `scale 1 → 1.03` + sombra más profunda + una línea naranja aparece en la parte superior de la card

**Imágenes necesarias:** ninguna (solo iconos SVG)

---

### 5.5 ESTADÍSTICAS DEL EDIFICIO

**Propósito:** Impacto visual con números concretos. Una de las secciones más llamativas visualmente.

**Layout:** Fondo oscuro (`#0F2540`). Una fila horizontal de 4 estadísticas, centradas, con mucho espacio visual.

**Contenido:**

| Número | Etiqueta |
|---|---|
| **7** | Pisos |
| **12** | Departamentos |
| **13** | Estacionamientos |
| **1,940** | m² de área total |

- Debajo de cada número: una línea separadora naranja delgada
- Texto al final de la sección: *"Construido con calidad y precisión"*

**Animaciones (la estrella de la página):**
- Al hacer scroll y entrar al viewport los números se incrementan desde **0** hasta su valor final
- Efecto contador animado con GSAP usando interpolación (`ease: "power2.out"`)
- Duración del conteo: ~1.5 segundos
- Los 4 contadores inician con un **stagger de 0.2s** entre sí (el primero empieza, luego el segundo, etc.)
- El texto `"m²"` aparece después de que el número llega a su valor final con un fade-in

**Imágenes necesarias:** ninguna (sección puramente tipográfica)

---

### 5.6 AVANCE DE OBRA

**Propósito:** Mostrar que el proyecto es real y está avanzando. Genera confianza. Sección única porque es el primer proyecto de la constructora.

**Layout:** Fondo crema (`#F5F0EB`). Título centrado arriba. Abajo un **timeline vertical** con los hitos. Imagen a un lado.

**Contenido:**
```
Título:     "El proyecto está en movimiento"
Subtítulo:  "Conoce cómo avanza la obra paso a paso"
```

**Hitos del timeline:**

| Etapa | Estado | Descripción |
|---|---|---|
| Diseño Arquitectónico | ✅ Completado | Planos y memoria descriptiva aprobados |
| Permisos y Licencias | ✅ Completado | Aprobación municipal según normativa vigente |
| Excavación | 🔄 En Curso | Se está realizando actualmente la excavación del terreno |
| Construcción Estructural | ⏳ Próximo | Inicio de la estructura de concreto armado |
| Acabados y Entrega | ⏳ Próximo | Acabados interiores y entrega de departamentos |

**Animaciones:**
- La **línea vertical del timeline se "dibuja"** conforme se scrollea usando ScrollTrigger con `scrub: true` — esta es la animación más impactante de la sección
- Cada hito aparece secuencialmente con delay a medida que la línea llega a su posición
- Los hitos completados tienen un **check que aparece con un scale pop** (`scale: 0 → 1`, con `ease: "back.out(1.7)"`)
- El hito "En Curso" tiene un **pulso suave** (`opacity` oscila entre 0.7 y 1 en un loop de 1.5s)

**Imágenes necesarias:**
- `foto_obra_excavacion.jpg` — Foto real de la obra en excavación 🟡 **MEDIA**

---

### 5.7 DISTRIBUCIÓN DE DEPARTAMENTOS

**Propósito:** Mostrar los tipos de departamentos disponibles de manera clara y comparativa.

**Layout:** Dos cards grandes side by side (una por tipo). En mobile se apilan.

**Card 1 — Departamento de 2 Dormitorios:**
```
Título:     "Departamento de 2 Dormitorios"
Espacios:   Sala · Comedor · Cocina · 2 Dormitorios · Baño completo · Balcón · Lavandería
Área:       ~85 m²
Precio:     "Consultar precio"
Botón:      "Ver detalles"
```

**Card 2 — Departamento de 3 Dormitorios:**
```
Título:     "Departamento de 3 Dormitorios"
Espacios:   Sala · Comedor · Cocina · 3 Dormitorios · 2 Baños · Balcón · Lavandería
Área:       ~110 m²
Precio:     "Consultar precio"
Botón:      "Ver detalles"
```

- Debajo de las cards, si está disponible, una imagen de planta de piso

**Animaciones (al hacer scroll):**
- La card izquierda aparece con **slide desde la izquierda** (`x: -60 → 0`)
- La card derecha aparece con **slide desde la derecha** (`x: 60 → 0`)
- **Hover:** sombra más profunda + una línea naranja aparece en la parte superior de la card

**Imágenes necesarias:**
- `plano_planta_piso.jpg` — Plano de planta de un piso típico 🟢 BAJA
- `foto_interior_sala.jpg` — Imagen de referencia de interior 🟢 BAJA

---

### 5.8 SOSTENIBILIDAD

**Propósito:** Reforzar el valor del proyecto con su compromiso ambiental y social.

**Layout:** Fondo oscuro (azul marino). Título centrado arriba. Descripción breve. Abajo una fila de 4 puntos con icono + texto.

**Contenido:**
```
Título:      "Construido pensando en el futuro"
Descripción: "El Edificio Magistral fue diseñado siguiendo las líneas de
              construcciones sostenibles, garantizando un hogar respetuoso
              con el medio ambiente y con las generaciones por venir."
```

| Icono | Título | Descripción |
|---|---|---|
| 💡 | Eficiencia Energética | Iluminación LED en todas las áreas comunes del edificio |
| 💧 | Ahorro de Agua | Aparatos sanitarios de bajo consumo en cada departamento |
| 🌱 | Materiales Sostenibles | Uso de materiales certificados con menor impacto ambiental |
| 🌬️ | Ventilación Natural | Diseño que prioriza luz natural y circulación de aire |

**Animaciones:**
- El título aparece con **SplitType en palabras** + stagger
- Cada punto (icono + texto) aparece con stagger al hacer scroll (fade-in + slide-up, 0.15s entre cada uno)

**Imágenes necesarias:** ninguna (iconos SVG)

---

### 5.9 UBICACIÓN

**Propósito:** Mostrar dónde está el edificio y por qué es una buena zona.

**Layout:** Título centrado arriba. Dos columnas: izquierda con datos de ubicación, derecha con mapa.

**Contenido:**
```
Título:     "Una ubicación que suma"
Dirección:  Calle Los Arces N°220, Cayma, Arequipa

Puntos de referencia:
  • A 5 minutos del centro comercial más cercano
  • Zona residencial tranquila y consolidada
  • Conectado a las principales avenidas de Cayma
  • Cerca de colegios, clínicas y servicios públicos
```

**Animaciones:**
- Columna de texto: slide desde la izquierda + fade-in
- Mapa: slide desde la derecha + fade-in
- Ambos se animan al mismo tiempo cuando la sección entra al viewport

**Imágenes necesarias:**
- `mapa_ubicacion.jpg` — Imagen del mapa o embed de Google Maps 🟢 BAJA

---

### 5.10 CTA DE CONTACTO

**Propósito:** Conversión. El objetivo final de toda la página.

**Layout:** Sección fullwidth. Fondo con gradiente sutil de azul marino a un tono más oscuro. Contenido centrado con mucho espacio visual.

**Contenido:**
```
Título:      "¿Listo para dar el primer paso?"
Descripción: "Agenda una visita o solicita más información sobre el
              Edificio Magistral. Nuestro equipo está listo para atenderte."
Botón 1:     "Agendar Visita"        → estilo primario (naranja)
Botón 2:     "Llamar al +51 XXX XXX XXX" → estilo secundario (outlined blanco)
```

**Animaciones:**
- Título: SplitType en palabras + stagger
- Descripción: fade-in después del título
- Botones: aparecen con un **scale up sutil** (`0.95 → 1`) + fade-in, con 0.15s de delay entre ambos

**Imágenes necesarias:** ninguna

---

### 5.11 FOOTER

**Propósito:** Información de contacto y enlaces finales. Funcional, no visual.

**Layout:** Fondo oscuro (`#0F2540`). Logo arriba. Tres columnas de información abajo. Línea inferior con copyright.

**Contenido:**
```
Logo:  Magistral Constructora (versión blanca)

Columna 1 — Magistral:
  Una constructora comprometida con crear hogares de calidad
  donde las familias puedan crecer juntas.

Columna 2 — El Proyecto (todos son links):
  El Edificio      → ruta (o ancla #el-proyecto mientras no exista ruta)
  Características  → ruta (o ancla #caracteristicas)
  Avance de Obra   → ruta (o ancla #avance-de-obra)
  Ubicación        → ruta (o ancla #ubicacion)

Columna 3 — Contacto (texto + datos; "Contacto" como concepto es la sección CTA de la landing):
  Calle Los Arces N°220, Cayma, Arequipa
  +51 XXX XXX XXX
  contacto@magistralconstruc.com
  (En fases posteriores se pueden añadir links a /libro-de-reclamaciones, /terminos-y-condiciones, etc.)

Línea inferior:
  © 2025 Magistral Constructora. Todos los derechos reservados.
```

**Enlaces:** En el footer se prioriza que cada ítem de navegación sea un **link a ruta**. Mientras una ruta no exista, el link puede apuntar a la ancla correspondiente en la landing. Contacto es por ahora solo la sección CTA en la home, no una página aparte.

**Animaciones:** ninguna recomendada

---

## 6. Resumen de Imágenes Necesarias

| ID | Descripción | Prioridad | Sección |
|---|---|---|---|
| `render_fachada.jpg` | Render principal de la fachada del edificio | 🔴 ALTA | Hero |
| `render_edificio_lateral.jpg` | Render del edificio desde otro ángulo | 🔴 ALTA | Sobre el Edificio |
| `render_azotea.jpg` | Render de la azotea / sky bar | 🟡 MEDIA | Características (opcional) |
| `foto_obra_excavacion.jpg` | Foto real de la obra en excavación | 🟡 MEDIA | Avance de Obra |
| `plano_planta_piso.jpg` | Plano de planta de un piso típico | 🟢 BAJA | Distribución |
| `foto_interior_sala.jpg` | Imagen de referencia de interior | 🟢 BAJA | Distribución |
| `mapa_ubicacion.jpg` | Screenshot del mapa de ubicación | 🟢 BAJA | Ubicación |

> **Para el mockup inicial:** En lugar de esperar las imágenes reales se puede usar Unsplash con fotos de edificios modernos como placeholder temporal. Esto hará que la presentación al cliente se vea mucho más completa y profesional.

---

## 7. Resumen de Animaciones

| Sección | Animación Principal | Dificultad |
|---|---|---|
| Hero | Texto letra por letra (SplitType) + zoom de imagen | ⭐ Fácil |
| Sobre el Edificio | Slide de texto y imagen al scroll | ⭐ Fácil |
| Características | Stagger de cards al scroll + hover | ⭐ Fácil |
| **Estadísticas** | **Contadores animados (0 → número)** | ⭐⭐ Media |
| **Avance de Obra** | **Timeline que se dibuja al scroll (scrub)** | ⭐⭐ Media |
| Distribución | Slide izquierda / derecha de cards | ⭐ Fácil |
| Sostenibilidad | Stagger de puntos al scroll | ⭐ Fácil |
| Ubicación | Slide de columnas al scroll | ⭐ Fácil |
| CTA | Scale up de botones | ⭐ Fácil |

---

## 8. Responsive Design & Mobile First

### 8.1 Filosofía

El desarrollo se aborda **mobile first**: el código base se escribe pensando en pantallas pequeñas y se agregan las variantes para tablets y desktop usando los breakpoints de Tailwind. Esto garantiza que la experiencia en celular sea de primera clase y no un simple "ajuste" de la versión desktop.

> En Perú una gran parte del tráfico web viene de celulares. La versión mobile no es secundaria, es la principal.

---

### 8.2 Breakpoints

| Nombre | Ancho mínimo | Clase Tailwind | Dispositivos objetivo |
|---|---|---|---|
| Mobile | 0px (base) | — | Celulares (320px – 639px) |
| Tablet pequeña | 640px | `sm:` | Teléfonos landscape |
| Tablet | 768px | `md:` | iPads, tablets |
| Desktop | 1024px | `lg:` | Laptops |
| Desktop grande | 1280px | `xl:` | Monitores grandes |

---

### 8.3 Tipografía Responsive

| Elemento | Mobile (base) | Tablet `md:` | Desktop `lg:` |
|---|---|---|---|
| Hero — Título | `text-4xl` (36px) | `text-5xl` (48px) | `text-7xl` (72px) |
| Hero — Subtítulo | `text-sm` (14px) | `text-base` (16px) | `text-lg` (18px) |
| Hero — Descripción | `text-base` (16px) | `text-lg` (18px) | `text-lg` (18px) |
| Sección — Título | `text-3xl` (30px) | `text-4xl` (36px) | `text-5xl` (48px) |
| Card — Título | `text-lg` (18px) | `text-xl` (20px) | `text-xl` (20px) |
| Body / Párrafos | `text-base` (16px) | `text-base` (16px) | `text-lg` (18px) |
| Stats — Número | `text-5xl` (48px) | `text-6xl` (60px) | `text-7xl` (72px) |

> **Nota:** Nunca usar tamaños de texto por debajo de 16px en mobile. Es difícil de leer en pantallas pequeñas y Google lo penaliza en SEO.

---

### 8.4 Espaciado y Padding

| Elemento | Mobile (base) | Tablet `md:` | Desktop `lg:` |
|---|---|---|---|
| Padding vertical de secciones | `py-16` (64px) | `py-24` (96px) | `py-32` (128px) |
| Padding horizontal de secciones | `px-4` (16px) | `px-8` (32px) | `px-16` (64px) |
| Max-width del contenido | `w-full` | `max-w-3xl` | `max-w-6xl` |
| Gap entre cards | `gap-4` (16px) | `gap-6` (24px) | `gap-8` (32px) |

---

### 8.5 Áreas de Toque

Todos los elementos interactivos deben cumplir un **mínimo de 44×44px** de área clickeable en mobile para facilitar la interacción con el dedo.

- Botones: `min-h-[44px] px-6`
- Links del navbar mobile: cada ítem debe tener `min-h-[44px]`
- Cards clickeables: el área de toque cubre toda la card

---

### 8.6 Navbar en Mobile

En mobile (por debajo de `lg:`) el navbar cambia completamente de comportamiento.

**Estructura visible:**
- Logo a la izquierda
- Icono hamburguesa (3 líneas horizontales) a la derecha — tamaño `44×44px`

**Al presionar el hamburguesa se abre un overlay fullscreen:**
- Fondo: `#0F2540` con opacidad del 97%
- Los links se muestran centrados, apilados verticalmente
- Debajo de los links el botón "Agendar Visita" (naranja, full-width)
- Botón de cierre (X) en la esquina superior derecha

**Animaciones del overlay:**
- El overlay entra con fade-in (0.3s)
- Cada link aparece con slide desde la izquierda + fade-in, con un stagger de 0.08s entre cada uno
- Al cerrar el overlay se invierte la animación (slide hacia la izquierda + fade-out)

**Comportamiento:**
- Al abrir el overlay el scroll de la página se bloquea (`overflow: hidden` en el body)
- El overlay se cierra al presionar: la X, o cualquier link de navigación

---

### 8.7 Comportamiento Responsive por Sección

Esta es la tabla principal de referencia. Cada fila muestra cómo se transforma cada sección según el tamaño de pantalla.

| Sección | Mobile (base) | Tablet `md:` | Desktop `lg:` |
|---|---|---|---|
| **Navbar** | Logo + hamburguesa → overlay fullscreen | Mismo que mobile | Links horizontales + botón CTA visible |
| **Hero** | Texto centrado. Botón full-width. Título más pequeño | Texto centrado. Botón auto | Texto centrado. Toda la secuencia de animación |
| **Sobre el Edificio** | Una columna. Imagen arriba, texto abajo | Una columna. Imagen arriba, texto abajo | Dos columnas: texto izquierda, imagen derecha |
| **Características** | Grid de 1 columna (cards apiladas) | Grid de 2 columnas | Grid de 3 columnas |
| **Estadísticas** | Grid 2×2 (dos números por fila) | Grid 2×2 | Fila horizontal de 4 en una sola línea |
| **Avance de Obra** | Timeline vertical centrado. Sin imagen a lado | Timeline vertical. Imagen encima del timeline | Dos columnas: imagen izquierda, timeline derecha |
| **Distribución** | Una columna. Cards apiladas | Una columna. Cards apiladas | Dos columnas side by side |
| **Sostenibilidad** | Una columna (los 4 puntos apilados) | Grid 2×2 | Fila horizontal de 4 |
| **Ubicación** | Una columna. Texto arriba, mapa abajo | Una columna. Texto arriba, mapa abajo | Dos columnas: texto izquierda, mapa derecha |
| **CTA** | Botones apilados verticalmente, full-width | Botones side by side | Botones side by side |
| **Footer** | Una columna. Todo apilado | Dos columnas | Tres columnas |

---

### 8.8 Animaciones en Mobile

Algunas animaciones se ajustan en mobile por dos razones: **performance** y que en celulares no existe el estado hover.

| Animación | En Desktop | En Mobile |
|---|---|---|
| Hover en cards (scale + sombra + línea naranja) | ✅ Activa | ❌ No existe hover. Estado normal siempre |
| SplitType caracteres (Hero título) | ✅ Activa | ✅ Activa — vale el impacto, es lo primero que ven |
| SplitType palabras (títulos de sección) | ✅ Activa, stagger 0.1s | ✅ Activa pero stagger más rápido: 0.06s |
| Contadores animados (Estadísticas) | ✅ Activa | ✅ Activa — funciona genial en cualquier pantalla |
| Timeline se dibuja al scroll (scrub) | ✅ Activa | ✅ Activa — el timeline ya es vertical en ambos |
| Slide izquierda/derecha de cards (Distribución) | ✅ `x: -60 → 0` y `x: 60 → 0` | Se convierte en **solo slide-up** (`y: 40 → 0`) porque las cards están apiladas |
| Slide de columnas (Ubicación) | ✅ Izquierda y derecha simultáneo | Se convierte en **slide-up secuencial**: primero texto, luego mapa con 0.2s de delay |
| Zoom de imagen hero | ✅ `scale 1.05 → 1` | ✅ Activa pero con `object-position: center` para que el edificio no quede cortado |

---

### 8.9 Imágenes Responsive

- Usar siempre el componente `<Image>` de Next.js con el prop `sizes` para que el navegador sirva la imagen del tamaño adecuado según el dispositivo. Ejemplo:

```jsx
<Image
  src="/render_fachada.jpg"
  alt="Edificio Magistral"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
  className="object-cover"
/>
```

- El hero en mobile debe usar `object-position: center` para que el edificio no quede cortado con el crop vertical.
- Las imágenes de sección (como `render_edificio_lateral.jpg`) en mobile se reduce la altura: `h-64 md:h-auto` para no tomar demasiado espacio vertical.
- Agregar siempre `priority` prop en la imagen del hero para que se cargue primero y no haya flash.

---

### 8.10 Safe Area (Notch)

En dispositivos con notch usar el padding de safe area para que el contenido no quede detrás de la barra del sistema:

```css
/* En el layout global */
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

Esto aplica especialmente al **navbar** (parte superior) y al **footer** (parte inferior).

---

## 9. Notas Generales de Desarrollo

- **Performance:** Usar `will-change: transform` en elementos que se animarán. Las imágenes deben pasarse por el componente `<Image>` de Next.js para optimización automática.
- **CSS Variables:** Definir las variables de color en `:root` (en `globals.css`) después de tener shadcn instalado, para integrarlas con el tema de shadcn.
- **Navbar sticky:** Debe permanecer visible al hacer scroll pero cambiar de estilo (transparente → opaco con blur). En mobile el overlay se maneja por separado.
- **Smooth scroll:** Lenis se integra en la **página principal** (`app/page.tsx`), no en el layout, de modo que solo actúe en la home. En mobile verificar que no conflicte con el scroll nativo del dispositivo.
- **Loader inicial:** Considerar un loader simple mientras cargan las fuentes y la imagen del hero para evitar el flash de contenido sin estilo.
- **Rutas futuras:** Esta directriz cubre únicamente el Home (landing). Las rutas Libro de Reclamaciones, Términos y Condiciones, Contacto, etc. se implementarán después como páginas separadas de Next.js.

### Accesibilidad
No es prioridad en esta fase (proyecto de presentación al cliente). Implementar **solo lo mínimo necesario** (por ejemplo: textos alternativos en imágenes, áreas de toque ya definidas). No es necesario en esta etapa profundizar en `prefers-reduced-motion`, ARIA avanzado ni auditorías completas.

### TODOs (pendientes para más adelante)
- [ ] **Layout y SEO:** Ajustar `app/layout.tsx`: metadata (título, descripción orientada a compradores en Arequipa), `lang="es"` (o `es-PE`), y fuentes Playfair Display + DM Sans en lugar de Geist.

---

## 10. Lista de implementación

Checklist para desarrollar la landing en orden. Marcar según se complete.

### Setup
- [x] Instalar shadcn/ui (`pnpm dlx shadcn@latest init`) y componentes necesarios (Button, Card, Sheet, etc.)
- [x] Instalar dependencias: `pnpm add gsap lenis split-type`
- [x] Configurar variables de color en `globals.css` integradas con el tema de shadcn (paleta §2.1)
- [x] Layout: fuentes Playfair Display + DM Sans, metadata y `lang="es"` (TODO SEO)

### Estructura base
- [x] Definir IDs de sección en la home: `#inicio`, `#el-proyecto`, `#caracteristicas`, `#estadisticas`, `#avance-de-obra`, `#distribucion`, `#sostenibilidad`, `#ubicacion`, `#contacto` (CTA)
- [x] Integrar Lenis (smooth scroll) en la **página principal** (`app/page.tsx`), no en el layout
- [ ] (Opcional) Loader inicial mientras cargan fuentes/hero

### Componentes y secciones (orden sugerido)
- [x] **Navbar:** estructura desktop (logo, links a anclas, botón Agendar Visita) + mobile (hamburguesa, Sheet overlay), transparente → opaco al scroll
- [x] **Hero:** fullscreen, imagen de fondo, texto y CTA, animaciones (zoom imagen, fade-up secuencia)
- [x] **Sobre el Edificio:** dos columnas, texto + imagen, animaciones al scroll
- [x] **Características & Amenities:** grid de cards (6 ítems), iconos desde /landing/caracteristicas, stagger y hover
- [x] **Estadísticas del Edificio:** 4 contadores animados (7, 12, 13, 1 940), fondo oscuro
- [x] **Avance de Obra:** timeline vertical, hitos con estados (completado / en curso / próximo), línea que se dibuja al scroll, video avance de obra
- [x] **Distribución de Departamentos:** dos cards (2 y 3 dormitorios), slide al scroll, hover, plano e interior
- [x] **Sostenibilidad:** 4 puntos con icono + texto, fondo oscuro, stagger
- [x] **Ubicación:** dirección, puntos de referencia, imagen de mapa (TODO: reemplazar por Google Maps)
- [x] **CTA de Contacto:** título, descripción, botones Agendar Visita + Llamar
- [x] **Footer:** tres columnas, logo, enlaces (anclas por ahora; rutas cuando existan), datos de contacto, copyright

### Rutas futuras (después de la landing)
- [ ] Libro de Reclamaciones
- [ ] Términos y Condiciones
- [ ] (Si aplica) Página Contacto u otras acordadas con el cliente

### TODOs — Distribución y mejoras posteriores
- [ ] **Botones "Ver detalles":** Hacer funcionales los dos botones "Ver detalles" de la sección Distribución de Departamentos (por ejemplo enlace a modal, página de detalle o ancla con más información de cada tipo de departamento).
- [ ] **Ampliar sección Distribución:** Además de los departamentos de 2 y 3 dormitorios, agregar en la misma sección (o como subsecciones) las características de: **cocheras**, **primer nivel** y **azotea**.

### TODOs — Ubicación
- [ ] **Mapa:** Reemplazar la imagen actual de ubicación (`/landing/ubicacion/ubicacion.png`) por un embed de **Google Maps** (iframe o API) para que sea interactivo.
