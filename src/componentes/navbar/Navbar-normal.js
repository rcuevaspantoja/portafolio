import React from 'react'
import Typography from '@mui/material/Typography';
import Redes from './Redes'
import { createTheme } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
    },});

  const links = [
    {
      path: '/acerca',
      name: 'Acerca',
      exact: true,
      target: ''
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      exact: true,
      target: ''
    }
  ]

    const Nav = () => (
      <div className='Navegacion'>
        {links.map(({path, name, exact, target}) => (
        
          <NavLink theme={theme} key={name} className="no-active"
            style={{ fontSize: 21, color:'#000000', textDecoration: 'none' }} 
            to={path}
            exact={exact}
            target={target}
            activeClassName="active">
              {name}
          </NavLink>
                  
        ))}
      </div>
    );


  return (

    <div className='Contenedor-Navbar'>

      <div className='NavbarTitulo'>
        <Typography theme={theme} style={{ fontSize: 55, color:'#000000'}}> Rodolfo Cuevas </Typography>
      </div>

      <div className='Navbar-2'>
        <Redes />
      </div>
    </div>
  )
}

export default Navbar;