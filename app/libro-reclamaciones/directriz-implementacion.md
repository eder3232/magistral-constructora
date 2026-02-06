# 📘 Guía de Implementación — Libro de Reclamaciones Virtual  
**Magistral Constructora (Next.js + React Hook Form)**

Esta guía describe cómo implementar un **Libro de Reclamaciones Virtual funcional**, conforme a normativa peruana (INDECOPI), usando una solución simple basada en:

- Formulario web con React Hook Form  
- API Route en Next.js  
- Envío automático por correo al área responsable  
- Confirmación inmediata al consumidor (constancia por email)  
- Sin almacenamiento interno por el momento (solución mínima viable)

---

## ✅ Objetivo del Sistema

Permitir que cualquier usuario pueda registrar un:

- **Reclamo** (disconformidad con el servicio)
- **Queja** (malestar por atención recibida)

Y que dicha información:

1. Llegue automáticamente al personal responsable de la empresa  
2. Genere una constancia inmediata para el consumidor  

Cumpliendo con:

- Confirmación de recepción  
- Plazo legal de respuesta (15 días hábiles)  
- Evidencia mínima de registro mediante correo automático  

---

# 1. Estructura General Requerida

La implementación debe incluir tres partes principales:

---

## 1. Página pública

Ruta:

- `/libro-reclamaciones`

Contiene:

- Información legal obligatoria
- Formulario virtual
- Mensaje de confirmación en pantalla

---

## 2. Endpoint backend interno

Ruta:

- `/api/reclamos`

Responsable de:

- Recibir datos del formulario
- Validar información
- Enviar correos automáticos (empresa + consumidor)

---

## 3. Canal de notificación (destino del reclamo)

Cada reclamo o queja enviada debe llegar automáticamente al área responsable:

### 📩 Correo receptor oficial

- `atencionalcliente@magistralconstructora.com`

### 👤 Área responsable

- **Atención al Cliente — Magistral Constructora**

Este correo será el canal oficial donde el personal recibirá, gestionará y responderá los reclamos dentro del plazo legal.

---

# 2. Requisitos del Formulario

El formulario debe implementarse con **React Hook Form**, asegurando:

- Validación clara
- Manejo correcto de errores
- Experiencia rápida y profesional

---

## Campos obligatorios mínimos

### Datos del consumidor

- Nombre completo  
- Documento (DNI/CE)  
- Teléfono  
- Correo electrónico  

---

### Detalle del registro

- Tipo: Reclamo o Queja  
- Fecha del incidente  
- Descripción completa  
- Pedido o solución esperada  

---

## Buenas prácticas UX

- Mostrar mensajes de error en cada campo
- Confirmar envío exitoso
- Bloquear botón mientras se envía
- Evitar recargas de página

---

# 3. Validación y Cumplimiento Legal

El formulario debe garantizar:

- No se envían registros incompletos
- El consumidor puede identificarse correctamente
- El reclamo queda registrado formalmente

Recomendaciones:

- Longitud mínima en descripción (ej: 20 caracteres)
- Tipo de documento validado
- Correo válido

---

# 4. Flujo Técnico del Envío

El sistema debe funcionar así:

1. Usuario completa formulario
2. React Hook Form valida campos
3. Usuario presiona **Enviar Reclamo**
4. Frontend envía datos vía `POST`
5. API Route recibe y procesa
6. Sistema envía correo automático a Atención al Cliente  
7. Sistema envía correo de constancia al consumidor  
8. Usuario ve mensaje de confirmación en pantalla

---

# 5. Implementación del Backend (API Route)

El endpoint `/api/reclamos` debe encargarse de:

### Responsabilidades

- Validar datos recibidos
- Generar un mensaje estructurado
- Enviar correos automáticos
- Retornar respuesta JSON al frontend

---

## Reglas mínimas del endpoint

- Solo aceptar método `POST`
- Rechazar campos vacíos
- Manejar errores con status 500
- Confirmar éxito con status 200

---

# 6. Configuración del Correo (Nodemailer)

Para evitar sobreingeniería, se recomienda:

---

## Cuenta emisora técnica (quien envía)

Crear una cuenta tipo:

- `magistralconstructora@gmail.com`

Esta cuenta se usará únicamente para enviar correos automáticos desde el sistema.

---

