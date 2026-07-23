# Brief de Proyecto — Taquería Los Soles (Steak & Grill)

Este documento es el informe de referencia para el desarrollo del sitio web de **Taquería Los Soles**. Complementa el prompt inicial ya entregado para adaptar la plantilla base al negocio — úsalo como fuente de datos y lineamientos de marca.

## 1. Contexto del proyecto

- **Tipo de proyecto:** Landing page (sitio de una sola página).
- El desarrollo se realiza sobre una **plantilla base de HTML ya existente**. No se debe modificar la estructura de secciones de la plantilla; solo adaptar contenido, estilo y assets al negocio.
- Ya se entregó un prompt inicial con las instrucciones para adaptar la plantilla a este negocio.

## 2. Información del negocio

Extraída directamente de los archivos en `imagenes/` (logo y flyer de menú):

- **Nombre:** Taquería Los Soles
- **Especialidad / línea:** Steak & Grill
- **Slogan:** "El taco de tu día"
- **Teléfono:** 56 3364 9600

### Menú y precios

**Tacos de cortes** — $40 c/u (con queso $45 c/u), tortillas hechas a mano, se pueden combinar a gusto:
- Arrachera
- Costilla
- Bisteck
- Ribeye
- Hígado
- Chistorra
- Chorizo argentino
- Longaniza
- Chorizo verde

**Kekas** — $50 c/u. Tortilla de harina con tu carne favorita u combinadas.

**Quesos fundidos** — $200. De la carne de elección o combinado. Ideal para 1–2 personas.

**Volcanes** — $45.

**Bebidas (refrescos)** — $25 c/u: Coca-Cola, Coca-Cola sin azúcar, Sprite, Fanta.

**Paquetes de carnes asadas:**

| Paquete | Personas | Incluye | Precio |
|---|---|---|---|
| Paquete 1 | 2 a 3 | 5 cortes a elegir completos + Chistorra | $350 |
| Paquete 2 | 4 a 7 | 9 cortes a elegir + Chorizo argentino y Chistorra | $650 |
| Paquete 3 | 10 a 18 | 18 cortes a elegir + Chorizo verde, Longaniza, Argentino y Chistorra | $1,200 |

Todos los paquetes incluyen: salsas, limones, tortillas de maíz y harina, frijoles y cebollitas.

> Cualquier dato no incluido aquí (dirección, horarios, redes sociales, etc.) no estaba disponible en el material proporcionado y debe omitirse.

## 3. Branding e identidad visual

Paleta extraída directamente del logo (`imagenes/logo.jpeg`):

| Rol | Color | HEX |
|---|---|---|
| Primario / fondo de marca | Crema | `#F7EBDD` |
| Secundario | Rojo guinda | `#901711` |
| Acento | Dorado / naranja | `#DB8C13` |
| Texto / contraste | Negro carbón | `#0D0D0C` |

**Tipografía sugerida:**
- Encabezados / hero: **Poppins** o **Montserrat** (pesos Bold/ExtraBold) — para lograr el acabado limpio y corporativo requerido.
- Cuerpo de texto: **Inter** o **Work Sans**.
- Acento tipográfico opcional (uso muy puntual, evocando el trazo pintado a mano del logo): **Caveat** o **Kalam** — solo para detalles decorativos, no para bloques de texto.

**Identidad visual:** fusión mexicana-premium. El logo combina un sol estilizado, trazos de pincel y un taco como ícono central; esa energía debe traducirse al sitio de forma refinada (líneas finas doradas, buen espacio en blanco, fotografía de producto de alta calidad) en lugar de un estilo casero o artesanal literal.

## 4. Estilo visual obligatorio

- Estilo **premium, enterprise y corporativo de marca**.
- Nivel **big tech**: elegante y minimalista.

## 5. Efectos y animaciones requeridos

- Efectos visuales y **animaciones de scroll**.
- **Pantalla de carga (preloader)** con spinner + logo del negocio.
- **Animaciones en el título del hero**: efecto máquina de escribir, cambio de color en las letras u otros efectos tipográficos.

## 6. Instrucciones sobre assets

- El logo (`imagenes/logo.jpeg`) viene **con fondo**: debe removerse el fondo antes de usarlo en el sitio (exportar como PNG/SVG transparente).
- El archivo `imagenes/info.jpeg` es un flyer de menú: úsalo únicamente como **fuente de datos** (precios, productos, combos) para construir el contenido del sitio en HTML/CSS. No se debe insertar el flyer como imagen final en la página.

## 7. Nota para el desarrollador

Puedes iterar sobre el proyecto con Claude Code dándole instrucciones las veces que sea necesario hasta lograr el resultado deseado.

## 8. Checklist

- [x] Adaptar la plantilla base con la información del negocio (nombre, teléfono, menú y precios).
- [x] Remover el fondo del logo y exportarlo en formato transparente.
- [x] Aplicar la paleta de colores de marca (`#F7EBDD`, `#901711`, `#DB8C13`, `#0D0D0C`).
- [x] Implementar la tipografía sugerida (encabezados y cuerpo de texto).
- [x] Lograr un acabado visual premium, enterprise y minimalista.
- [x] Implementar animaciones de scroll.
- [x] Implementar preloader con spinner + logo.
- [x] Implementar animación del título del hero (máquina de escribir / cambio de color u otro efecto tipográfico).
- [x] Iterar con Claude Code hasta alcanzar el resultado final deseado.

## 9. Entregables finales

- `index.html`, `style.css`, `main.js` — sitio final, listo para desplegar (abrir `index.html` directamente o servirlo con cualquier hosting estático).
- `logo.png` — copia del logo sin fondo (`logo-removebg-preview (1).png`) con nombre limpio, usado en todo el sitio.
- Secciones incluidas: preloader, navbar con CTA de WhatsApp, hero, barra de estadísticas, menú con filtros, paquetes para parrillada, por qué elegirnos, cómo pedir, galería, contacto (formulario → WhatsApp) y footer.
- No se incluyeron dirección, horarios, mapa ni reseñas de clientes por no estar disponibles en el material proporcionado (ver nota en la sección 2).
