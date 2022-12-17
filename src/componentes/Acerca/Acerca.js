import React from 'react'
import './Acerca.css'
import AcercaDescripcion from './AcercaDescripcion'
import AcercaFoto from './AcercaFoto'


function Acerca() {

  return (
    <div className='Acerca'>
        
        <AcercaFoto/>
        <AcercaDescripcion/>
    </div>
  )
}

export default Acerca