// En Home.jsx construí la página principal del blog. Utilicé useEffect para pedir los 
// posts a MockAPI cuando carga la página y useState para guardar los datos, el estado de 
// carga y posibles errores. En esta página solo aplico la parte READ del CRUD, porque la 
// Home se encarga de mostrar artículos, no de gestionarlos. También uso slice para mostrar 
// solo algunos posts destacados y map para pintar cada artículo usando el componente 
// reutilizable PostCard.
//=========================================================================================//
// Home es la página de entrada del blog. Muestra el hero principal, una selección de 
// artículos destacados y una sección breve Sobre mí. Los posts vienen desde MockAPI 
// mediante fetch y se muestran dinámicamente con map.
//=========================================================================================//
// useEffect pide los datos al cargar la página.
// fetch trae posts y categorías desde MockAPI.
// .then procesa la respuesta.
// .catch muestra errores si algo falla.
// useState guarda posts, categorías, loading y error.
// filter permite filtrar por categoría.
//  map pinta las cards en pantalla.

import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import API_URL from "../services/api";

function Home() {
  // Guardamos los posts que llegan desde MockAPI.
  // Al usar useState, React puede actualizar la pantalla cuando cambian los datos.
  const [posts, setPosts] = useState([]);

  // Guardamos si la información todavía está cargando.
  // Esto permite mostrar un mensaje mientras llega la respuesta de la API.
  const [loading, setLoading] = useState(true);

  // Guardamos un posible mensaje de error.
  // Lo usamos si falla la conexión con MockAPI.
  const [error, setError] = useState("");

  // useEffect se ejecuta cuando carga la página principal.
  // Lo usamos aquí porque necesitamos pedir datos externos a MockAPI.
  useEffect(() => {
    // READ:
    // Pedimos los posts guardados en MockAPI para mostrarlos en la Home.
    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los posts.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="intro">Hola, soy Rossana</p>

          <h1>
            Vida, Diseño <br /> y <span>Código.</span>
          </h1>

          <p>
            Diseñadora y desarrolladora frontend. Creo experiencias digitales
            que conectan, inspiran y dejan huella.
          </p>

          <div className="hero-buttons">
            <a href="#posts" className="primary-button">
              Ver mis proyectos →
            </a>

            <a href="/sobre-mi" className="text-button">
              Sobre mí →
            </a>
          </div>
        </div>

        <div className="hero-image-box">
          <img
            src="/images/rossana-hero.png"
            alt="Rossana Maguiña"
            className="hero-photo"
          />
        </div>
      </section>

      <section id="posts" className="posts-section">
        <h2>Últimos artículos</h2>

        {loading && <p>Cargando artículos...</p>}

        {error && <p>{error}</p>}

        <div className="post-grid">
          {/* 
            Mostramos solo los 4 primeros posts en la Home.
            Uso slice para que la página principal no se vea saturada.
            Después uso map para pintar una card por cada post.
          */}
          {posts.slice(0, 4).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="home-about">
        <img
          src="/images/rossana-about.png"
          alt="Rossana Maguiña"
          className="home-about-image"
        />

        <div className="home-about-text">
          <p className="intro">Sobre mí</p>

          <h2>
            Diseñando mi realidad, <br />
            línea por línea.
          </h2>

          <p>
            Soy una apasionada del diseño, el código y las historias que
            conectan. Creo que la tecnología y la creatividad pueden cambiar el
            mundo.
          </p>

          <a href="/sobre-mi">Conóceme mejor →</a>
        </div>
      </section>
    </>
  );
}

export default Home;