import React from "react";
import "./Resume.css";
import mano from "../../archivos/img/mano-apuntando.png";


function Resume() {
  return (
    <div className="resume">
      <div className="contenedor-bandera">
        <img src={mano} alt="mano-apuntando-hacia-abajo" />
        {/*DIV CV EN ESPAÑOL*/}
        <a className="resume-box-Chile" href="www.google.com" target="_blank" rel="noreferrer">
          <div>
            <h1>ESPAÑOL</h1>
          </div>
        </a>
      </div>

      <div className="contenedor-bandera">
        <img src={mano} alt="mano-apuntando-hacia-abajo" />
        {/*DIV CV EN INGLES*/}
        <a className="resume-box-US" href="https://www.google.com" target="_blank" rel="noreferrer">
          <div>
            <h1>ENGLISH</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Resume;
