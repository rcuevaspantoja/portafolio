import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import RedesMobil from './Redes-mobil'
import NavegacionMobil from './Navegacion-mobil'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion';


export const Navbar = () => {

  const[open, setOpen] = useState(false);

  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  const menuAbierto = 
                      <MenuIcon fontSize='large' className='Hamburgueza'
                        color='white'
                        onClick={ () => setOpen( !open ) }
                      />

  const menuCerrado = <CloseIcon fontSize='large' className='Hamburgueza'
                        color='white'
                        onClick={ () => setOpen( !open ) }
                      />

  const cerrarMenuMobil = () => setOpen( false );

  return (

        <div className='Contenedor-Navbar-mobil'>
          {open ? menuCerrado : menuAbierto}

            <div className='Navbar-1-mobil'>
              {open && <NavegacionMobil isMobile={true} cerrarMenuMobil={cerrarMenuMobil} />}
            </div>

            <div className='Navbar-2-mobil'>
              {open && <RedesMobil />}
            </div>
        </div>

  )
}

export default Navbar;