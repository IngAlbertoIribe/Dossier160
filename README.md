# Dossier160
Formulario inteligente (SPA) para captura de perfil profesional. Creado con HTML, CSS y Vanilla JS. Cuenta con lógica condicional, consumo de API para códigos postales, almacenamiento en LocalStorage y exportación directa a PDF y WhatsApp. App 100% front-end (sin backend), ideal para desplegarse fácilmente en GitHub Pages.


Formulario de captura de perfil profesional y generación de expedientes. Esta es una **Single-Page Application (SPA)** diseñada para ejecutarse íntegramente en el lado del cliente, garantizando la privacidad de los datos mediante almacenamiento local.

## 🚀 Características Técnicas

*   **Sin Backend (100% Client-Side):** Todos los datos ingresados se guardan en el `localStorage` del navegador. Cero peticiones a bases de datos externas para garantizar privacidad.
*   **Motor de Lógica Condicional (Branching):** El DOM se actualiza dinámicamente. Las preguntas se omiten o se muestran dependiendo de las respuestas anteriores (ej. ocultar campos de cónyuge si el estado civil es 'Soltero').
*   **Consumo de API Externa:** Integración con la API pública de *Zippopotam* (`api.zippopotam.us`) para la búsqueda automatizada de códigos postales y autocompletado de colonias/estados en México.
*   **Exportación de Datos:** 
    *   Conversión del DOM a un formato amigable para impresión (`@media print`) permitiendo guardar en PDF de forma nativa.
    *   Parseo del objeto JSON a texto codificado por URL (`encodeURIComponent`) para enviar el expediente directamente mediante la API de WhatsApp.
*   **Validaciones Frontend:** Expresiones regulares (RegEx) para validación de correos electrónicos y validación de fechas (pasado/futuro) usando el objeto `Date` nativo de JavaScript.

## 🛠️ Stack Tecnológico

*   **HTML5** (Semántica y estructura)
*   **CSS3** (Diseño responsivo, animaciones de modales, media queries para impresión)
*   **Vanilla JavaScript** (Motor lógico, manipulación del DOM, Fetch API)

## ⚙️ Uso / Despliegue

Al no requerir servidor web (Node, PHP, etc.), la aplicación está lista para funcionar en cualquier entorno estático.

1. Clonar el repositorio.
2. Abrir `index.html` en cualquier navegador web moderno.
3. Para despliegue en la nube, es 100% compatible con **GitHub Pages**, Vercel o Netlify.
