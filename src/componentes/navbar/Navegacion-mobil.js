import React from 'react'
import { createTheme } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

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
          style={{ fontSize: 25, color:'#000000', textDecoration: 'none'}} 
          to="/acerca" 
          onClick={ () => props.isMobile && props.cerrarMenuMobil() && props.cambiarTitulo('Acerca') }>
            {'Acerca'}
        </Link>

        <Link theme={theme} 
          style={{ fontSize: 25, color:'#000000', textDecoration: 'none'}} 
          to="/proyectos" 
          onClick={ () => props.isMobile && props.cerrarMenuMobil() }>
            Proyectos
        </Link>
      </>
    )
  
}

export default NavegacionMobil