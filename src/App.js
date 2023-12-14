import "./App.css";
import React from "react";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Acerca from "./componentes/Acerca/Acerca";
import Experiencias from "./componentes/Experiencia/Experiencias";
import ProyectosPersonales from "./componentes/Proyectos/Proyectos";
import Resume from "./componentes/Resume/Resume";

function App() {
  const alertas = () => {
    alert(
      "Este portafolio no está actualizado y no refleja mis últimos conocimientos en programacion. En este momento se encuentra en desarrollo una versión mejorada del mismo. Puedes echarle un vistado a mi progeso en el siguiente  -Rodolfo 11-Dec-23"
    );

    if (
      window.confirm(
        "Esta página de momento aún sirve para ver mis otros proyectos y trabajos, el 20 de Diciembre o antes será lanzado mi otro portal. Acepta si quieres ser dirigido al portal nuevo que sigue en construcción o cancela para mantenerte en este."
      )
    ) {
      window.location.href = "https://portafolio-2-six.vercel.app/Inicio";
    }
  };

  return (
    <div className="App">
      <Navbar />
      {alertas()}
      <Routes>
        <Route path="/" element={<Navigate to="/Acerca" />} />
        <Route
          path={"/Acerca"}
          element={
            <>
              <Acerca />
              <Experiencias />
            </>
          }
        />
        <Route path={"/Proyectos"} element={<ProyectosPersonales />} />
        <Route path={"/resume"} element={<Resume />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
