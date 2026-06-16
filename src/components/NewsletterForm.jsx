// En NewsletterForm desarrollé un formulario sencillo de suscripción. Utilicé useState 
// para controlar el valor del email y los mensajes que se muestran al usuario. También 
// validé que el campo no estuviera vacío antes de procesar el formulario. Este 
// componente es reutilizable y aparece en todas las páginas del blog gracias al 
// componente Layout.
//=========================================================================================//
// NewsletterForm es un formulario reutilizable: 
// • Utiliza useState.
// • Controla el valor del input.
// • Valida que el email no esté vacío.
// • Muestra mensajes dinámicos.
// • Aparece en todas las páginas gracias a Layout.
// • Mejora la experiencia de usuario.
// useState guarda el email.
// onChange actualiza el input.
// onSubmit controla el envío.
// preventDefault evita recargar la página.
// localStorage guarda el email.
// El input se limpia después de enviar.
//=========================================================================================//
// Formulario de suscripción al blog.
// Guarda el email en localStorage y limpia el input después de enviarlo.

import { useState } from "react";

function NewsletterForm() {

  // Guardamos el email que escribe la usuaria.
  // useState permite actualizar el valor mientras se escribe.
  const [email, setEmail] = useState("");

  // Guardamos un mensaje de confirmación o error.
  // Este mensaje se mostrará después de enviar el formulario.
  const [message, setMessage] = useState("");

  function handleSubmit(event) {

    // Evitamos que el formulario recargue la página.
    // Así mantenemos la experiencia SPA de React.
    event.preventDefault();

    // Validamos que el campo no esté vacío.
    if (email === "") {
      setMessage("Por favor, escribe tu email.");
      return;
    }

    // Simulamos el envío del formulario.
    // En una versión futura podría conectarse a una API o backend real.
    localStorage.setItem("newsletterEmail", email);

    // Mostramos un mensaje de confirmación.
    setMessage("Gracias por suscribirte al blog.");

    // Limpiamos el campo después del envío.
    setEmail("");
  }

  return (
    <section className="newsletter">

      <div>
        <p className="newsletter-label">
          Ideas que valen tu tiempo.
        </p>

        <p>
          Recibe recursos, ideas y reflexiones directo en tu correo.
          Sin spam, solo valor.
        </p>
      </div>

      {/* 
        Formulario de suscripción.
        Recoge el email de la usuaria.
      */}
      <form
        className="newsletter-form"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">
          Suscribirme →
        </button>
      </form>

      {/* Icono decorativo */}
      <img
        src="/images/icono-newsletter.png"
        alt=""
        className="newsletter-icon"
      />

      {/* 
        Mostramos el mensaje únicamente cuando existe contenido.
      */}
      {message && (
        <p className="newsletter-message">
          {message}
        </p>
      )}

    </section>
  );
}

export default NewsletterForm;