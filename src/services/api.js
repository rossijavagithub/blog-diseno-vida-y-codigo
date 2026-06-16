// Archivo donde guardamos la URL base de MockAPI.
// Así podemos reutilizarla en distintos componentes.
//=========================================================================================//
// MockAPI genera automáticamente un identificador único para 
// cada registro. No es necesario crearlo manualmente. 
// Este identificador se utilizará más adelante para consultar, 
// editar o eliminar posts y categorías.
//=========================================================================================//
// Si la URL cambia en el futuro, solo tengo que modificarla en un 
// único archivo y todos los componentes seguirán funcionando correctamente.
//=========================================================================================//
// Componentes que usa:
// Home.jsx
// CategoryPage.jsx
// PostDetail.jsx
// PostsManager.jsx
//=========================================================================================//
// Todos ellos importan API_URL para realizar peticiones a MockAPI mediante fetch.

const API_URL = "https://6a22db815c610353286a6b57.mockapi.io";

export default API_URL;

// ID en MockAPI

// MockAPI crea el id automáticamente.
// No hay que añadirlo manualmente.
// Cada registro tiene un id único.
// Se utiliza para editar, borrar y consultar datos.