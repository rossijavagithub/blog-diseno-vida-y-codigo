// Importamos React para poder trabajar con componentes
import React from "react";

// Importamos ReactDOM para mostrar nuestra aplicación en el navegador
import ReactDOM from "react-dom/client";

// Importamos BrowserRouter para poder navegar entre páginas sin recargar la web
import { BrowserRouter } from "react-router-dom";

// Importamos el componente principal de la aplicación
import App from "./App";

// Importamos los estilos generales del proyecto
import "./index.css";

// Buscamos el elemento root del index.html
// y renderizamos toda la aplicación dentro de él
ReactDOM.createRoot(document.getElementById("root")).render(

  // BrowserRouter envuelve toda la aplicación
  // para que React Router funcione en cualquier página
  <BrowserRouter>

    {/* App es el componente principal donde se gestionan las rutas */}
    <App />

  </BrowserRouter>
);

// Esta parte es para que React Router 
// funcione en toda la app.
// Este archivo es el punto de entrada de la aplicación. 
// Aquí importo React, los estilos generales y el 
// componente App. También utilizo BrowserRouter porque 
// el proyecto necesita varias páginas con React Router. 
// Finalmente, renderizo toda la aplicación dentro del 
// elemento root que se encuentra en el index.html.