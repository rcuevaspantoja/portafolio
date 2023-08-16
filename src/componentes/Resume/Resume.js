import React from "react";
import "./Resume.css";
import mano from "../../archivos/img/mano-apuntando.png";
import resumeESP from '../../archivos/pdf/Resume_RodolfoCuevas_ESP.pdf'
import resumeENG from '../../archivos/pdf/Resume_RodolfoCuevas_ENG.pdf'
function Resume() {
  return (
    <div className="resume">
      <div className="contenedor-bandera">
        <img src={mano} alt="mano-apuntando-hacia-abajo" />
        {/*DIV CV EN ESPAÑOL*/}
        <a className="resume-box-Chile" href={resumeESP} target="_blank" rel="noreferrer">
          <div>
            <h1>ESPAÑOL</h1>
          </div>
        </a>
      </div>

      <div className="contenedor-bandera">
        <img src={mano} alt="mano-apuntando-hacia-abajo" />
        {/*DIV CV EN INGLES*/}
        <a className="resume-box-US" href={resumeENG} target="_blank" rel="noreferrer">
          <div>
            <h1>ENGLISH</h1>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Resume;
