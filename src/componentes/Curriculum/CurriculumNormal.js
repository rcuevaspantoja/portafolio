import React from 'react'
import DescargarCV from './DescargarCV'
import InformacionAdicional from './InformacionAdicional'

function CurriculumNormal() {

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