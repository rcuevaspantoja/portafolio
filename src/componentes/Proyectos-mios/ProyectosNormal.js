
import React from 'react'
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});


export default function ProyectosNormal() {



  return (
    <>
    <div className='Titulo'>
        <Typography theme={theme} style={{ fontSize: 45, color:'#000000', textDecoration: 'underline'}} > 
        Proyectos Personales
        </Typography>
    </div>    

    <div>
        Lowkey empty tho.
    </div>
    
    </>
  )
}
