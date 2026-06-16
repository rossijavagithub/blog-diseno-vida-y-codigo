// En Header desarrollé el sistema principal de navegación del blog. Utilicé React Router 
// mediante NavLink para moverme entre páginas sin recargar el navegador. También 
// implementé un menú hamburguesa responsive utilizando useState para controlar si el menú
//  está abierto o cerrado. Para mejorar la experiencia de usuario, el menú se cierra 
// automáticamente al seleccionar cualquier enlace.
//=========================================================================================//
// Header es el componente encargado de la navegación:
// • Utiliza React Router mediante NavLink.
// • Contiene el logo principal.
// • Permite acceder a todas las categorías.
// • Incluye un menú hamburguesa para móviles.
// • Usa useState para abrir y cerrar el menú.
// • Utiliza React Icons para los iconos visuales.
//=========================================================================================//
// Usé NavLink y no Html, porque NavLink trabaja con React Router y permite navegar entre páginas sin recargar 
// completamente la aplicación, haciendo la experiencia más rápida.
//=========================================================================================//
// Usé useState, porque necesitaba controlar si el menú hamburguesa estaba abierto o 
// cerrado. Cada vez que cambia el estado, React vuelve a renderizar el componente 
// mostrando el menú correcto.
//=========================================================================================//
// Hice el menú Hamburguesa, porque el proyecto debía ser responsive. En pantallas 
// pequeñas el menú tradicional ocupa demasiado espacio y el menú hamburguesa mejora la 
// navegación en móviles y tablets.

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMugHot, FaBars, FaTimes } from "react-icons/fa";

function Header() {

  // useState controla si el menú hamburguesa está abierto o cerrado.
  // Comienza en false porque inicialmente el menú móvil está oculto.
  const [menuOpen, setMenuOpen] = useState(false);

  // Esta función cierra el menú cuando la usuaria pulsa cualquier enlace.
  // Así mejoramos la experiencia en dispositivos móviles.
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">

      {/* 
        Logo principal del blog.
        Utilizo NavLink para volver al inicio sin recargar la página.
      */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Rossana Maguiña <span className="logo-dot">.</span>
      </NavLink>

      {/* 
        Botón hamburguesa.
        Cambia automáticamente entre abrir y cerrar el menú.
        FaBars muestra el icono de menú.
        FaTimes muestra el icono de cerrar.
      */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 
        Cambiamos la clase dinámicamente según el estado menuOpen.
        Esto permite mostrar u ocultar el menú en dispositivos móviles.
      */}
      <nav className={menuOpen ? "nav nav-open" : "nav"}>

        {/* 
          Enlace a la categoría Diseño Gráfico.
          Utilicé un icono decorativo para reforzar la identidad visual del blog.
        */}
        <NavLink
          to="/categoria/diseno-grafico"
          className="nav-design-link"
          onClick={closeMenu}
        >
          <FaMugHot className="nav-icon" />
          Diseño Gráfico
        </NavLink>

        {/* Enlaces principales de navegación */}
        <NavLink
          to="/categoria/frontend"
          onClick={closeMenu}
        >
          Frontend
        </NavLink>

        <NavLink
          to="/categoria/vida-real"
          onClick={closeMenu}
        >
          Vida Real
        </NavLink>

        <NavLink
          to="/categoria/inspiracion"
          onClick={closeMenu}
        >
          Inspiración
        </NavLink>

        <NavLink
          to="/categoria/recursos"
          onClick={closeMenu}
        >
          Recursos
        </NavLink>

        {/* 
          Página Sobre mí.
          La separé visualmente del resto del menú para darle más importancia.
        */}
        <NavLink
          to="/sobre-mi"
          className="nav-about"
          onClick={closeMenu}
        >
          Sobre mí
        </NavLink>

      </nav>

    </header>
  );
}

export default Header;

//Creé un componente Header para mostrar el menú 
// principal de la aplicación. Utilicé NavLink de React 
// Router porque permite navegar entre las diferentes 
// páginas sin recargar la web. También lo elegí porque 
// me ayuda a identificar visualmente qué sección está 
// activa en cada momento.