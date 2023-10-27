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

  return (

      <div className="App">
        <Navbar />

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
          <Route
            path={"/Proyectos"}
            element={
                <ProyectosPersonales />
            }
          />
          <Route
            path={"/resume"}
            element={
                <Resume />
            }
          />
        </Routes>

      <Footer />
    </div>
  );
}
export default App;
