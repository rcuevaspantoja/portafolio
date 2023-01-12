import './App.css';
import React from 'react';
import Navbar from './componentes/navbar/Navbar'
import {
  Route,
  Routes,
} from "react-router-dom";
import Acerca from './componentes/Acerca/Acerca'
import Curriculum from './componentes/Curriculum/Curriculum'
import Proyectos from './componentes/Proyectos/Proyectos'

function App() {
  return (    
    
/*    <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>

            <Route path="/">
              <div className='todo-contenido'>
                <Acerca />
                <Proyectos />
                <Curriculum />
              </div>
            </Route>

          </Routes>  

        </div>       
      </BrowserRouter> */




  <>
  
    <Navbar/>

    <div className="App">
      <Routes>
        <Route path={"/"} element={<Acerca />} />
      </Routes>
    </div>  
      
  </>


  );
}
export default App;
