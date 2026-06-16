import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../services/api";
import PostCard from "../components/PostCard";

//En CategoryPage utilicé la parte READ del CRUD porque esta página solo necesita leer 
// información desde MockAPI. Primero pido todos los posts y las categorías con fetch, 
// luego uso el slug que viene desde la URL con useParams para saber qué categoría está 
// visitando la usuaria. Después filtro los posts con filter y los muestro en pantalla 
// usando map y el componente reutilizable PostCard.

function CategoryPage() {
  // Recogemos el slug de la categoría desde la URL.
  // Por ejemplo: /categoria/frontend devuelve "frontend".
  const { categoryName } = useParams();

  // Guardamos los posts que llegan desde MockAPI.
  // Esta parte corresponde al READ del CRUD, porque solo estamos leyendo datos.
  const [posts, setPosts] = useState([]);

  // Guardamos las categorías que llegan desde MockAPI.
  // Las usamos para mostrar el nombre correcto de la categoría en pantalla.
  const [categories, setCategories] = useState([]);

  // Guardamos si los datos todavía están cargando.
  const [loading, setLoading] = useState(true);

  // Guardamos un posible mensaje de error si falla la conexión con MockAPI.
  const [error, setError] = useState("");

  // useEffect se ejecuta cuando se carga la página.
  // Lo usamos aquí porque necesitamos pedir datos externos a MockAPI.
  useEffect(() => {
    // READ de posts:
    // Pedimos todos los artículos para después filtrarlos por categoría.
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

    // READ de categorías:
    // Pedimos las categorías para poder mostrar el nombre correcto según el slug.
    fetch(`${API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch(() => {
        setError("No se pudieron cargar las categorías.");
      });
  }, []);

  // Buscamos la categoría actual comparando el slug de MockAPI con el slug de la URL.
  // Así sabemos qué título mostrar en la página.
  const selectedCategory = categories.find(
    (category) => category.slug === categoryName
  );

  // Filtramos los posts según la categoría seleccionada.
  // Utilizamos filter porque tenemos un array de posts y solo queremos mostrar
  // los que pertenecen a la categoría actual.
  const filteredPosts = posts.filter(
    (post) => post.categorySlug === categoryName
  );

  // Si los datos están cargando, mostramos un mensaje temporal.
  if (loading) {
    return (
      <section className="page">
        <p>Cargando artículos...</p>
      </section>
    );
  }

  // Si hay error, mostramos un mensaje claro.
  if (error) {
    return (
      <section className="page">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="category-page">
      <div className="category-heading">
        <p>
          Inicio &gt; {selectedCategory ? selectedCategory.name : "Categoría"}
        </p>

        <h1>{selectedCategory ? selectedCategory.name : "Categoría"}</h1>

        <p>
          Explora los artículos relacionados con{" "}
          {selectedCategory ? selectedCategory.name : "esta categoría"}.
        </p>
      </div>

      {filteredPosts.length === 0 && (
        <p>No hay artículos disponibles en esta categoría.</p>
      )}

      <div className="post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;