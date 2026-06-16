// Página de inicio de sesión.
// Permite acceder a la parte privada y de administración 
// del blog.

function Login() {
  return (
    <section className="page">
      <h1>Login</h1>
      <p>Formulario de acceso para la parte privada del blog.</p>
    </section>
  );
}

export default Login;

// Creé esta página para gestionar el acceso a la parte 
// privada del blog. Desde aquí la administradora puede 
// iniciar sesión y acceder al panel de gestión, mientras 
// que los usuarios normales solo pueden visualizar el 
// contenido público.