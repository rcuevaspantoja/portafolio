import React from 'react'
import DescargarCV from './DescargarCV'
import InformacionAdicional from './InformacionAdicional'
import {useSpring, animated} from 'react-spring'

function CurriculumNormal() {

  const springCurriculum = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1000} ,
    delay: 300,
  })  


  return (

    <animated.div style={springCurriculum} className='CurriculumNormal'>
        
        <div  className='CurriculumNormal-parte1'>
            <DescargarCV />
        </div>

        <div style={springCurriculum} className='CurriculumNormal-parte2'>
            <InformacionAdicional/>
        </div>

    </animated.div>
  )
}

export default CurriculumNormal