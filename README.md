# Portfolio — David Jiménez

Portfolio personal de un desarrollador fullstack, construido con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS v4**. Es una landing de una sola página con secciones de presentación, sobre mí, proyectos, habilidades y contacto.

## Demo en vivo

<!-- Reemplaza esta URL por la de tu despliegue una vez publicado en Vercel -->
🔗 **[Ver demo en vivo](https://portfolio-coderblockch.vercel.app)**

## Capturas

<!-- Agrega una captura o GIF de la página para que los reclutadores la vean sin clonar el repo -->
<!-- ![Portfolio](public/screenshot.png) -->

## Stack técnico

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + TypeScript
- **Estilos:** Tailwind CSS v4
- **Tipografía:** Geist (`next/font`)
- **Linting:** ESLint (`eslint-config-next`)

## Estructura

```
app/
├── layout.tsx          # Layout raíz y metadata (SEO)
├── page.tsx            # Composición de la página
├── globals.css         # Estilos globales / tema
└── components/
    ├── Navbar.tsx      # Navegación fija con anclas
    ├── Hero.tsx        # Sección principal
    ├── About.tsx       # Sobre mí
    ├── Projects.tsx    # Galería de proyectos
    ├── Skills.tsx      # Habilidades técnicas
    └── Contact.tsx     # Contacto y redes
```

## Desarrollo local

Requisitos: **Node.js 20+**.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador. La página se actualiza automáticamente al editar los archivos.

## Scripts disponibles

| Script          | Descripción                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con recarga en vivo   |
| `npm run build` | Compila la versión de producción             |
| `npm run start` | Sirve la build de producción                 |
| `npm run lint`  | Ejecuta ESLint sobre el proyecto             |

## Despliegue en Vercel

La forma más sencilla de publicar este portfolio es con [Vercel](https://vercel.com) (los creadores de Next.js). Con un clic se clona el repo en tu cuenta y queda en línea:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/coderblockch/portfolio)

Pasos manuales alternativos:

1. Crea una cuenta en [vercel.com](https://vercel.com) e inicia sesión con GitHub.
2. **Add New… → Project** e importa el repositorio `coderblockch/portfolio`.
3. Vercel detecta Next.js automáticamente; no necesitas cambiar la configuración.
4. Pulsa **Deploy**. Cada `push` a `main` volverá a desplegar automáticamente.

## Licencia

Distribuido bajo la licencia MIT. Consulta el archivo [`LICENSE`](LICENSE) si está disponible.
