// Componente que muestra el pie de página del blog.
// Se reutiliza en toda la aplicación para evitar 
// repetir código.

import { FaPinterestP, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>Sígueme en</p>

      <div className="footer-socials">
        <a href="#" aria-label="Pinterest">
          <FaPinterestP />
        </a>

        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>

        <a href="#" aria-label="YouTube">
          <FaYoutube />
        </a>

        <a href="#" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

// Creé un componente Footer para mostrar información al
// final de la página. En este caso incluye enlaces a
// redes sociales y ayuda a mantener una estructura
// consistente en todo el blog. Al convertirlo en
// componente puedo reutilizarlo fácilmente en todas las
// páginas.