## Cuenta receptora oficial (empresa)

El correo que recibe los reclamos será:

- `atencionalcliente@magistralconstructora.com`

---

## App Password obligatorio

Gmail requiere generar un **App Password**, ya que no permite contraseñas normales.

Pasos:

1. Activar verificación en 2 pasos
2. Crear App Password
3. Guardarlo como variable segura

---

## Variables de entorno

Se deben almacenar en `.env.local`:

- Email emisor
- App password

Nunca deben estar en el código.

---

# 7. Correos Automáticos Obligatorios

Al enviar un reclamo, el sistema debe generar **dos correos**:

---

## 1. Correo interno para Magistral Constructora

Destino:

- `atencionalcliente@magistralconstructora.com`

Contenido mínimo:

- Tipo de registro (Reclamo/Queja)
- Nombre del consumidor
- Documento
- Teléfono y correo
- Descripción completa
- Fecha del incidente

Este correo será el registro principal para el personal.

---

## 2. Correo de constancia para el consumidor (fundamental)

Destino:

- Correo ingresado por el usuario en el formulario

Objetivo:

- Confirmar que el reclamo fue registrado exitosamente
- Brindar tranquilidad al consumidor
- Cumplir con evidencia mínima del registro

Contenido recomendado:

- Mensaje de confirmación
- Número o código simple de registro (opcional)
- Fecha y hora del envío
- Plazo legal de respuesta: 15 días hábiles
- Datos de contacto de la empresa

Ejemplo de texto:

📌 Aviso Legal (Versión Formal)

En cumplimiento de lo establecido en el Código de Protección y Defensa del Consumidor (Ley N.º 29571) y el Reglamento del Libro de Reclamaciones, se informa al consumidor que:

La presentación de un reclamo o queja a través del presente Libro de Reclamaciones Virtual constituye un medio formal para dejar constancia de su disconformidad respecto a los productos o servicios ofrecidos por Magistral Constructora.

La formulación del reclamo o queja no impide al consumidor acudir a otras vías de solución de controversias, ni constituye requisito previo para interponer una denuncia ante el INDECOPI.

Magistral Constructora dará respuesta al reclamo o queja presentado en un plazo máximo de quince (15) días hábiles, conforme a la normativa vigente.

Los datos personales consignados serán tratados de manera confidencial y utilizados únicamente para la gestión y atención del reclamo o queja, de acuerdo con la Ley de Protección de Datos Personales (Ley N.º 29733).

---

## Recomendación importante

Agregar `replyTo` con el correo del consumidor en el correo interno, para que Atención al Cliente pueda responder directamente.

---

# 8. Constancia PDF (opcional recomendado a futuro)

Aunque inicialmente se enviará constancia por correo, una mejora posterior sería:

- Generar automáticamente un PDF con el detalle del reclamo
- Adjuntarlo al correo del consumidor
- Permitir descarga inmediata desde la web

Esto elevaría el cumplimiento y profesionalismo del sistema.

---

# 9. Confirmación en Pantalla

Luego del envío, la UI debe mostrar:

✅ “Su reclamo ha sido registrado correctamente”  
✅ “Hemos enviado una constancia a su correo electrónico”  
✅ “Será atendido en un plazo máximo de 15 días hábiles”  

---

# 10. Sin Almacenamiento Interno (MVP)

Por ahora, el sistema no almacenará reclamos en base de datos.

La evidencia mínima quedará respaldada mediante:

- Correo recibido por Atención al Cliente  
- Correo de constancia enviado al consumidor  

En una etapa posterior se podrá implementar almacenamiento formal si es requerido.

---

# 12. Checklist Final para Producción

Antes de publicar, verificar:

✅ Página accesible desde footer  
✅ Formulario funcional en móvil  
✅ Correo llega correctamente a Atención al Cliente  
✅ Consumidor recibe constancia automática  
✅ Confirmación visible en pantalla  
✅ Plazo legal indicado  
✅ Datos del proveedor visibles  
✅ Variables de entorno configuradas  

---

# 🎯 Resultado Esperado

Con esta implementación, Magistral Constructora tendrá un Libro de Reclamaciones Virtual:

- Simple
- Legalmente válido
- Profesional
- Con constancia inmediata al consumidor
- Sin sobreingeniería
- Fácil de mantener

---


