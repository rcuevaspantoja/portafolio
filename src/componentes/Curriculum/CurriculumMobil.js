import React from 'react'
import DescargarCVMobil from './DescargarCVMobil'
import InformacionAdicional from './InformacionAdicional'
import {useSpring, config, animated} from 'react-spring'
import Typography from '@mui/material/Typography';
import { createTheme } from '@material-ui/core/styles';

function CurriculumMobil() {

  //animacion
  const springNavBar = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  })  

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});

  return (
      
    <div className='CurriculumMobil'>

      <div className='Titulo'>
        <Typography theme={theme} style={{ fontSize: 35, color:'#000000', textDecoration: 'none'}} > 
          Contacto
        </Typography>
      </div>

      <animated.div style={springNavBar} className='CurriculumMobil-parte1'>
            <DescargarCVMobil />
      </animated.div>

      <div className='CurriculumMobil-parte2'>
            <InformacionAdicional/>
       </div>
    </div>
  )
}

export default CurriculumMobil