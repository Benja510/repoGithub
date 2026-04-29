import PerfilResumen from "../components/PerfilResumen";

function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <p>Bienvenido al sistema web de gestión.</p>
      
      {/* Renderizamos el componente que consume el contexto */}
      <PerfilResumen />
    </div>
  );
}

export default Home;