// Datos simulados de los artículos del blog.
// Se utilizarán durante la fase inicial antes de conectar
// la API.

const posts = [
  {
    id: 1,
    title: "De la idea al diseño: mi proceso creativo",
    category: "Diseño Gráfico",
    categorySlug: "diseno-grafico",
    date: "12 de Mayo, 2024",
    imageClass: "image-design",
  },
  {
    id: 2,
    title: "Mis 10 tips de productividad en código",
    category: "Frontend",
    categorySlug: "frontend",
    date: "8 de Mayo, 2024",
    imageClass: "image-code",
  },
  {
    id: 3,
    title: "Lo que aprendí viajando sola",
    category: "Vida Real",
    categorySlug: "vida-real",
    date: "3 de Mayo, 2024",
    imageClass: "image-life",
  },
  {
    id: 4,
    title: "Inspiración en todas partes",
    category: "Inspiración",
    categorySlug: "inspiracion",
    date: "28 de Abril, 2024",
    imageClass: "image-inspiration",
  },
  {
    id: 5,
    title: "Mis recursos favoritos para crear mejor",
    category: "Recursos",
    categorySlug: "recursos",
    date: "20 de Abril, 2024",
    imageClass: "image-resources",
  },
];

export default posts;

//Para comprobar que el filtro funcionaba correctamente, 
// añadí artículos de prueba en todas las categorías. 
// De esta forma pude verificar que cada sección muestra 
// únicamente los posts que le corresponden.