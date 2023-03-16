import React from 'react'
import './Footer.css';
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';
import Memoji from '../../archivos/Memoji.png'


function Footer() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});

  return (
    <div className='Footer'>
      <div className='Footer-contenedor'>

        <img src={Memoji} alt="Memoji" align="center" className="Memoji"/>
        <Typography theme={theme} align="center">
        Esta página está en constante cambio, me gusta ir probando cosas nuevas y reflejarlas acá.
        </Typography>
      </div>
    </div>
  )
}

export default Footer