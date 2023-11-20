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
            Esta página página puede haber cambiado de la última vez que la viste. Mi portafolio es un reflejo de mi aprendizaje constante y continuo en el mundo del desarrollo, por ello hay proyectos mejor desarrollados que otros. 
          </Typography>
        </div>

      </footer>
    </>
  );
}

export default Footer;
