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

    const [ emojiPasatiempo, setEmojiPasatiempo ] = useState('books')
    const [ descripcionPasatiempo, setDescripcionPasatiempo ] = useState('Me gustar en constante aprendizaje, de cosas que me llamen la atención y otras que no tanto. Encuentro un interés en saber como funcionan las cosas.')

    const teclados = () => {
        setEmojiPasatiempo('computer');
        setDescripcionPasatiempo('Suena obvio, pero no lo es tanto. Me gusta meterme en el hardware y software, soldar, intentar inventar cosas, etc.');      
    }

    const finanzas = () => {
        setEmojiPasatiempo('coin');
        setDescripcionPasatiempo('Lo descubrí de último, pero me gustan mucho las finanzas personales y estoy estudiando para poder invertir en el mercado accionario.')
    }

    const aprender = () => {
        setEmojiPasatiempo('books');
        setDescripcionPasatiempo('Me gustar en constante aprendizaje, de cosas que me llamen la atención y otras que no tanto. Encuentro un interés en saber como funcionan las cosas.')
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
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={aprender}>Aprender</Button>                
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={finanzas}>Finanzas</Button>
                <Button theme={theme} className='AcercaPasatiempos-botones-hijo' variant="contained" onClick={teclados}>Teclados</Button>

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
