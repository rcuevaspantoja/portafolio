import { Typography } from '@mui/material'
import React from 'react'
import imagen from '../../archivos/profile-pic.jpg'
import { createTheme } from '@material-ui/core/styles';

function AcercaFoto() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});

  return (
    <div className='AcercaFoto'>
        
      <img className='profile-pic' src={imagen} alt='profile-pic'/>

      <div className='AcercaFotoTexto'>
        <Typography fontSize={20} theme={theme}>
          Edad: 25 años
        </Typography>
        <Typography fontSize={20} theme={theme}>
          Ciudad: Concepción, Chile
        </Typography>
      </div>      

    </div>
  )
}

export default AcercaFoto