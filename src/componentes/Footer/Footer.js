import React from "react";
import "./Footer.css";
import Memoji from "../../archivos/img/Memoji.png";

function Footer() {

  return (
    <>
      <footer className="Footer">

          <img src={Memoji} alt="Memoji" className="Memoji" />

          <p>
            Esta página página puede haber cambiado de la última vez que la viste. Mi portafolio es un reflejo de mi aprendizaje constante y continuo en el mundo del desarrollo, por ello hay proyectos mejor desarrollados que otros. 
          </p>

      </footer>
    </>
  );
}

export default Footer;
