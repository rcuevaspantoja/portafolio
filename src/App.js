import './App.css';
import React from 'react';
import Navbar from './componentes/navbar/Navbar'
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Acerca from './componentes/Acerca/Acerca'
import Curriculum from './componentes/Curriculum/Curriculum'
import Experiencias from './componentes/Experiencia/Experiencias'
import ProyectosPersonales from './componentes/Proyectos/Proyectos'

function App() {
  return (    
    
  <>
    <Navbar/>
    <div className="App">
      <Routes>
        {/*Se desplaza desde el path / al Acerca donde se encuentra la página */}
        <Route path='/' element={ <Navigate to="/Acerca" /> }/>
        <Route path={"/Acerca"} element={<><Acerca /><Curriculum /><Experiencias /></>} />
        {/* <Route path={"/proyectos"} element={<ProyectosPersonales />} /> */}
      </Routes>
    </div>      
  </>
  );
}
export default App;
