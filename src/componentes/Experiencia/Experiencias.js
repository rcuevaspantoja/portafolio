import React from 'react'
import './Experiencias.css'
import ExperienciasNormal from './ExperienciasNormal'
import ExperienciasMobil from './ExperienciasMobil'
import Recomendacion from './Recomendacion'

function Experiencias() {

  return (
    <div className='Experiencias'>

      <ExperienciasNormal />
      <ExperienciasMobil />
    </div>
  )
}
export default Experiencias