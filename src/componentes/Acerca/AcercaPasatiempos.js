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
    
    // eslint-disable-next-line
    const intereses = [{
        keyword: 'aprender',
        icono: 'books',
        descripcion: `Siempre me ha gustado estar en constante aprendizaje, encuentro un ionterés en el saber y es de las cosas que se me da bien.`,
    }, {
        keyword: 'finanzas',
        icono: 'coin',
        descripcion: `Las finanzas personales y la rentavariable son mis más rescientes pasatiempos. Me gusta la idea de crear una independencia financiera.`,
    }, {
        keyword: 'ergonomia',
        icono: '⌨️',
        descripcion: `Alto interes en la ergonomía de escritorio y el buscar la mejor forma de realizar la actividad, ya sea para hacer ejercicio o para pasar horas frente al computador`
    }]

//funciones
    // eslint-disable-next-line
    const [ emojiPasatiempo, setEmojiPasatiempo ] = useState()
    // eslint-disable-next-line
    const [ descripcionPasatiempo, setDescripcionPasatiempo ] = useState()
    // eslint-disable-next-line
    const AccionBoton = (a) => {
        // setEmojiPasatiempo(a[0])
        // setDescripcionPasatiempo(a[1])
    }

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
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={console.log()}>Aprender</Button>                
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={console.log()}>Finanzas</Button>
                {intereses.forEach( (e) => <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={console.log()}>aaa </Button> )}
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
