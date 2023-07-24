import React from 'react'
import Typography from '@mui/material/Typography';
import Redes from './Redes'
import { createTheme } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import PDF from '../../archivos/pdf/Curriculum_2023.pdf'

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
    },
    {
      path: PDF,
      name: 'Curriculum',
      exact: true,
      target: '_blank'
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

      {/* Direcciones para los tabs */}
      <div className='Navbar-1'>  
        <Nav/>
      </div>

      <div className='Navbar-3'>
        <Typography theme={theme} style={{ fontSize: 55, color:'#000000'}}> Rodolfo Cuevas </Typography>
      </div>

      <div className='Navbar-2'>
        <Redes />
      </div>
    </div>
  )
}

export default Navbar;