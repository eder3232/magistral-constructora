# Plan de implementación — Libro de Reclamaciones Virtual

Ruta: `/libro-reclamaciones`  
Referencias: `directriz-implementacion.md`, `guia_visual_magistral.md`.

---

## Resumen de decisiones

| Tema | Decisión |
|------|----------|
| Email receptor | Soporte (`SITE_CONTACT.emailSoporte`), no atención al cliente |
| Email emisor | `eldebar.dk@gmail.com` por ahora; cambiar a cuenta oficial más adelante (ver `TODO.md`) |
| Tipo de documento | Selector DNI/CE + campo numérico |
| Código de registro | `RECL-${Date.now()}` en la constancia al consumidor |
| Enlace en footer | Añadido a "Contacto" |

---

## Pasos de implementación

### Paso 1 — Estructura de rutas

- Renombrar la carpeta `app/libro-reclamaciones.tsx` a `app/libro-reclamaciones` para que la URL sea `/libro-reclamaciones`.
- Mover `directriz-implementacion.md` y `page.tsx` dentro de `app/libro-reclamaciones` (el `.tsx` en el nombre de carpeta hace que la ruta sea incorrecta).
- Crear la carpeta `app/api/reclamos` y el archivo `app/api/reclamos/route.ts` para el endpoint POST.

---

### Paso 2 — Tipos y validación (Zod)

- Crear un esquema Zod para el formulario:
  - **Consumidor:** nombre completo, tipo doc (enum: DNI | CE), número documento (string numérico, longitudes según tipo), teléfono, correo.
  - **Registro:** tipo (Reclamo | Queja), fecha del incidente, descripción (mín. 20 caracteres), pedido o solución esperada.
- Exportar el tipo TypeScript inferido del esquema para usar en el frontend y en la API.

---

### Paso 3 — API Route `/api/reclamos`

- Aceptar solo método `POST`.
- Parsear y validar el body con el esquema Zod; si falla, responder 400 con mensajes de error.
- Leer de `@/lib/site-config`: `SITE_CONTACT.emailSoporte` (destino interno) y datos de la empresa para los correos.
- Leer de `process.env`: `EMAIL_USER`, `EMAIL_PASS` para Nodemailer.
- Generar código de registro: `RECL-${Date.now()}`.
- Enviar **correo 1** (interno): para `emailSoporte`, asunto con tipo y código, cuerpo con todos los datos del reclamo; usar `replyTo: correo del consumidor`.
- Enviar **correo 2** (constancia): para el correo del consumidor, asunto de constancia, cuerpo con texto legal (directriz §7), código, fecha/hora, plazo 15 días hábiles, datos de contacto.
- En caso de error de Nodemailer: responder 500 con mensaje genérico.
- En éxito: responder 200 con JSON, por ejemplo `{ success: true, codigo: "RECL-..." }`.

---

### Paso 4 — Página `/libro-reclamaciones` (layout y hero)

- Incluir `Navbar` y `Footer` (misma estructura que Nosotros/Contacto).
- Definir `metadata`: title y description para SEO.
- Hero de página interna según guía visual:
  - `min-h-[45vh]`, fondo `bg-brand-navy-dark`, título centrado, línea naranja decorativa.
  - Título: "Libro de reclamaciones" (o similar).
  - Subtítulo breve (información legal / propósito).

---

### Paso 5 — Sección de información legal

- Una sección en fondo claro (`bg-brand-cream`) con el texto obligatorio (Código de Protección al Consumidor, plazo de 15 días hábiles, datos personales, etc.) según la directriz.
- Tipografía y espaciado según guía visual.

---

### Paso 6 — Formulario (React Hook Form + Zod)

- Usar `useForm` con `zodResolver` y el esquema del Paso 2.
- Campos:
  - Nombre completo (input texto).
  - Tipo de documento: select o radio DNI / CE.
  - Número de documento: input numérico (validación según DNI 8 dígitos / CE según reglas que se definan).
  - Teléfono (input tel).
  - Correo electrónico (input email).
  - Tipo de registro: Reclamo / Queja (select o radio).
  - Fecha del incidente (input date o date picker).
  - Descripción (textarea, mín. 20 caracteres).
  - Pedido o solución esperada (textarea).
- Mostrar errores por campo (`formState.errors`).
- Botón enviar: deshabilitado mientras `isSubmitting`, texto tipo "Enviar reclamo".
- Al enviar: `POST` a `/api/reclamos` con los datos; no recargar la página.

---

### Paso 7 — Estilos del formulario (guía visual)

- Contenedor de sección: `mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 lg:px-16 lg:py-32`.
- Inputs y labels con clases de la guía (fondo claro: `text-foreground`, `text-muted-foreground`).
- Botón primario: `Button` de shadcn con `bg-brand-orange text-brand-white hover:bg-brand-orange/90`, mínimo 44px de altura.
- Reutilizar componentes de `@/components/ui` (Input, Label, Select, Textarea, etc.) y ajustar con Tailwind de la paleta.

---

### Paso 8 — Confirmación en pantalla

- Tras respuesta 200 del API: ocultar formulario y mostrar bloque de confirmación en la misma página con:
  - "Su reclamo ha sido registrado correctamente."
  - "Hemos enviado una constancia a su correo electrónico."
  - "Será atendido en un plazo máximo de 15 días hábiles."
- Opcional: mostrar el código de registro devuelto por el API.

---

### Paso 9 — Revisión y checklist

- Probar en móvil (formulario usable, botones ≥ 44px).
- Verificar que el correo llega a `emailSoporte` y que el consumidor recibe la constancia.
- Comprobar que el enlace "Libro de reclamaciones" en el footer lleva a `/libro-reclamaciones`.
- Confirmar que variables `EMAIL_USER` y `EMAIL_PASS` están en `.env.local` y no en el código.
- Revisar que textos legales y plazo de 15 días figuren en página y en el correo al consumidor.

---

## Orden sugerido de desarrollo

1. Paso 1 (rutas y carpeta).  
2. Paso 2 (Zod + tipos).  
3. Paso 3 (API Route y Nodemailer).  
4. Pasos 4 y 5 (página, hero, información legal).  
5. Pasos 6 y 7 (formulario y estilos).  
6. Paso 8 (confirmación).  
7. Paso 9 (pruebas y checklist).
