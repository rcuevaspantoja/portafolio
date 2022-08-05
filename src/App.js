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

          <Acerca />
          <Proyectos />
          <Curriculum />
          
      </BrowserRouter>
	  </div>
  );
}
export default App;
