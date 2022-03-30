import React from 'react'
import DescargarCVMobil from './DescargarCVMobil'
import InformacionAdicional from './InformacionAdicional'
import {useSpring, config, animated} from 'react-spring'

function CurriculumMobil() {

  //animacion
  const springNavBar = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  })  

  return (
      
    <div className='CurriculumMobil'>
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