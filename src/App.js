import './App.css';
import React from 'react';
import Navbar from './componentes/navbar/Navbar'
import {  BrowserRouter,  Routes,  Route, Navigate } from "react-router-dom";
import Acerca from './componentes/Acerca/Acerca'
import Curriculum from './componentes/Curriculum/Curriculum'
import Proyectos from './componentes/Proyectos/Proyectos'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

          <Navbar/>

          <Routes>
            <Route path="/" element={ <Navigate to="/acerca" /> } />
            <Route path="/proyectos" element={<Proyectos/>} />
            <Route path="/acerca" element={ <Acerca/> } />
            <Route path="/curriculum" element={<Curriculum/>} />  
          </Routes>
          
      </BrowserRouter>
	  </div>
  );
}

export default App;
