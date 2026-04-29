import { createContext, useContext, useState } from "react";

// 1. Creamos el contexto
const AlumnoContext = createContext();

// 2. Creamos el Provider que envolverá la aplicación
export function AlumnoProvider({ children }) {
  // Puedes cambiar estos datos por los tuyos
  const [alumno] = useState({
    nombre: "JESUS BENJAMIN SANDOVAL MORALES",
    carrera: "LICENCIATURA EN INFORMATICA",
    grupo: "4-1",
    semestre: "8vo",
  });

  return (
    <AlumnoContext.Provider value={{ alumno }}>
      {children}
    </AlumnoContext.Provider>
  );
}

// 3. Custom hook para usar el contexto más fácilmente
export function useAlumnoContext() {
  return useContext(AlumnoContext);
}