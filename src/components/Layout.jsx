// En Layout centralicé los componentes que se repiten en toda la aplicación. 
// Utilicé Outlet de React Router para mostrar dinámicamente cada página según la ruta 
// seleccionada. Gracias a esta estructura puedo reutilizar Header, Newsletter y Footer 
// sin tener que escribirlos en cada componente, manteniendo el código más limpio, 
// organizado y fácil de mantener.
//=========================================================================================//
//Layout es la estructura principal del proyecto:
// • Contiene Header.
// • Contiene Newsletter.
// • Contiene Footer.
// • Utiliza Outlet para mostrar cada página.
// • Evita repetir código.
// • Mejora la organización de la aplicación.
//=========================================================================================//
// Creé Layout, porque Header, Newsletter y Footer aparecen en todas las páginas. Si los colocara dentro
// de cada página tendría mucho código repetido.
//=========================================================================================//
// Outlet es un componente de React Router que funciona como un espacio dinámico donde 
// se renderiza la página correspondiente según la ruta activa.
//=========================================================================================//
// Permite reutilizar componentes comunes, mantener el proyecto más ordenado y facilitar 
// futuras modificaciones.
//=========================================================================================//
// Importamos Outlet desde React Router.
// Outlet funciona como un espacio reservado donde React Router
// mostrará la página correspondiente según la ruta activa.
import { Outlet } from "react-router-dom";

// Importamos los componentes que se repetirán en todo el sitio.
// Gracias a Layout evitamos escribirlos en cada página.
import Header from "./Header";
import Footer from "./Footer";
import NewsletterForm from "./NewsletterForm";

function Layout() {
  return (
    <>
      {/* 
        Header aparece en todas las páginas del proyecto.
        Contiene el logo y el menú de navegación.
      */}
      <Header />

      {/* 
        Outlet es el lugar donde React Router renderiza
        la página correspondiente a la ruta actual.
        
        Por ejemplo:
        "/" → Home
        "/sobre-mi" → About
        "/post/1" → PostDetail
      */}
      <main>
        <Outlet />
      </main>

      {/* 
        Newsletter reutilizable.
        Lo coloqué aquí para que aparezca automáticamente
        en todas las páginas del blog.
      */}
      <NewsletterForm />

      {/* 
        Footer visible en todo el sitio.
        Contiene información final y enlaces sociales.
      */}
      <Footer />
    </>
  );
}

export default Layout;