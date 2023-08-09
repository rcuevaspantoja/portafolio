import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';
import Button from '@mui/material/Button';

function AcercaPasatiempos() {

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Varela Round',
            'sans-serif',
          ].join(','),
    },
        palette: {
            primary:{
                main: '#050505',
            } ,
        }, 
}
    );
    
    const intereses = [{
        keyword: 'aprender',
        icono: 'books',
        descripcion: `Siempre me ha gustado estar en constante aprendizaje, encuentro un interés en el saber y es de las cosas que se me da bien.`,
    }, {
        keyword: 'finanzas',
        icono: 'coin',
        descripcion: `Las finanzas personales, la renta variable y el mercado accionario son mis más recientes pasatiempos. Me gusta el concepto de crear una independencia financiera y poder dedicarse a hacer lo que a uno más le gusta sin necesidad de preocuparse por el dinero.`,
    }, {
        keyword: 'ergonomia',
        icono: '⌨️',
        descripcion: `Interés en la ergonomía de escritorio, el buscar la mejor forma de realizar la actividad de programar por largas horas y dueño de más de 3 teclados algunos fabricados a mano y otros comprados.`
    }]

//funciones
    const [ descripcionPasatiempo, setDescripcionPasatiempo ] = useState(intereses[0].descripcion)

  return (
    <div className='AcercaPasatiempos'>

        <Box className='AcercaPasatiempos-box'
            sx={{
                width: '100%',
                height: '100%',
                borderTop: 2,
                borderBottom: 2,
                borderColor: "#050505"
            }}>

            <div className='AcercaPasatiempos-pasatiempos'>
                <Typography theme={theme} variant='h4'>Pasatiempos </Typography>
            </div>        

            <div className='AcercaPasatiempos-botones'>
                {intereses.map((e) =>              
                    <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={() => setDescripcionPasatiempo(e.descripcion)}> {e.keyword} </Button>             
                )}
            </div>   

            <div className='AcercaPasatiempos-descripcion'>
                <Typography theme={theme} variant='h6'>
                    {descripcionPasatiempo}
                </Typography>   
            </div>  
        </Box>
    </div>
  )
}

export default AcercaPasatiempos
