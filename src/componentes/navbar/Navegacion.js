import React from 'react'
import { createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



export const Navegacion = () =>{

    const theme = createTheme({
      typography: {
        fontFamily: [
          'Varela Round',
          'sans-serif',
        ].join(','),
      },});


    return (
      <>

        <div className='Navegacion'>
          <Link  theme={theme} 
            style={{ fontSize: 21, color:'#707070', textDecoration: 'none'}} 
            to="/acerca">
            {'Acerca'}
          </Link>
        </div>
        
        <div className='Navegacion'>
          <Link theme={theme} 
            style={{ fontSize: 21, color:'#707070', textDecoration: 'none'}} 
            to="/proyectos">
              Proyectos
          </Link>
        </div>
      
        <div className='Navegacion'>
          <Link theme={theme} 
            style={{ fontSize: 21, color:'#707070', textDecoration: 'none'}} 
            to="/curriculum">
              Curriculum
          </Link>  
        </div>
     
        
      </>
    )
  
}

export default Navegacion