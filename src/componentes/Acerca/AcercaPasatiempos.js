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
        setDescripcionPasatiempo('Constantemente estoy realizando problemas de programación de grandes empresas de TI para seguir mejorando mi lógica de programación. Cuento con más de 50 problemas y aumentando!, ya que es algo que me gusta realizar. Es una especie de sopa de letras para programadores')
    }

  return (
    <div className='AcercaPasatiempos'>


        <Box className='AcercaPasatiempos-box'
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#e6e6e6',
            }}>

            <div className='AcercaPasatiempos-pasatiempos'>
                <Typography theme={theme} variant='h4'>Pasatiempos{emoji.get(emojiPasatiempo)} </Typography>
            </div>        

            <div className='AcercaPasatiempos-botones'>
                <Button className='AcercaPasatiempos-botones-hijo' variant="contained" color='info' onClick={gimnasio}>Gimnasio</Button>
                <Button className='AcercaPasatiempos-botones-hijo' variant="contained" color='info' onClick={fotografia}>Fotografía</Button>
                <Button className='AcercaPasatiempos-botones-hijo' variant="contained" color='info' onClick={teclados}>Teclados</Button>
                <Button className='AcercaPasatiempos-botones-hijo' variant="contained" color='info' onClick={aprender}>Aprender</Button>
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