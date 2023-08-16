import React from "react";
import "./Resume.css";
import mano from "../../archivos/img/mano-apuntando.png";

function Resume() {
  return (
    <div className="resume">
      <div className="contenedor-bandera">
        <img src={mano} alt="mano-apuntando-hacia-abajo"/>
        {/*DIV CV EN ESPAÑOL*/}
        <div className="resume-box-Chile">
          <h1>ESPAÑOL</h1>
        </div>
      </div>

      <div className="contenedor-bandera">
        <img src={mano} alt="mano-apuntando-hacia-abajo"/>
        {/*DIV CV EN INGLES*/}
        <div className="resume-box-US">
          <h1>ENGLISH</h1>
        </div>
      </div>
    </div>
  );
}

export default Resume;
