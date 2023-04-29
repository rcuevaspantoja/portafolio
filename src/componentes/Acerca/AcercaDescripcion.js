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
            <br/>
            <Typography theme={theme} variant='h4'>
                Hola mundo {emoji.get('earth_americas')},
            </Typography>         
            <Typography theme={theme} variant='h6'>
              Me llamo Rodolfo y soy Ingeniero Civil en Computación e Informática de la Universidad del Bío-Bío, bilingüe en ingles actualmente dedicandose al área de procesos productivos
              como Encargado de control en un sistema SCADA y siendo participe de proyectos de automatización de procesos en la 
              transformación digital para la empresa Orizon S.A, parte del grupo de empresas Copec.      
              Cuento con un gran interés para seguir perfeccionandome en el mundo de las tecnologías de información y seguir aprendiendo
              de tecnología como de desarrollo web e Inteligencia Artificial.
            </Typography>
        </div>

        <AcercaPasatiempos/>
    </div>
  )
}

export default AcercaDescripcion