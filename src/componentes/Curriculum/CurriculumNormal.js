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

    <div className='CurriculumNormal'>
        
        <div  className='CurriculumNormal-parte1'>
            <DescargarCV />
        </div>

        <div className='CurriculumNormal-parte2'>
            <InformacionAdicional/>
        </div>

    </div>
  )
}

export default CurriculumNormal