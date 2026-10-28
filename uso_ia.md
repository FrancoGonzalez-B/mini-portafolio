# Uso de inteligencia artificial

## 1. IA usada

Usé **Claude** (Anthropic) como guía paso a paso durante la actividad: para estructurar el proyecto, entender los errores que me aparecieron, y revisar mis estilos CSS.

## 2. Modelo

Claude Sonnet 5.5.

## 3. Prompts realizados

Resumidos con fidelidad, en orden:

1. Adjunté las instrucciones y los requerimientos de la evaluación (PDF) y pedí que me guiara paso a paso. Indiqué que tenía una carpeta llamada `Exercise-Frontend`.
2. Adjunté una captura de mi explorador de archivos y pedí que me guiara según lo que me piden. A partir de los archivos `tsconfig` y `vite.config.ts`, la IA detectó que mi proyecto estaba en TypeScript.
3. Adjunté una captura de `App.tsx` con los imports subrayados en rojo y pregunté qué había pasado y por qué, y dónde abrir la página al final del paso 4. También pedí los comandos para subir mi avance a GitHub.
4. Pegué la salida de la terminal con los errores de git ("no changes added to commit" y "no upstream branch").
5. Pregunté qué más debía hacer según la rúbrica, porque busco la nota máxima.
6. Pegué la salida de `npm run build`.
7. Pegué mi `index.css` y pedí mejorarlo, explicando qué hizo y para qué sirve cada cosa.
8. Pedí el `README.md` y el `uso_ia.md`.

## 4. Outputs

La herramienta me devolvió:

- La estructura de carpetas (`components/` y `pages/`) y los comandos para instalar React Router.
- Código de `main.tsx`, `App.tsx`, `Header`, `Footer`, `Layout`, las cinco páginas, `TarjetaProyecto` y `FormularioContacto`, con tipos de TypeScript.
- Explicaciones de los errores de importación y de git, con los comandos para corregirlos.
- Una versión mejorada de mi `index.css`, con variables, diseño responsive y explicación de cada cambio.
- Una lista de verificación contra la rúbrica y borradores de este archivo y del README.

**Usé:** [La estructura de carpetas, la configuración de rutas, el esqueleto del formulario, los comandos de git, el CSS mejorado].

**Descarté o no usé:** [En si nada].

## 5. Ajustes

Lo que puedo afirmar a partir del trabajo que hicimos:

- Elegí y modifiqué la paleta de colores del sitio (azul oscuro `#03045e`, celeste `#90e0ef`, rojo `#9c0310`) en lugar de usar la paleta de ejemplo que propuso la IA.
- Compilé el proyecto con `npm run build` y confirmé que no tenía errores de TypeScript.

- [Escribi Las pages, componets, textos de Inicio, Sobre mí, tus habilidades con su nivel, tus proyectos reales con sus enlaces.]
- [Cambie mucho de por si de la plnatilla y paginas, ya que estaba hecho en una pagina no en las 5 el esqueleto]
- [Cambie los colores la vrdad le pedi a la ia que me ordenara para poder editar los colores mas facil y agregar mas cosas.]
- [Resolvi los errores apoyandome sanamente en la Ia, por ejemplo nunca le pedi que me de algo solo le dije que me guiara y lo mismo con los errores.]

## 6. Reflexión crítica

[La IA me ayudo bastante en esta actividad sin su guia me ubiese tomado mucho mas tiempo, lo que no entendi desde el comienso fue como hacer el SPA. Aprendi sobre el React Router que cada pagina tiene su propia ruta que Layout e suna ruta padre y que NavLink crea los enlaces que saben cuál página actual es y le agregan la clase active. Tambien sobre los Props que sirven para pasar datos de un componente padre como Layout a un hijo ej le pasa nombre a Header y Footer, gracias a eso un mismo componente se reutiliza con datos distintos en TypeScipt se describe con type Props y con el ? se marca un prop opcional. Sobre el useState aprendi que guarda los datos que cambian y hace que el componente se vuelva a dibujar cuando cambian. Para la proxima vez haria distinto muchas cosas empezando por intentar hacerlo solo ahora que tengo mas conocimiento y apoyarme menos en la IA].