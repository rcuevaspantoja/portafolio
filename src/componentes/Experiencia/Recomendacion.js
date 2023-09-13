import React from 'react'
import { Typography } from '@mui/material'
import { createTheme } from '@material-ui/core/styles';
import {useSpring, animated } from 'react-spring'

function Recomendacion() {

    const theme = createTheme({
        typography: {
        fontFamily: [
            'Varela Round',
            'sans-serif',
        ].join(','),
        },});
    
    const springCurriculum2 = useSpring({
        from:{ opacity: 0 },
        to: { opacity: 1 },
        config: {duration: 1000} ,
        delay: 1500,

        })  


  return (
    <animated.div style={springCurriculum2} className='Recomendacion'>

            <div>
                <Typography theme={theme} align="center" style={{ fontSize: 20, color:'#000'}}>
                    "En el desarrollo de su trabajo de titulación demostró ser
                    comprometido y responsable en el cumplimiento de sus tareas; manifestando su
                    preocupación por estudiar, capacitarse y actualizar sus conocimientos en forma
                    autónoma."
                </Typography>
            </div>

            <div>
                <Typography theme={theme} align="center" style={{ fontSize: 14, color:'#707070', marginTop:'5px'}}>
                    Docente Departamento de Sistemas de Información
                    Facultad de Ciencias Empresariales                    
                </Typography>

                <Typography theme={theme} align="center" style={{ fontSize: 14, color:'#707070'}}>
                    Universidad del BíoBío, sede Concepción-Chile.                  
                </Typography>
            </div>
    </animated.div>
  )
}

export default Recomendacion