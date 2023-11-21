import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';
import './Experiencias.css'

function ExperienciasNormal() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});

  return (
    <div className='divExperiencias'>
        <div className='titulo-2'>
          <Typography theme={theme} style={{ fontSize: 45, color:'#000000', textDecoration: 'none'}} > 
            Experiencias
          </Typography>
        </div>

      <div className='AcercaExperiencias'>
        <Box className='AcercaExperiencias-box'
            sx={{
                width: '100%',
                height: '100%',
            }}>

            <div className='AcercaExperiencias-pasatiempos'>
                <Typography theme={theme} variant='h6' color="common.white"> Mayo-2022 a Septiembre-2023 </Typography>
            </div>   
            <div className='Descripcion-Empleo'>
              <Typography theme={theme} variant='h4' color="common.white"> Encargado de sistema SCADA en Orizon S.A </Typography> <br />
            </div>             
        </Box>
      </div>
    </div>
  )
}
export default ExperienciasNormal