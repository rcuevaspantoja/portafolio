import React from 'react'
import Typography from '@mui/material/Typography';
import Navbarmobil from './Navbar-mobil';
import Navbarnormal from './Navbar-normal';
export const Navbar = () => {


  return (
        <>
        
          <Navbarnormal/>
          <Navbarmobil/>
        </>


  )
}

export default Navbar;