# Guía Visual — Magistral Constructora

Documento de referencia para mantener **coherencia visual** en todo el sitio. Usar al implementar nuevas rutas (Nosotros, Contacto, etc.) y componentes.

> **Relación con otros documentos:** La especificación detallada de la **home** está en `directrices_magistral.md`. Esta guía define el **aspecto común** de todas las páginas y cómo replicarlo.

---

## 1. Identidad visual

### 1.1 Paleta de colores

| Nombre        | Rol                         | Hex       | Variable CSS      | Uso en Tailwind     |
|---------------|-----------------------------|-----------|-------------------|---------------------|
| Azul Marino   | Principal, navbar, headers  | `#1B3A5C` | `--brand-navy`    | `bg-brand-navy`, `text-brand-navy` |
| Azul Oscuro   | Fondos oscuros, hero        | `#0F2540` | `--brand-navy-dark`| `bg-brand-navy-dark` |
| Naranja       | Acento, botones, líneas     | `#E8722A` | `--brand-orange`  | `bg-brand-orange`, `text-brand-orange` |
| Blanco        | Texto sobre fondos oscuros  | `#FFFFFF` | `--brand-white`   | `text-brand-white`  |
| Crema         | Fondos cálidos, secciones   | `#F5F0EB` | `--brand-cream`   | `bg-brand-cream`    |
| Gris Suave    | Texto secundario, bordes    | `#8A9BB0` | `--brand-gray-soft` | `text-brand-gray-soft` |

**Reglas de uso:**

- **Fondos de sección:** alternar entre `bg-brand-cream` (secciones claras) y `bg-brand-navy-dark` o `bg-brand-navy` (secciones oscuras). En gradientes: `bg-gradient-to-b from-brand-navy to-brand-navy-dark`.
- **Texto en fondos oscuros:** `text-brand-white` o `text-brand-white/90` para descripciones.
- **Texto en fondos claros:** `text-foreground` para títulos, `text-muted-foreground` para párrafos.
- **Botón primario (CTA):** `bg-brand-orange text-brand-white hover:bg-brand-orange/90`.
- **Botón secundario (outline):** `border-2 border-brand-white bg-transparent text-brand-white hover:bg-brand-white/70` sobre fondo oscuro; sobre fondo claro usar borde y texto en tono navy u oscuro.
- **Línea decorativa:** `h-1 rounded-full bg-brand-orange` (ancho según contexto: `w-12`, `w-14`, o `mx-auto` con ancho fijo).

### 1.2 Tipografía

| Rol              | Fuente           | Variable CSS     | Clase Tailwind  | Uso |
|------------------|------------------|------------------|------------------|-----|
| Display / Títulos| Playfair Display | `--font-playfair`| `font-display`   | Títulos de página, de sección, hero |
| Body             | DM Sans          | `--font-dm-sans` | `font-sans` (default) | Párrafos, descripciones |

**Tamaños de referencia:**

| Elemento              | Mobile (base)     | Tablet `md:`     | Desktop `lg:`    |
|-----------------------|-------------------|------------------|------------------|
| Hero / Título página  | `text-4xl`        | `text-5xl`       | `text-7xl`       |
| Título de sección     | `text-3xl`        | `text-4xl`       | `text-5xl`       |
| Subtítulo / card      | `text-lg`         | `text-xl`        | `text-xl`        |
| Body / párrafos       | `text-base`       | `text-base`      | `text-lg`        |
| Texto secundario      | `text-base`       | —                | —                |

- **Peso:** títulos `font-bold`, cuerpo `font-normal`, énfasis `font-medium`.
- No usar tamaños por debajo de `text-base` (16px) en mobile.

### 1.3 Logo

- **Navbar:** logo adaptado (símbolo + texto blanco) sobre fondo oscuro o transparente.
- **Footer:** versión blanca completa.
- Mantener proporción y espacio alrededor consistente.

---

## 2. Tono y aspecto general

### 2.1 Tono de voz

- **Cálido y familiar**, sin ser informal. “Tu hogar”, “tu familia”, “nosotros”.
- **Moderno y profesional.** Lenguaje claro, sin tecnicismos innecesarios.
- **Confianza y calidad.** Mensajes que refuercen seguridad, acabados y buen vivir.

Evitar: frío corporativo, exceso de jerga inmobiliaria, tono publicitario agresivo.

### 2.2 Aspecto visual

- **Premium pero acogedor:** azul marino + crema + naranja dan seriedad y calidez.
- **Espacio en blanco:** secciones con buen padding; no saturar de texto o bloques.
- **Jerarquía clara:** un título principal por sección; párrafos cortos y legibles.

### 2.3 Qué evitar

