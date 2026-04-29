import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AlumnoProvider } from "./context/AlumnoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* El Provider envuelve a toda la App */}
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  </React.StrictMode>
);