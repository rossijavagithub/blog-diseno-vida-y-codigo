// En PostDetail desarrollé la página que muestra el contenido completo de cada artículo. 
// Utilicé useParams para obtener el id desde la URL y useEffect para pedir el artículo 
// correspondiente a MockAPI. Esta página implementa la parte READ del CRUD porque 
// únicamente consulta información. También utilicé useState para guardar el artículo, 
// controlar la carga y gestionar posibles errores. Finalmente mostré la información de 
// forma dinámica utilizando los datos recibidos desde la API.
//=========================================================================================//
// PostDetail permite visualizar un artículo completo:
// • Obtiene el id desde la URL con useParams.
// • Consulta MockAPI usando fetch.
// • Guarda los datos con useState.
// • Ejecuta la petición con useEffect.
// • Muestra imagen, categoría, fecha y contenido.
// • Utiliza React Router para la navegación.
//=========================================================================================//
// useParams: Necesitaba saber qué artículo abrir. El id viene desde la URL y useParams me 
// permite acceder a él para realizar la consulta correcta a MockAPI.
//=========================================================================================//
// No cargue todos los artículos otra vez, porque esta página solo necesita un artículo 
// concreto. Es más eficiente pedir // únicamente el artículo cuyo id coincide con el que 
// viene en la URL.

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API_URL from "../services/api";

function PostDetail() {

  // useParams permite obtener el id que viene desde la URL.
  // Por ejemplo: /post/5 devuelve el valor 5.
  // Lo utilizo para saber qué artículo debo mostrar.
  const { postId } = useParams();

  // Guardamos el artículo que llega desde MockAPI.
  // Comienza en null porque al principio todavía no tenemos datos.
  const [post, setPost] = useState(null);

  // Guardamos si la información sigue cargando.
  // Esto permite mostrar un mensaje mientras llega la respuesta.
  const [loading, setLoading] = useState(true);

  // Guardamos un posible error si falla la petición.
  const [error, setError] = useState("");

  // useEffect se ejecuta cuando se carga la página
  // o cuando cambia el id del artículo.
  // Aquí realizamos la parte READ del CRUD porque solo estamos leyendo información.
  useEffect(() => {

    // Pedimos a MockAPI un único artículo utilizando su id.
    fetch(`${API_URL}/posts/${postId}`)
      .then((response) => {

        // Comprobamos si la respuesta fue correcta.
        // Si el artículo no existe mostramos un error.
        if (!response.ok) {
          throw new Error("No se encontró el artículo.");
        }

        return response.json();
      })
      .then((data) => {

        // Guardamos el artículo recibido en el estado.
        setPost(data);

        // Indicamos que la carga ha terminado.
        setLoading(false);
      })
      .catch(() => {

        // Si ocurre un error mostramos un mensaje al usuario.
        setError("No se pudo cargar el artículo.");

        setLoading(false);
      });

  }, [postId]);

  // Mientras se carga la información mostramos un mensaje temporal.
  if (loading) {
    return (
      <section className="page">
        <p>Cargando artículo...</p>
      </section>
    );
  }

  // Si ocurre un error mostramos el mensaje correspondiente.
  if (error) {
    return (
      <section className="page">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <article className="post-detail">

      {/* Mostramos la imagen principal del artículo */}
      <img
        src={post.image}
        alt={post.title}
        className="post-detail-image"
      />

      <div className="post-detail-content">

        {/* Mostramos la categoría del artículo */}
        <p className="post-detail-category">
          {post.category}
        </p>

        {/* Mostramos el título */}
        <h1>{post.title}</h1>

        {/* Mostramos la fecha */}
        <span>{post.date}</span>

        {/* Mostramos el contenido completo */}
        <p className="post-detail-text">
          {post.content}
        </p>

      </div>

      {/* Navegación sencilla utilizando React Router */}
      <div className="post-navigation">

        {/* Volver al inicio */}
        <Link to="/" className="post-arrow">
          ←
        </Link>

        {/* Ir a una categoría */}
        <Link
          to="/categoria/diseno-grafico"
          className="post-arrow"
        >
          →
        </Link>

      </div>

    </article>
  );
}

export default PostDetail;