- Colores que no estén en la paleta (salvo grises neutros para UI).
- Otras fuentes distintas a Playfair Display y DM Sans.
- Bloques de texto muy largos sin subtítulos o listas.
- Botones o CTAs con estilos inventados (usar siempre primario naranja o secundario outline).

---

## 3. Patrones de página

### 3.1 Estructura común de todas las rutas

Todas las páginas del sitio comparten:

1. **Navbar** (mismo componente `<Navbar />`).
2. **Contenido principal** dentro de `<main>`.
3. **Footer** (mismo componente `<Footer />`).

El layout raíz (`app/layout.tsx`) no incluye Navbar ni Footer; cada página los importa y coloca. Las páginas internas (Nosotros, Contacto, etc.) deben incluir ambos para mantener navegación y pie iguales a la home.

### 3.2 Estructura típica de una página interna

Ejemplo para `/nosotros`, `/contacto`, etc.:

```
<>
  <Navbar />
  <main>
    <!-- 1. Hero o banner de página -->
    <section> ... </section>
    <!-- 2. Secciones de contenido -->
    <section> ... </section>
    <section> ... </section>
    <!-- 3. CTA opcional -->
    <section> ... </section>
  </main>
  <Footer />
</>
```

### 3.3 Hero / banner de página interna

Para páginas que **no** son la home, el hero es más bajo y centrado en el título:

- **Altura:** `min-h-[40vh]` o `min-h-[50vh]` (no fullscreen).
- **Fondo:** `bg-brand-navy-dark` con overlay opcional sobre imagen: `bg-gradient-to-b from-brand-navy-dark/80 via-brand-navy-dark/60 to-brand-navy-dark`.
- **Contenido:** título de página + opcional subtítulo; centrado.
- **Línea decorativa:** opcional, `h-1 w-12 rounded-full bg-brand-orange` debajo del título.

**Clases de referencia para el hero de página interna:**

- Contenedor: `relative flex min-h-[45vh] items-center justify-center overflow-hidden`.
- Título: `font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl`.
- Subtítulo: `mt-2 text-base text-brand-white/90 md:text-lg`.

### 3.4 Secciones de contenido

- **Contenedor estándar:** `mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32`.
- **Título de sección:** `font-display text-3xl font-bold md:text-4xl lg:text-5xl` + `text-foreground` (fondo claro) o `text-brand-white` (fondo oscuro).
- **Línea sobre el título (opcional):** `h-1 w-10 rounded-full bg-brand-orange` + `mt-4` en el título.
- **Párrafos:** `text-base text-muted-foreground lg:text-lg` (fondo claro) o `text-brand-white/90` (fondo oscuro).

### 3.5 Alternancia de fondos

Para coherencia con la home, alternar fondos entre secciones:

- Sección 1 (ej. hero): oscuro.
- Sección 2: claro (`bg-brand-cream`).
- Sección 3: oscuro (`bg-brand-navy-dark` o `bg-brand-navy`).
- Sección 4: claro.
- CTA final: oscuro con gradiente.

Así se mantiene el ritmo visual del resto del sitio.

---

## 4. Guía para implementar nuevas rutas y componentes

### 4.1 Checklist por ruta

Antes de dar por cerrada una página nueva, verificar:

- [ ] **Navbar y Footer** incluidos e iguales al resto del sitio.
- [ ] **Colores** solo de la paleta (variables `brand-*` o equivalentes en Tailwind).
- **Tipografía:** `font-display` en títulos, `font-sans` en cuerpo; tamaños según tabla §1.2.
- **Espaciado:** contenedor de sección con `py-16 md:py-24 lg:py-32` y `px-4 md:px-8 lg:px-16`.
- **Botones:** componente `Button` de shadcn; primario naranja o variante outline según fondo.
- **Cards:** si se usan, estilo consistente (sombra, bordes, opcional línea naranja al hover como en la home).
- **Responsive:** mobile first; áreas de toque mínimo 44×44px en botones y enlaces.
- **Metadata:** `title` y `description` en el `metadata` de la ruta (SEO).

### 4.2 Animaciones en páginas internas

- **Recomendación:** animaciones suaves al entrar al viewport (fade-in, slide-up) para títulos y bloques; no es obligatorio replicar la complejidad de la home (SplitType, timeline con scrub).
- **Mínimo:** un ligero `opacity` + `translateY` al hacer scroll para no dejar la página estática.
- **Opcional:** reutilizar clases/patrones de la home (p. ej. IntersectionObserver + clases `.in-view`) si ya existen en el proyecto.

### 4.3 Componentes a reutilizar

- **UI:** `Button`, `Card`, `Sheet` (menú móvil), etc. de `@/components/ui`.
- **Layout:** `Navbar`, `Footer`.
- **Config:** datos de contacto desde `@/lib/site-config` (`SITE_CONTACT`).

