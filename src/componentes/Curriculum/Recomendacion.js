import React from 'react'
import { Typography } from '@mui/material'
import { createTheme } from '@material-ui/core/styles';

function Recomendacion() {

    const theme = createTheme({
        typography: {
        fontFamily: [
            'Varela Round',
            'sans-serif',
        ].join(','),
        },});
    
  return (
    <div className='Recomendacion'>

            <div className='Recomendacion-parte1'>
                <Typography theme={theme} align="center" style={{ fontSize: 20, color:'#000'}}>
                    "En el desarrollo de su trabajo de titulación demostró ser
                    comprometido y responsable en el cumplimiento de sus tareas; manifestando su
                    preocupación por estudiar, capacitarse y actualizar sus conocimientos en forma
                    autónoma."
                </Typography>
            </div>

            <div className='Recomendacion-parte2'>
                <Typography theme={theme} align="center" style={{ fontSize: 14, color:'#707070'}}>
                    Docente Departamento de Sistemas de Información
                    Facultad de Ciencias Empresariales                    
                </Typography>

                <Typography theme={theme} align="center" style={{ fontSize: 14, color:'#707070'}}>
                    Universidad del BíoBío, sede Concepción-Chile.                  
                </Typography>
            </div>
    </div>
  )
}

export default Recomendacion