import { useState } from 'react';
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";

// Imports de Material UI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const personas = [
  { nombre: 'Carlos', apellido: 'Gómez', edad: 28 },
  { nombre: 'Sofía', apellido: 'Martínez', edad: 16 }, 
  { nombre: 'Laura', apellido: 'Fernández', edad: 35 },
  { nombre: 'Diego', apellido: 'López', edad: 15 },   
  { nombre: 'Ana', apellido: 'Pérez', edad: 42 },
  { nombre: 'Luis', apellido: 'Ramírez', edad: 21 }
];

function DenseTable() {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650, margin: '2rem auto' }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="tabla de personas">
        <TableHead>
          <TableRow>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell align="right"><b>Apellido</b></TableCell>
            <TableCell align="right"><b>Edad</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personas.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.apellido}</TableCell>
              <TableCell align="right">{row.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// CAMBIO IMPORTANTE: La función ahora se llama Tablas para coincidir con el archivo
function Tablas() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          {/* Asegúrate de que estas rutas ../assets/ sean correctas en tu PC */}
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Sección de Tablas</h1>
          <p>
            Editando <code>src/pages/Tablas.jsx</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section id="table-section">
        <DenseTable />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Documentación</h2>
          <p>Enlaces rápidos de interés</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://mui.com/" target="_blank" rel="noreferrer">
                Material UI Docs
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

// CAMBIO IMPORTANTE: Exportamos Tablas por defecto
export default Tablas;