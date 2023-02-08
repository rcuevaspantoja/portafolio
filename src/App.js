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
import {useSpring, animated } from 'react-spring'

function App() {

  const springCurriculum2 = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1000} ,
    delay: 600,   
    })  

  return (      
  <>
    <Navbar/>
    <animated.div style={springCurriculum2} className="App">
      <Routes>
        {/*Se desplaza desde el path / al Acerca donde se encuentra la página */}
        <Route path='/' element={ <Navigate to="/Acerca" /> }/>
        <Route path={"/Acerca"} element={<><Acerca /><Curriculum /><Experiencias /></>} />
        <Route path={"/proyectos"} element={<ProyectosPersonales />} />
      </Routes>
    </animated.div>      
  </>
  );
}
export default App;
