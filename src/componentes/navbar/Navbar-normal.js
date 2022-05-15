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
      exact: true
    },
    {
      path: '/proyectos',
      name: 'Proyectos',
      exact: true
    },
    {	
      path: '/curriculum',
      name: 'Curriculum',
      exact: true
    }
  ]

    const Nav = () => (
      <div className='Navegacion'>
        {links.map(({path, name, exact}) => (
        
          <NavLink theme={theme} key={name}
            style={{ fontSize: 21, color:'#000000', textDecoration: 'none' }} 
            to={path}
            exact={exact}
            activeClassName="active">
              {name}
          </NavLink>
                  
        ))}
      </div>
    );


  return (
    <div className='Contenedor-Navbar'>

      <div className='Navbar-1'>  
        <Nav/>
      </div>

      <div className='Navbar-3'>
        <Typography theme={theme} style={{ fontSize: 25, color:'#000000'}}> Rodolfo Cuevas </Typography>
      </div>

      <div className='Navbar-2'>
        <Redes />
      </div>
    </div>
  )
}

export default Navbar;