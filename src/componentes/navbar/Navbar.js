import React from "react";
import "./Navbar.css";
import Navbarnormal from './Navbar-normal'
import Navbarmobil from './Navbar-mobil'

export const Navbar = () => {
  return (
    <nav>
    <Navbarnormal/>
    <Navbarmobil/>
  </nav>
  );
};

export default Navbar;
