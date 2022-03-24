import React from 'react'
import Typography from '@mui/material/Typography';
import Redes from './Redes'
import Navegacion from './Navegacion'
export const Navbar = () => {

  return (
        <div className='Contenedor-Navbar'>
          <div className='Navbar-1'>
            <Navegacion />
          </div>
          <div className='Navbar-2'>
            <Redes />
          </div>
        </div>


  )
}

export default Navbar;