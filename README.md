
# VIDA, DISEÑO Y CÓDIGO

## Descripción del proyecto

Vida, Diseño y Código es un blog personal desarrollado con React. El objetivo del proyecto es compartir artículos relacionados con diseño gráfico, desarrollo frontend, inspiración, recursos creativos y experiencias personales.

La aplicación consume datos desde MockAPI y permite gestionar artículos mediante un CRUD completo (crear, leer, editar y eliminar).

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- React
- React Router
- Fetch API
- MockAPI
- useState
- useEffect

---

# Estructura del proyecto

src

- assets
- components
  - Footer.jsx
  - Header.jsx
  - Layout.jsx
  - NewsletterForm.jsx
  - PostCard.jsx
  - PostForm.jsx
- context
- data
- pages
  - About.jsx
  - Admin.jsx
  - CategoryPage.jsx
  - Home.jsx
  - Login.jsx
  - PostDetail.jsx
  - PostsManager.jsx
- services
- App.jsx
- main.jsx
- index.css

---

# Desarrollo del proyecto

## 1. Creación del proyecto

Se creó una aplicación React utilizando Vite como herramienta de desarrollo.

Posteriormente se organizó la estructura en carpetas para separar componentes, páginas, servicios y recursos gráficos.

---

## 2. Configuración de rutas

Se instaló React Router para gestionar la navegación.

Las rutas principales son:

- Inicio
- Categorías
- Detalle de artículo
- Sobre mí
- Gestión de artículos

---

## 3. Creación de componentes reutilizables

Se desarrollaron componentes independientes para evitar repetir código.

### Header

Contiene el logo, navegación principal y menú hamburguesa responsive.

### Footer

Contiene enlaces a redes sociales.

### NewsletterForm

Formulario reutilizable mostrado en todas las páginas.

### PostCard

Muestra cada artículo utilizando props.

### PostForm

Formulario utilizado para crear y editar artículos.

---

## 4. Diseño visual

Se diseñó una interfaz inspirada en blogs creativos modernos.

Elementos principales:

- Hero principal
- Tarjetas de artículos
- Página Sobre mí
- Newsletter
- Footer

El diseño utiliza Flexbox y Media Queries para adaptarse a distintos tamaños de pantalla.

---

## 5. Conexión con MockAPI

Se utilizó MockAPI como base de datos externa.

Los artículos se obtienen mediante Fetch.

Se creó un archivo api.js para almacenar la URL principal de la API.

---

## 6. Gestión del estado

Se utilizaron:

- useState
- useEffect

### useState

Permite almacenar:

- Posts
- Estados de carga
- Errores
- Datos de formularios

### useEffect

Permite cargar automáticamente la información al abrir la aplicación.

---

## 7. Implementación del CRUD

La gestión de contenidos se realiza desde PostsManager.jsx.

### CREATE

Crear nuevos artículos.

### READ

Mostrar artículos almacenados en MockAPI.

### UPDATE

Editar artículos existentes.

### DELETE

Eliminar artículos.

Todas las operaciones están conectadas directamente con MockAPI.

---

## 8. Sistema de categorías

Las categorías disponibles son:

- Diseño Gráfico
- Frontend
- Vida Real
- Inspiración
- Recursos

CategoryPage.jsx permite mostrar únicamente los artículos de la categoría seleccionada.

---

## 9. Página detalle

PostDetail.jsx muestra el contenido completo de cada artículo.

Incluye:

- Imagen principal
- Título
- Fecha
- Contenido completo
- Navegación entre artículos

---

## 10. Página Sobre mí

About.jsx presenta información personal y profesional relacionada con diseño gráfico y desarrollo frontend.

---

## 11. Diseño responsive

La aplicación se adapta a:

- Ordenador
- Tablet
- Móvil

Se utilizaron Media Queries y un menú hamburguesa para dispositivos pequeños.

---

## Resultado final

El proyecto permite:

- Visualizar artículos
- Filtrar por categorías
- Leer artículos completos
- Gestionar contenidos mediante CRUD
- Navegar entre páginas
- Visualizar newsletter en todo el sitio
- Utilizar el sitio desde distintos dispositivos

---

## Conclusión

Vida, Diseño y Código es un blog personal desarrollado con React que integra React Router, MockAPI, Fetch, componentes reutilizables y un CRUD completo para la gestión de contenidos. El proyecto aplica los conocimientos adquiridos durante el bootcamp y presenta una estructura organizada, escalable y responsive.

