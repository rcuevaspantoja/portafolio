import React from "react";
import AcercaPasatiempos from "./GithubCalendar";

function AcercaDescripcion() {

  const saludo = "Hola, ";
  const presentacion = "Soy Ingeniero Civil en Informátca apasionado por la tecnología, diseño y las metodologías ágiles desde Concepción, Chile. Con grandes motivaciones en conocer gente con intereses similares y hacer comunidad en la región Sur del país. ";

  const trabajo = "Poseo experiencia trabajando en análisis de datos y reportabilidad en el cargo de Ingeniero en SCADA por más de 1 año, amplios conocimientos en bases de datos y herramientas de infomática. Últimamente centrnado mis estudios y en desarrollo FrontEnd de la mano de HTML5, CSS, Javascript y React"

  return (
    <div className="AcercaDescripcion">

      <div className="AcercaDescripcionTexto">
        <h2>{saludo}</h2>
        <p>{presentacion}</p>

        <h3>Conocimientos</h3>
        <p>{trabajo}</p>
      </div>

      <AcercaPasatiempos />
    </div>
  );
}
export default AcercaDescripcion;
