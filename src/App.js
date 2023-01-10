import './App.css';
import React from 'react';
import Navbar from './componentes/navbar/Navbar'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Acerca from './componentes/Acerca/Acerca'
import Curriculum from './componentes/Curriculum/Curriculum'
import Proyectos from './componentes/Proyectos/Proyectos'

function App() {
  return (    
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>

            <Route path="/acerca">
              <div className='todo-contenido'>
                <Acerca />
                <Proyectos />
                <Curriculum />
              </div>
            </Route>

          </Routes>  

        </div>       
      </BrowserRouter>


  );
}
export default App;
