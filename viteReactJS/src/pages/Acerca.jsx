import { useAlumnoContext } from "../context/AlumnoContext";

function Acerca() {
  // Extraemos el objeto "alumno" del contexto
  const { alumno } = useAlumnoContext();

  return (
    <div>
      <h1>Acerca de mí</h1>
      <ul>
        <li><strong>Nombre:</strong> {alumno.nombre}</li>
        <li><strong>Carrera:</strong> {alumno.carrera}</li>
        <li><strong>Grupo:</strong> {alumno.grupo}</li>
        <li><strong>Semestre:</strong> {alumno.semestre}</li>
      </ul>
    </div>
  );
}

export default Acerca;