import React from 'react'
import ButtonBase from '@mui/material/ButtonBase';
import imagen1 from './Curriculum.jpg';


function DescargarCV() {


    
  return (
    <>
      
      <ButtonBase className='EstiloCurriculum'>
        
        <img 
        src={ imagen1 } alt="Imagen Curriculum" 
        style={{height: 600, width: 400}}
        >
        </img>
      </ButtonBase>
    </>
  )
}

export default DescargarCV