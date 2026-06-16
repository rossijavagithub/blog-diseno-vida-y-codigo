// Panel de administración del blog.
// Desde aquí se gestionarán los artículos y las categorías.

function Admin() {
  return (
    <section className="page">
      <h1>Panel de administración</h1>
      <p>Aquí se gestionarán posts y categorías.</p>
    </section>
  );
}

export default Admin;

// Creé esta página para centralizar la gestión del blog. 
// Desde aquí la administradora podrá crear, editar y 
// eliminar categorías y artículos. De esta forma separo 
// claramente la parte pública de la parte de administración.