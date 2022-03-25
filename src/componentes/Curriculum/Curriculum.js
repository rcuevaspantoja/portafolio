import React from 'react'
import './Curriculum.css'
import CurriculumMobil from './CurriculumMobil'
import CurriculumNormal from './CurriculumNormal'


function Curriculum() {




  return (
    <div className='Curriculum'>

      <CurriculumNormal/>
      <CurriculumMobil/>
    </div>
  )
}

export default Curriculum