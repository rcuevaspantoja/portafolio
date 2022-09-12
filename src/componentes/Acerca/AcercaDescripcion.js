import React from 'react'
import Typography from '@mui/material/Typography';
import AcercaPasatiempos from './AcercaPasatiempos';
import { createTheme } from '@material-ui/core/styles';

function AcercaDescripcion() {

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Varela Round',
            'sans-serif',
          ].join(','),
    },});
    
    var emoji = require('node-emoji')


  return (
    <div className='AcercaDescripcion'>
        <div className='AcercaDescripcion-holamundo'>
            <Typography theme={theme} variant='h4'>
                Hola mundo {emoji.get('earth_americas')},
            </Typography>
            <br/>
            <Typography theme={theme} variant='h6'>
            Ingeniero Civil en Informática de la Universidad del Bío-Bío con muchas ganas de seguir aprendiendo y desarrollandome en 
            nuevas tecnologías para el área de TI. Cuento con gran interés por las bases de datos y el desarrollo web junto con la gestión
            y la administración.
            </Typography>
        </div>

        
        <AcercaPasatiempos/>
    </div>
  )
}

export default AcercaDescripcion