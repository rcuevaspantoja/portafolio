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
                Hola mundo{emoji.get('earth_americas')},
            </Typography>
            <br/>
            <Typography theme={theme} variant='h6'>
            Soy un recientemente titulado en Ingeniería Civil en Informática, de la Universidad del Bío-Bío. 
            Y cuento con muchas ganas de poder aprender nuevas tecnologías y mejorarme. Me gusta mucho el frontend 
            e intento seguir aprendiendo más de él, sin dejar de lado mi interes por el backend y creación de bases de datos.
            </Typography>
        </div>

        
        <AcercaPasatiempos/>
    </div>
  )
}

export default AcercaDescripcion