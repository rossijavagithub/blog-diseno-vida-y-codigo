// Página de presentación personal.
// Permite mostrar información sobre la autora y el 
// objetivo del blog.

function About() {
  return (
    <section className="about-page">
      <div className="about-main">
        <img
          src="/images/rossana-about.png"
          alt="Rossana Maguiña"
          className="about-photo"
        />

        <div className="about-content">
          <h2 className="about-label">Sobre mí</h2>

          <h1>
            Diseñando mi realidad,
            línea por línea.
          </h1>

          <p>
            Soy Rossana, diseñadora gráfica y estudiante de desarrollo
            frontend. Este blog nace como un espacio personal donde comparto
            diseño, creatividad, aprendizaje y mi camino dentro del mundo del
            código.
          </p>

          <p>
            Me interesa crear experiencias digitales bonitas, claras y
            funcionales, uniendo mi experiencia visual con las herramientas que
            estoy aprendiendo en React.
          </p>
        </div>
      </div>

      <div className="about-cards">
        <article>
          <h2>Diseño</h2>
          <p>
            Vengo del mundo visual, la identidad de marca y la comunicación
            gráfica.
          </p>
        </article>

        <article>
          <h2>Código</h2>
          <p>
            Estoy aprendiendo frontend para transformar ideas en experiencias
            digitales reales.
          </p>
        </article>

        <article>
          <h2>Vida real</h2>
          <p>
            También comparto aprendizajes personales, procesos y pequeños
            descubrimientos.
          </p>
        </article>
      </div>

      <div className="about-quote">
        <p>
          “Este blog representa una nueva etapa: unir lo que ya sé del diseño
          con todo lo que estoy aprendiendo del desarrollo web.”
        </p>
      </div>
    </section>
  );
}

export default About;
// Creé esta página para que los visitantes puedan conocer
// un poco más sobre mí y sobre el propósito del blog. 
// Considero que es una sección importante porque aporta 
// un toque más personal y ayuda a conectar con quien visita 
// la página.