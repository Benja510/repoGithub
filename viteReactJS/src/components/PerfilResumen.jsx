import { useAlumnoContext } from "../context/AlumnoContext";

function PerfilResumen() {
  const { alumno } = useAlumnoContext();

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", marginBottom: "15px" }}>
      <h2>Resumen del perfil</h2>
      <p>🎓 {alumno.nombre} - {alumno.carrera}</p>
    </div>
  );
}

export default PerfilResumen;