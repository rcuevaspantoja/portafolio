import { Typography } from '@mui/material'
import React from 'react'
import { createTheme } from '@material-ui/core/styles';
import EmailMe from './EmailMe';
import Recomendacion from './Recomendacion';
import {useSpring, animated } from 'react-spring'

function InformacionAdicional() {

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
        delay: 600,
    
        })  

    return (
        <animated.div style={springCurriculum2}  className='hablamos'>
            <Typography theme={theme} style={{ fontSize: 30, color:'#000'}} >
                ¿Hablamos?
            </Typography>
    
            <EmailMe/>

            <Recomendacion />
            
        </animated.div>
    )
}

export default InformacionAdicional