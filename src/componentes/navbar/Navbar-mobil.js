import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import RedesMobil from './Redes-mobil'
import NavegacionMobil from './Navegacion-mobil'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSpring, animated} from 'react-spring'
import { createTheme } from '@material-ui/core/styles';

export const Navbar = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
    },});

  //animacion
  const [animacion, setAnimacion] = useState( false )
  //const [animacion2, setAnimacion2] = useState( false )


  const springNavBar = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 700} ,
    reverse: !animacion
  })  

  const[open, setOpen] = useState(false);

  const multifuncionAbrir = () =>{
    //abre o cierra el menú
    setOpen( !open ) 
    //animacion para el menu
    setAnimacion( true )
  }

  const multifuncionCerrar = () =>{
    //abre o cierra el menú
    setOpen( !open ) 
    //animacion para el menu
    setAnimacion( false )
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
            <animated.div style={springNavBar} className='Navbar-1-mobil'>
                {open && <NavegacionMobil isMobile={true} cerrarMenuMobil={cerrarMenuMobil} />}
            </animated.div>

            <animated.div style={springNavBar} className='Navbar-2-mobil'>
              {open && <RedesMobil />}
            </animated.div>
        </div>
      </>
  )
}

export default Navbar;
