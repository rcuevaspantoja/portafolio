import { Typography } from '@mui/material'
import React from 'react'
import { createTheme } from '@material-ui/core/styles';
import EmailMe from './EmailMe';
import Recomendacion from './Recomendacion';

function InformacionAdicional() {

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Varela Round',
            'sans-serif',
          ].join(','),
        },});

    return (
        <>
            <Typography theme={theme} style={{ fontSize: 30, color:'#000'}} >
                ¿Hablamos?
            </Typography>
            
            <EmailMe/>

            <Recomendacion />
            
        </>
    )
}

export default InformacionAdicional