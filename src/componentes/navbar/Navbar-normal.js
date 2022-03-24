import React from 'react'
import Typography from '@mui/material/Typography';
import Redes from './Redes'
import Navegacion from './Navegacion'
import { createTheme } from '@material-ui/core/styles';



export const Navbar = () => {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
    },});


  return (
        <div className='Contenedor-Navbar'>

          <div className='Navbar-1'>
            <Navegacion />
          </div>

          <div className='Navbar-3'>
            <Typography theme={theme} style={{ fontSize: 25, color:'#707070'}}> Rodolfo Cuevas </Typography>
          </div>

          <div className='Navbar-2'>
            <Redes />
          </div>
        </div>


  )
}

export default Navbar;