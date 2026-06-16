// En PostForm creé un formulario reutilizable para crear y editar artículos. Utilicé 
// useState para controlar cada campo del formulario y useEffect para rellenar los 
// campos cuando se pulsa el botón Editar. Si hay un post en edición, el formulario 
// llama a updatePost; si no hay post en edición, llama a addPost. Esta lógica permite 
// usar el mismo formulario para CREATE y UPDATE dentro del CRUD.
//=========================================================================================//
// PostForm no se conecta directamente con MockAPI. Recibe las funciones addPost y 
// updatePost por props desde PostsManager. Así el formulario solo se encarga de recoger 
// los datos y enviarlos al componente padre, manteniendo el código más ordenado.
//=========================================================================================//
// Gestiona el formulario. Usé useState para los inputs. onSubmit controla el envío.
// Envía datos mediante props, limpia los campos al terminar. Formulario para crear 
// artículos. Envía los datos al componente padre mediante props.

import { useEffect, useState } from "react";

function PostForm({ addPost, updatePost, editingPost, cancelEdit }) {
  // Guardamos el título que la usuaria escribe en el formulario.
  const [title, setTitle] = useState("");

  // Guardamos la categoría del artículo.
  const [category, setCategory] = useState("");

  // Guardamos la ruta de la imagen del post.
  const [image, setImage] = useState("");

  // Guardamos la descripción corta que se verá en la card.
  const [excerpt, setExcerpt] = useState("");

  // Guardamos la fecha del artículo.
  const [date, setDate] = useState("");

  // useEffect se ejecuta cuando cambia editingPost.
  // Lo usamos para rellenar el formulario automáticamente cuando pulsamos "Editar".
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title || "");
      setCategory(editingPost.category || "");
      setImage(editingPost.image || "");
      setExcerpt(editingPost.excerpt || "");
      setDate(editingPost.date || "");
    }
  }, [editingPost]);

  // Esta función limpia todos los campos del formulario.
  // La usamos después de crear, actualizar o cancelar.
  function clearForm() {
    setTitle("");
    setCategory("");
    setImage("");
    setExcerpt("");
    setDate("");
  }

  // handleSubmit se ejecuta cuando enviamos el formulario.
  // Aquí decidimos si estamos creando un post nuevo o editando uno existente.
  function handleSubmit(event) {
    event.preventDefault();

    // Creamos un objeto con la información escrita en el formulario.
    // Este objeto será enviado a MockAPI desde PostsManager.
    const postData = {
      title,
      category,
      image,
      excerpt,
      date,
    };

    // Si editingPost tiene datos, significa que estamos editando.
    // Por eso llamamos a updatePost.
    if (editingPost) {
      updatePost(editingPost.id, postData);
    } else {
      // Si editingPost está vacío, significa que estamos creando.
      // Por eso llamamos a addPost.
      addPost(postData);
    }

    // Después de crear o actualizar, limpiamos el formulario.
    clearForm();
  }

  // Esta función cancela el modo edición.
  // Primero limpia el formulario y luego avisa a PostsManager.
  function handleCancel() {
    clearForm();
    cancelEdit();
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>{editingPost ? "Editar artículo" : "Crear nuevo artículo"}</h2>

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Ruta de imagen"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        required
      />

      <textarea
        placeholder="Descripción corta"
        value={excerpt}
        onChange={(event) => setExcerpt(event.target.value)}
        rows="4"
        required
      />

      <input
        type="text"
        placeholder="Fecha (ej: 12 de Mayo, 2024)"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        required
      />

      <button type="submit">
        {editingPost ? "Actualizar artículo" : "Crear artículo"}
      </button>

      {editingPost && (
        <button
          type="button"
          className="cancel-button"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      )}
    </form>
  );
}

export default PostForm;