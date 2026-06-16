// En PostCard desarrollé un componente reutilizable para mostrar artículos del blog. 
// Utilicé props para recibir la información de cada post y así poder reutilizar la 
// misma estructura en distintas páginas. También utilicé Link de React Router para 
// navegar al detalle del artículo sin recargar la aplicación. Gracias a esta solución 
// evité duplicar código y mantuve una estructura más limpia y escalable.
//=========================================================================================//
// PostCard es un componente reutilizable:
// • Recibe datos mediante props.
// • Muestra imagen, título, resumen y fecha.
// • Utiliza Link de React Router.
// • Se reutiliza en varias páginas.
// • Evita duplicar código.
// • Mejora la organización del proyecto.

import { Link } from "react-router-dom";

function PostCard({ post }) {

  // Recibimos un objeto post mediante props.
  // Gracias a esto el componente puede reutilizarse
  // para mostrar cualquier artículo del blog.
  return (
    <article className="post-card">

      {/* Imagen principal del artículo */}
      <img
        src={post.image}
        alt={post.title}
        className="post-card-image"
      />

      <div className="post-card-content">

        {/* Título del artículo */}
        <h3>{post.title}</h3>

        {/* Descripción corta o resumen */}
        <p className="post-excerpt">
          {post.excerpt}
        </p>

        {/* 
          Link de React Router.
          Permite abrir el detalle del artículo
          sin recargar toda la aplicación.
        */}
        <Link
          to={`/post/${post.id}`}
          className="read-more"
        >
          Leer más →
        </Link>

        {/* Fecha de publicación */}
        <p className="post-date">
          {post.date}
        </p>

      </div>

    </article>
  );
}

export default PostCard;