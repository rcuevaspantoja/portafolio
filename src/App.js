import './App.css';
import React from 'react';
import Navbar from './componentes/navbar/Navbar'
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Acerca from './componentes/Acerca/Acerca'
import Curriculum from './componentes/Curriculum/Curriculum'
import Proyectos from './componentes/Proyectos/Proyectos'

function App() {
  return (
    <div className="App">
      
      <Router>
          <Navbar/>

          <Routes>
            <Route path="/"  />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/acerca" element={ <Acerca /> } />
            <Route path="/curriculum" element={<Curriculum />} />  
          </Routes>
      </Router>
	  </div>
  );
}

export default App;
