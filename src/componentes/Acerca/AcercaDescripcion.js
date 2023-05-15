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
            Soy Rodolfo, Ingeniero Civil en Informática, bilingue en ingles y actualmente me dedido al área de procesos productivos a cargo del control de un sistema SCADA junto con ser participante de proyectos de automatización y transformación digital para Orizon S.A de empresas Copec. 
            Te invito a revisar mis proyectos en la próxima pestaña y revisar mi Résumé si gustas contactar conmigo. 
            </Typography>
        </div>

        <AcercaPasatiempos/>
    </div>
  )
}

export default AcercaDescripcion