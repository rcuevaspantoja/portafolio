import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import RedesMobil from './Redes-mobil'
import NavegacionMobil from './Navegacion-mobil'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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

  const multifuncionAbrir = () =>{
    //abre o cierra el menú
    setOpen( !open ) 
  }

  const multifuncionCerrar = () =>{
    //abre o cierra el menú
    setOpen( !open ) 
  }

  const menuAbierto = 
                      <MenuIcon sx={{ fontSize: 50 }} className='Hamburgueza' 
                        color='action'
                        onClick={ () => multifuncionAbrir() }
                      />

  const menuCerrado = <CloseIcon sx={{ fontSize: 50 }} className='Hamburgueza'
                        color='action'
                        onClick={ () => multifuncionCerrar() }
                      />

  const cerrarMenuMobil = () => setOpen( false );

  return (
      <>
        <div  className='Contenedor-Navbar-mobil'>

          <div className='Navbar-3-mobil'>
            <Typography theme={theme} style={{ fontSize: 35, color:'#000000', textDecoration: 'none'}} > 
              Rodolfo Cuevas 
            </Typography>
          </div>

          <div className='Menu-Burger'>
            {open ? menuCerrado : menuAbierto}
          </div>
        </div>
        
        <div className='Menu-abierto'>
            <div className='Navbar-1-mobil'>
                {open && <NavegacionMobil isMobile={true} cerrarMenuMobil={cerrarMenuMobil} />}
            </div>

            <div className='Navbar-2-mobil'>
              {open && <RedesMobil />}
            </div>
        </div>
      </>
  )
}

export default Navbar;
