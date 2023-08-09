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

    const saludo = 'Hola Mundo '+ emoji.get('earth_americas') +","
    const presentacion = `    
      Soy Rodolfo, Ingeniero Civil en Informática, bilingüe en ingles y apasionado por la tecnología residente en la ciudad de Concepción. Actualmente me dedico al área de procesos productivos a cargo del control de un sistema SCADA junto con ser participante de proyectos de automatización y transformación digital. Te invito a revisar mis proyectos en la próxima pestaña y revisar mi Curriculum si gustas contactar conmigo.
    `
  return (
    <div className='AcercaDescripcion'>
      <div className='AcercaDescripcionTexto'>
        <Typography theme={theme} variant='h4'>
          {saludo}
        </Typography>         
        <Typography theme={theme} variant='h6'>
          {presentacion}
        </Typography> 
      </div>
      <AcercaPasatiempos/>
    </div>
  )
}
export default AcercaDescripcion