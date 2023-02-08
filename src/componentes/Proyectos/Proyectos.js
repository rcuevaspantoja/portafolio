
import React from 'react'
import "./Proyectos.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Proyectos() {
    
  const fuentes = [
    {
      nombre: 'Web con información de Peliculas y Series',
      ruta: 'https://github.com/rcuevaspantoja/Informacion-Peliculas',
      imagen: 'https://raw.githubusercontent.com/rcuevaspantoja/Informacion-Peliculas/main/src/imagenes/Capturas/captura_todo.png',
      descripcion: 'Sitio web en React con consumo de API para postular a Jr Dev' 
    },
    {
      nombre: 'Enlaces de biografía para psicologa online',
      ruta: 'https://github.com/rcuevaspantoja/Biolinks-PsValentinaMoyano',
      imagen: 'https://raw.githubusercontent.com/rcuevaspantoja/Biolinks-PsValentinaMoyano/master/src/archivos/Capturas/Screenshot_2.png',
      descripcion: 'Sitio web en React para la biografia de la psicologa online Valentina Moyano'
    }
  ]

  return (
    <div className='Proyectos'>
      {fuentes.map(({nombre, ruta, imagen, descripcion}) => (
        <div className='Card'>
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea href={ruta} target="_blank">
            <CardMedia 
              component="img"
              height="140"
              image={imagen}
              alt={nombre}
              
            />
            <CardContent style={{backgroundColor: "white bone"}}>
              <Typography gutterBottom variant="h5" component="div">
                {nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  )
}
