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
    },});

    var emoji = require('node-emoji')

    const [ emojiPasatiempo, setEmojiPasatiempo ] = useState('bulb')
    const [ descripcionPasatiempo, setDescripcionPasatiempo ] = useState('')

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
        setDescripcionPasatiempo('He logrado aprender mucho de manera autónoma y lo he terminado haciendo un pasatiempo. Desde poder aprender lenguajes de programación de manera autodidacta hasta aprender el cómo funcionan los grupos musculares para poder rendir mejor en el gimnasio. Aprender se ha vuelto muy emocionante para mí y lo considero un pasatiempo, porque gracias a fuentes como Youtube siempre se puede estar aprendiendo. ')
    }

  return (
    <div className='AcercaPasatiempos'>


        <Box className='AcercaPasatiempos-box'
            sx={{
                width: '100%',
                height: 300,
                backgroundColor: '#e6e6e6',
            }}>

            <div className='AcercaPasatiempos-pasatiempos'>
                <Typography theme={theme} variant='h4'>Pasatiempos{emoji.get(emojiPasatiempo)} </Typography>
            </div>        

            <div className='AcercaPasatiempos-botones'>
                <Button variant="contained" color='info' onClick={gimnasio}>Gimnasio</Button>
                <Button variant="contained" color='info' onClick={fotografia}>Fotografía</Button>
                <Button variant="contained" color='info' onClick={teclados}>Teclados</Button>
                <Button variant="contained" color='info' onClick={aprender}>Aprender</Button>
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