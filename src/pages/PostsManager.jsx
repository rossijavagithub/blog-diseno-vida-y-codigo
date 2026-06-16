// En PostsManager implementé el CRUD completo porque esta página funciona como zona de 
// gestión de contenidos del blog. Aquí se centraliza la lógica para crear, leer, editar 
// y borrar artículos conectados a MockAPI. Usé useEffect para cargar los posts al entrar 
// en la página, useState para guardar los posts, el estado de carga, los errores y el 
// post que se está editando. Las funciones addPost, updatePost y deletePost usan fetch 
// con los métodos POST, PUT y DELETE.
//=========================================================================================//
// PostsManager es el componente donde está la gestión principal del contenido. Lo separé 
// de la parte pública del blog para que las páginas visibles mantengan un diseño limpio, 
// mientras que el CRUD queda en una página específica para administrar artículos.
//=========================================================================================//
// GET trae los posts desde MockAPI.
// POST crea un nuevo post.
// useEffect carga los datos al inicio.
// useState guarda posts, loading y error.
// PostForm envía los datos mediante props.

import { useEffect, useState } from "react";
import API_URL from "../services/api";
import PostForm from "../components/PostForm";

function PostsManager() {
  // Guardamos todos los posts que llegan desde MockAPI.
  // Esta parte permite mostrar el listado de artículos en la página de gestión.
  const [posts, setPosts] = useState([]);

  // Guardamos el post que la usuaria quiere editar.
  // Si editingPost tiene información, el formulario cambia de "crear" a "editar".
  const [editingPost, setEditingPost] = useState(null);

  // Guardamos si los datos todavía están cargando.
  const [loading, setLoading] = useState(true);

  // Guardamos un posible mensaje de error si falla alguna petición a MockAPI.
  const [error, setError] = useState("");

  // useEffect se ejecuta cuando se carga la página.
  // Aquí hacemos el READ del CRUD, porque pedimos todos los posts guardados.
  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los artículos.");
        setLoading(false);
      });
  }, []);

  // CREATE:
  // Esta función crea un nuevo post en MockAPI.
  // La usamos aquí porque PostsManager es la página encargada de gestionar el contenido.
  function addPost(newPost) {
    fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((createdPost) => {
        // Añadimos el nuevo post al estado para que aparezca en pantalla sin recargar.
        setPosts([...posts, createdPost]);
      })
      .catch(() => {
        setError("No se pudo crear el artículo.");
      });
  }

  // DELETE:
  // Esta función borra un post concreto usando su id.
  // Después actualizamos el estado quitando ese post del array.
  function deletePost(id) {
    fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const filteredPosts = posts.filter((post) => post.id !== id);
        setPosts(filteredPosts);
      })
      .catch(() => {
        setError("No se pudo borrar el artículo.");
      });
  }

  // Esta función activa el modo edición.
  // Guardamos el post seleccionado en editingPost y lo enviamos al formulario.
  function startEdit(post) {
    setEditingPost(post);
  }

  // Esta función cancela la edición.
  // Volvemos a dejar editingPost en null para regresar al modo crear.
  function cancelEdit() {
    setEditingPost(null);
  }

  // UPDATE:
  // Esta función actualiza un post existente en MockAPI.
  // Usamos PUT porque queremos reemplazar la información del artículo seleccionado.
  function updatePost(id, updatedPost) {
    fetch(`${API_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json())
      .then((data) => {
        // Recorremos los posts con map.
        // Si encontramos el post editado, lo reemplazamos por la nueva versión.
        const updatedPosts = posts.map((post) =>
          post.id === id ? data : post
        );

        setPosts(updatedPosts);

        // Cerramos el modo edición después de actualizar.
        setEditingPost(null);
      })
      .catch(() => {
        setError("No se pudo actualizar el artículo.");
      });
  }

  return (
    <section className="manager-page">
      <div className="manager-heading">
        <p>Gestión de contenido</p>

        <h1>Gestionar artículos</h1>

        <p>
          Desde esta sección puedo crear, editar, borrar y ver los posts
          guardados en MockAPI.
        </p>
      </div>

      {/* 
        PostForm recibe las funciones del CRUD por props.
        Esto permite que el formulario pueda crear o editar posts,
        pero la lógica principal se mantiene en PostsManager.
      */}
      <PostForm
        addPost={addPost}
        updatePost={updatePost}
        editingPost={editingPost}
        cancelEdit={cancelEdit}
      />

      {loading && <p>Cargando artículos...</p>}

      {error && <p>{error}</p>}

      <div className="manager-list">
        {/* 
          READ:
          Mostramos todos los posts guardados en MockAPI usando map.
          Cada post se pinta como una tarjeta sencilla dentro del gestor.
        */}
        {posts.map((post) => (
          <article className="manager-card" key={post.id}>
            <img src={post.image} alt={post.title} />

            <div>
              <p>{post.category}</p>
              <h3>{post.title}</h3>
              <span>{post.date}</span>

              <div className="manager-actions">
                {/* 
                  Al pulsar Editar, guardamos este post en editingPost.
                  Así el formulario se rellena con los datos actuales.
                */}
                <button onClick={() => startEdit(post)}>Editar</button>

                {/* 
                  Al pulsar Borrar, enviamos el id del post.
                  Ese id permite eliminar exactamente ese artículo de MockAPI.
                */}
                <button
                  onClick={() => deletePost(post.id)}
                  className="delete-button"
                >
                  Borrar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PostsManager;