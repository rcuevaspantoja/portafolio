import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';
import './Proyectos.css'

function ProyectosNormal() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});


  return (
    <div className='Proyectonormal'>
        <div className='Titulo'>
          <Typography theme={theme} style={{ fontSize: 45, color:'#000000', textDecoration: 'none'}} > 
            Experiencias
          </Typography>
        </div>

      <div className='AcercaProyectos'>
        <Box className='AcercaProyectos-box'
            sx={{
                width: '100%',
                height: '100%',
            }}>

            <div className='AcercaProyectos-pasatiempos'>
                <Typography theme={theme} variant='h6' color="common.white"> Mayo-2022 al Presente </Typography>
            </div>   
            <div className='Descripcion-Empleo'>
              <Typography theme={theme} variant='h4' color="common.white"> Operador de Automatización en Orizon S.A </Typography> <br />
            </div>             

        </Box>
      </div>
    </div>


  )
}

export default ProyectosNormal