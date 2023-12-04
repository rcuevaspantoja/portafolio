import React from "react";
import "./Proyectos.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import minPortafolio from "../../archivos/img/miniatura-portafolio.png";
import { SiJavascript, SiReact, SiCss3, SiSass } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im"
import PDF from "../../archivos/pdf/Machine_Learning.pdf";
import "bootstrap/dist/css/bootstrap.min.css";


/** https://react-icons.github.io/react-icons << iconos */

export default function Proyectos() {
  const proyectos = [
    {
      nombre: "Pokedex online",
      ruta: "https://github.com/rcuevaspantoja/pokedex",
      imagen:
        "https://www.kjcesports.com/wp-content/uploads/2023/05/POkedex.jpg",
      descripcion:
        "Sitio web en React con consumo de la API de Pokémon para buscar Pokémon, su número de ID y su tipo, con un infinite scrolling de la pokedex",
      tecnologias: (
        <>
          {" "}
          <ImHtmlFive/> <SiCss3 /> <SiReact /> <SiJavascript /> <TbApi />{" "}
        </>
      ),
    },
    {
      nombre: "Portafolio de presentación mía y proyectos",
      ruta: "https://github.com/rcuevaspantoja/portafolio",
      imagen: minPortafolio,
      descripcion:
        "Portafolio donde se almacenará la gran parte de mis proyectos de programación y CV",
      tecnologias: (
        <>
          {" "}
          <ImHtmlFive/> <SiCss3 /> <SiReact /> <SiJavascript />{" "}
        </>
      ),
    },
    {
      nombre: "Web con información de Peliculas y Series",
      ruta: "https://github.com/rcuevaspantoja/Informacion-Peliculas",
      imagen:
        "https://raw.githubusercontent.com/rcuevaspantoja/Informacion-Peliculas/main/src/imagenes/Capturas/captura_todo.png",
      descripcion:
        "Sitio web en React con consumo de API para postular a Jr Dev",
      tecnologias: (
        <>
          {" "}
          <ImHtmlFive/> <SiCss3 /> <SiReact /> <SiJavascript /> <TbApi />{" "}
        </>
      ),
    },
    {
      nombre: "Enlaces de biografía para psicologa online",
      ruta: "https://github.com/rcuevaspantoja/Biolinks-PsValentinaMoyano",
      imagen:
        "https://raw.githubusercontent.com/rcuevaspantoja/Biolinks-PsValentinaMoyano/master/src/archivos/Capturas/Screenshot_2.png",
      descripcion:
        "Sitio web en React para la biografia de la psicologa online Valentina Moyano",
      tecnologias: (
        <>
          {" "}
          <ImHtmlFive/> <SiCss3 /> <SiReact /> <SiJavascript />{" "}
        </>
      ),
    },
  ];

  const otros = [
    {
      nombre: "Problemas de programación para entrevistas",
      ruta: "https://github.com/rcuevaspantoja/problemas-entrevistas",
      imagen:
        "http://s3.amazonaws.com/cb-talent-development-cortex-prod/media/attachments/000/001/682/original/shutterstock_248597491_IntTest.jpg?1452861845",
      descripcion: "Repositorio de preguntas de nivel medio",
      tecnologias: (
        <>
          {" "}
          <SiJavascript />{" "}
        </>
      ),
    },
    {
      nombre: "Apuntes Machine Learning",
      descripcion:
        "Apuntes sacados personales del curso de Santiago Hernandez. (no terminado)",
      ruta: PDF,
      imagen:
        "https://www.iberdrola.com/documents/20125/40921/machine_learning_746x419.jpg/15ff7571-4cfc-d9f0-5ef4-9c2e9306ad88?t=1627968463400",
      tecnologias: (
        <>
          {" "}
          <FaBrain />{" "}
        </>
      ),
    },
  ];

  const tarjeta = (titulo1, fuentes) => {
    return (
      <div class="container">
        <div className="TituloSegundo">
          <Typography variant="h3"> {titulo1} </Typography>
        </div>

        <div class="row">
          {fuentes.map(({ nombre, ruta, imagen, descripcion, tecnologias }) => (
            <div class="col" align="center">
              <Card id="Card">
                <CardActionArea href={ruta} target="_blank">
                  <CardMedia
                    component="img"
                    height="140"
                    minwidth="75vw"
                    image={imagen}
                    alt={nombre}
                  />

                  <CardContent style={{ backgroundColor: "white bone" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {nombre}
                    </Typography>

                    <Typography
                      className="CardDescripcion"
                      variant="body2"
                      color="text.secondary"
                    >
                      {descripcion}
                    </Typography>

                    <div className="proyectoTecnologias">
                      <Typography variant="h5">
                        <hr />
                        {tecnologias}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="body-proyecto">
      {tarjeta("React y Javascript", proyectos)}
      {tarjeta("Otros", otros)}
    </div>
  );
}
