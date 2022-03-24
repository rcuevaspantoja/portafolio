import React from 'react'
import { createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export const NavegacionMobil = (props) =>{

    const theme = createTheme({
      typography: {
        fontFamily: [
          'Varela Round',
          'sans-serif',
        ].join(','),
      },});

    return (

      <>

        <Link  theme={theme} 
          style={{ fontSize: 20, color:'#707070'}} 
          to="/acerca" 
          onClick={ () => props.isMobile && props.cerrarMenuMobil() }>
            {'Acerca'}
        </Link>

        <Link theme={theme} 
          style={{ fontSize: 20, color:'#707070'}} 
          to="/proyectos" 
          onClick={ () => props.isMobile && props.cerrarMenuMobil() }>
            Proyectos
        </Link>
      
        <Link theme={theme} 
          style={{ fontSize: 20, color:'#707070'}} 
          to="/curriculum" 
          onClick={ () => props.isMobile && props.cerrarMenuMobil() }>
            Curriculum
        </Link>

      </>
    )
  
}

export default NavegacionMobil