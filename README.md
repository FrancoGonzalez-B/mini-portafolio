# Mini portafolio — [Franco Antonio González Beneventti]

Portafolio personal desarrollado con **React, TypeScript, Vite y React Router** para la Evaluación N°3 de Desarrollo de Frontend (Ingeniería Civil Informática, Instituto Tecnológico UC Temuco).

El sitio tiene cinco secciones: **Inicio, Sobre mí, Habilidades, Proyectos y Contacto**, con un header de navegación, un footer con mi nombre y el año, y un formulario de contacto con validación.

## Requisitos

- Node.js 18 o superior
- npm (viene con Node.js)

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Luego abre la dirección que aparece en la terminal (normalmente http://localhost:5173).

Para comprobar que el proyecto compila sin errores de TypeScript:

```bash
npm run build
```

## Rutas

| Ruta            | Página       | Qué muestra                                                        |
| --------------- | ------------ | ------------------------------------------------------------------ |
| `/`             | Inicio       | Mi nombre, mi rol y una invitación a recorrer el sitio             |
| `/sobre-mi`     | Sobre mí     | Qué estudio, qué me interesa y hacia dónde quiero ir               |
| `/habilidades`  | Habilidades  | Lista de herramientas y lenguajes con su nivel                     |
| `/proyectos`    | Proyectos    | Proyectos con título, descripción y enlace al repositorio          |
| `/contacto`     | Contacto     | Formulario con nombre, correo y mensaje (valida y confirma envío)  |

El orden del menú es: Inicio · Sobre mí · Habilidades · Proyectos · Contacto.

## Estructura de carpetas

```
src/
├── components/
│   ├── Header.tsx              # Nombre y los cinco enlaces (NavLink)
│   ├── Footer.tsx              # Nombre y año, visible en todas las páginas
│   ├── Layout.tsx              # Header + contenido de la ruta (Outlet) + Footer
│   ├── TarjetaProyecto.tsx     # Tarjeta que recibe título, descripción y enlace por props
│   └── FormularioContacto.tsx  # Formulario con useState, validación y confirmación
├── pages/
│   ├── Inicio.tsx
│   ├── SobreMi.tsx
│   ├── Habilidades.tsx
│   ├── Proyectos.tsx
│   └── Contacto.tsx
├── App.tsx                     # Define las cinco rutas dentro del Layout
├── main.tsx                    # Punto de entrada; envuelve la app en BrowserRouter
└── index.css                   # Estilos globales (variables de color, responsive)
```

## Cómo funciona

- **Navegación:** `App.tsx` declara las cinco rutas con React Router. `Layout` es una ruta padre sin `path`; las páginas son sus hijas y se dibujan dentro de él mediante `<Outlet />`.
- **Props:** `Layout` entrega el nombre a `Header` y `Footer`; `Proyectos` entrega título, descripción y enlace a cada `TarjetaProyecto`.
- **Estado:** `FormularioContacto` usa tres `useState`: `datos` (lo que escribe el usuario), `errores` (mensajes de validación) y `enviado` (para mostrar la confirmación).
- **Validación del formulario:** nombre y mensaje son obligatorios; el correo es obligatorio y debe cumplir el formato `algo@algo.algo`. Si todo está correcto, se muestra un mensaje de confirmación y se limpia el formulario.
- **Estilos:** CSS global con variables (`:root`) para la paleta, `NavLink` marca la página activa con la clase `active`, y una media query adapta el header a pantallas pequeñas.

## Dificultades encontradas y cómo las resolví

1. **Errores de importación en `App.tsx` (subrayados en rojo).** Había creado los archivos de `pages/` vacíos, y un archivo vacío no exporta ningún componente. Lo resolví escribiendo en cada página una función mínima con su `export default`.
2. **`git commit` decía "no changes added to commit".** Me faltaba ejecutar `git add .` antes del commit: `add` marca los archivos y `commit` guarda lo marcado.
3. **`git push` decía "no upstream branch".** Mi rama `main` local aún no estaba enlazada con GitHub. Lo resolví con `git push -u origin main`.
4. **`Index css` mas que nada decorar ** La ia me ayudo paso a paso para que quedara decente.

## Autor

[Franco Antonio González Beneventti] — Ingeniería Civil En Informática, Universidad Catolica de Temuco.
