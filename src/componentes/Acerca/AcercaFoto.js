import React from 'react'
import imagen from '../../archivos/profile-pic.jpg'

function AcercaFoto() {

  return (
    <div className='AcercaFoto'>
        
            <img className='profile-pic' src={imagen} alt='profile-pic'/>

    </div>
  )
}

export default AcercaFoto