No crear botones o cards con estilos totalmente nuevos; extender o variar los existentes con clases de Tailwind de la guía.

### 4.4 Ejemplo de estructura (pseudo-código)

Para una página como **Nosotros**:

```tsx
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = { title: "Nosotros | Magistral Constructora", description: "..." };

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero de página */}
        <section className="relative flex min-h-[45vh] items-center justify-center bg-brand-navy-dark">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mx-auto h-1 w-12 rounded-full bg-brand-orange" />
            <h1 className="mt-4 font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl">
              Nosotros
            </h1>
            <p className="mt-2 text-brand-white/90">...</p>
          </div>
        </section>
        {/* Sección contenido — fondo claro */}
        <section className="bg-brand-cream">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32">
            <h2 className="font-display text-3xl font-bold text-foreground ...">...</h2>
            <p className="mt-6 text-muted-foreground ...">...</p>
          </div>
        </section>
        {/* Sección oscura + CTA si aplica */}
      </main>
      <Footer />
    </>
  );
}
```

---

## 5. Referencia técnica rápida

### 5.1 Variables CSS (brand)

Definidas en `app/globals.css` (`:root`) y expuestas en Tailwind vía `@theme`:

| Variable             | Valor    | Uso en Tailwind   |
|----------------------|----------|-------------------|
| `--brand-navy`       | `#1b3a5c`| `brand-navy`      |
| `--brand-navy-dark`  | `#0f2540`| `brand-navy-dark` |
| `--brand-orange`     | `#e8722a`| `brand-orange`    |
| `--brand-white`      | `#ffffff`| `brand-white`     |
| `--brand-cream`      | `#f5f0eb`| `brand-cream`     |
| `--brand-gray-soft`  | `#8a9bb0`| `brand-gray-soft` |
| `--font-playfair`    | (fuente) | `font-display`    |
| `--font-dm-sans`     | (fuente) | `font-sans`       |

### 5.2 Clases Tailwind recurrentes

**Contenedor de sección:**

- `mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32`

**Título de página (hero interno):**

- `font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl`

**Título de sección (fondo claro):**

- `font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl`

**Título de sección (fondo oscuro):**

- `font-display text-3xl font-bold text-brand-white md:text-4xl lg:text-5xl`

**Párrafo (fondo claro):**

- `text-base text-muted-foreground lg:text-lg`

**Párrafo (fondo oscuro):**

- `text-base text-brand-white/90 lg:text-lg`

**Línea naranja decorativa:**

- `h-1 rounded-full bg-brand-orange` (+ ancho: `w-10`, `w-12`, `mx-auto`, etc.)

**Botón CTA primario:**

- `min-h-[44px] bg-brand-orange px-8 text-brand-white hover:bg-brand-orange/90`

**Botón secundario (fondo oscuro):**

- `min-h-[44px] border-2 border-brand-white bg-transparent text-brand-white hover:bg-brand-white/70`

### 5.3 Breakpoints

| Nombre   | Min width | Prefijo Tailwind |
|----------|-----------|-------------------|
| Mobile   | 0px       | (base)            |
| sm       | 640px     | `sm:`             |
| md       | 768px     | `md:`             |
| lg       | 1024px    | `lg:`             |
| xl       | 1280px    | `xl:`             |

Desarrollo **mobile first**: estilos base para mobile; ajustes con `sm:`, `md:`, `lg:`.

### 5.4 Rutas del sitio

| Ruta       | Descripción                    |
|------------|--------------------------------|
| `/`        | Home (landing Edificio Magistral) |
| `/nosotros`| Nosotros (en implementación)   |
| `/contacto`| Contacto (pendiente)           |
| Otras      | Libro de reclamaciones, Términos, etc. según directrices |

Actualizar esta tabla al agregar o quitar rutas.

---

## 6. Coherencia visual — resumen

Una ruta se considera **coherente** con el sitio cuando:

1. Usa el mismo **Navbar** y **Footer** que el resto de páginas.
2. Respeta la **paleta** (solo colores `brand-*` y neutros definidos).
3. Usa **Playfair Display** en títulos y **DM Sans** en cuerpo, con los tamaños de la guía.
4. Aplica el **espaciado estándar** de secciones (`py-16 md:py-24 lg:py-32`, `px-4 md:px-8 lg:px-16`).
5. Sigue el **patrón** hero/banner + secciones con alternancia de fondos (oscuro / crema / oscuro).
6. Usa **botones** con los estilos primario (naranja) o secundario (outline) definidos.
7. Es **responsive** (mobile first, áreas de toque ≥ 44px).

Al dudar, comparar con la home y con las secciones detalladas en `directrices_magistral.md`; esta guía es el puente entre esa especificación y cualquier página nueva.
