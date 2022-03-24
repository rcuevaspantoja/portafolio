import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import RedesMobil from './Redes-mobil'
import NavegacionMobil from './Navegacion-mobil'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion';
import { createTheme } from '@material-ui/core/styles';

export const Navbar = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
    },});

  const[open, setOpen] = useState(false);

  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}

  const menuAbierto = 
                      <MenuIcon fontSize='large' className='Hamburgueza' 
                        color='action'
                        onClick={ () => setOpen( !open ) }
                      />

  const menuCerrado = <CloseIcon fontSize='large' className='Hamburgueza'
                        color='action'
                        onClick={ () => setOpen( !open ) }
                      />

  const cerrarMenuMobil = () => setOpen( false );

  return (

        <div className='Contenedor-Navbar-mobil'>

          <div className='Navbar-3-mobil'>
            <Typography theme={theme} style={{ fontSize: 25, color:'#707070', textDecoration: 'none'}} > 
              Rodolfo Cuevas 
            </Typography>
          </div>

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