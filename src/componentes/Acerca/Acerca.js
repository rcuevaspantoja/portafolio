import React from "react";
import "./Acerca.css";
import AcercaDescripcion from "./AcercaDescripcion";
import FotodePerfil from "./FotodePerfil";

function Acerca() {

  return (
    <div className="Acerca">
      <FotodePerfil />
      <AcercaDescripcion />
    </div>
  );
}

export default Acerca;
