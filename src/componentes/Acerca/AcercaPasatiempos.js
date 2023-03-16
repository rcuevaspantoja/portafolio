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

    var emoji = require('node-emoji')

    const [ emojiPasatiempo, setEmojiPasatiempo ] = useState('runner')
    const [ descripcionPasatiempo, setDescripcionPasatiempo ] = useState('Descubierta a muy tardía edad, el gimnasio ha sido una gran manera para desestresarme, pasar el tiempo con amigos y para poder meditar. Sumado a los obvios beneficios que vienen de la mano con la actividad física.')

    const gimnasio = () => {
        setEmojiPasatiempo('runner');
        setDescripcionPasatiempo('Descubierta a muy tardía edad, el gimnasio ha sido una gran manera para desestresarme, pasar el tiempo con amigos y para poder meditar. Sumado a los obvios beneficios que vienen de la mano con la actividad física.');
    }

    const teclados = () => {
        setEmojiPasatiempo('computer');
        setDescripcionPasatiempo('Ya sea para trabajar o navegar por internet los teclados pasan a ser parte fundamental del día a día de los informáticas, es por esto que disfruto mucho aprendiendo y poniendo en práctica lo que voy aprendiendo de este mundo en mi propio teclado.');      
    }

    const fotografia = () => {
        setEmojiPasatiempo('camera');
        setDescripcionPasatiempo('El congelar un momento de la vida en una fotografía lo considero necesario y hasta obligatorio para a futuro poder recordar de mejor manera todos esos buenos momentos vividos. Y al andar en todo momento con un cámara en mi telefono me veo en la obligación de congelar ciertos momentos.')
    }

    const aprender = () => {
        setEmojiPasatiempo('books');
        setDescripcionPasatiempo('Una de las actividades de las que más disfruto es el aprender constantemente de cosas que me van llamando la antención. Estos últimos meses he aprendido bastante de circuitos y a soldar para poder reparar articulos electronicos antiguos que he ido comprando rotos para luego vender sacando una ganancia.')
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
                /* backgroundColor: '#FFFFFF', */
            }}>

            <div className='AcercaPasatiempos-pasatiempos'>
                <Typography theme={theme} variant='h4'>Pasatiempos{emoji.get(emojiPasatiempo)} </Typography>
            </div>        

            <div className='AcercaPasatiempos-botones'>
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={gimnasio}>Gimnasio</Button>
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={fotografia}>Fotografía</Button>
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={teclados}>Teclados</Button>
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={aprender}>Aprender</Button>
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