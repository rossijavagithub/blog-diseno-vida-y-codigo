// Actualicé las rutas del proyecto porque finalmente no habrá login ni panel privado. 
// En su lugar añadí una página de gestión de posts, donde se trabajará el CRUD con MockAPI. 
// Mantengo React Router para organizar las diferentes páginas del blog sin recargar el navegador.

// Elimina Login y Admin.
// Mantiene Home, categorías, detalle y Sobre mí.
// Añade Gestionar Posts.
// React Router organiza la navegación.
// El CRUD se hará desde /gestionar-posts.

// Importamos las herramientas de React Router para crear las rutas
import { Routes, Route } from "react-router-dom";

// Importamos el layout principal de la aplicación
import Layout from "./components/Layout";

// Importamos las páginas del proyecto
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import PostsManager from "./pages/PostsManager";

function App() {
  return (
    <Routes>
      {/* Layout contiene elementos comunes como Header y Footer */}
      <Route path="/" element={<Layout />}>
        {/* Página principal */}
        <Route index element={<Home />} />

        {/* Página de categorías */}
        <Route path="categoria/:categoryName" element={<CategoryPage />} />

        {/* Página de detalle de cada artículo */}
        <Route path="post/:postId" element={<PostDetail />} />

        {/* Página sobre mí */}
        <Route path="sobre-mi" element={<About />} />

        {/* Página para crear, editar y borrar posts */}
        <Route path="gestionar-posts" element={<PostsManager />} />
      </Route>
    </Routes>
  );
}

export default App;

// Este archivo organiza la navegación principal del blog.
// Utilizo React Router para separar las páginas públicas
// y la página donde se gestionarán los artículos con MockAPI.