import React from "react";
import "./Footer.css";
import Typography from "@mui/material/Typography";
import { createTheme } from "@material-ui/core/styles";
import Memoji from "../../archivos/img/Memoji.png";

function Footer() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Varela Round", "sans-serif"].join(","),
    },
  });

  return (
    <>
      <footer className="Footer-Desktop">
        <div className="Footer-Panel">
          <img src={Memoji} alt="Memoji" className="Memoji" />

          <Typography theme={theme} align="center">
            Esta página está en constante cambio, me gusta ir probando cosas
            nuevas y reflejarlas acá.
          </Typography>
        </div>

        <div className="Footer-Panel">
          <Typography theme={theme} align="center">
            Actualmente vivo en Concepción, pero no me importaría moverme a
            cualquier otra parte. Siempre me ha gustado la idea de conocer
            muchas partes de mundo.
          </Typography>
        </div>

        <div className="Footer-Panel">
          <Typography theme={theme} align="center">
            Para más información de qué estoy haciendo en la actualidad, revisar
            el panel de tareas. Ahí se puede ver mis tareas y en qué estoy
            trabajando de momento.
          </Typography>
        </div>
      </footer>

      <footer className="Footer-Mobile">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

          <div class="carousel-inner" align="center">
            <div class="carousel-item active">
              <div className="Footer-Panel">
                <img src={Memoji} alt="Memoji" className="Memoji" />

                <Typography theme={theme} align="center">
                  Esta página está en constante cambio, me gusta ir probando cosas
                  nuevas y reflejarlas acá.
                </Typography>
              </div>
            </div>
            <div class="carousel-item">
              <div className="Footer-Panel">
                <Typography theme={theme} align="center">
                  Actualmente vivo en Concepción, pero no me importaría moverme a
                  cualquier otra parte. Siempre me ha gustado la idea de conocer
                  muchas partes de mundo.
                </Typography>
              </div>
            </div>
            <div class="carousel-item">
              <div className="Footer-Panel">
                <Typography theme={theme} align="center">
                  Para más información de qué estoy haciendo en la actualidad, revisar
                  el panel de tareas. Ahí se puede ver mis tareas y en qué estoy
                  trabajando de momento.
                </Typography>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
