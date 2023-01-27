
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
      nombre: 'Calculadora de tiempo',
      ruta: 'https://google.com',
      imagen: 'https://thumbs.dreamstime.com/z/c%C3%B3mo-calcular-nuestro-tiempo-imagen-de-reloj-y-calculadora-sobre-fondo-blanco-181705459.jpg',
      descripcion: 'Calculadora para poder restar y sumar horas en formato reloj.' 
    },
    {
      nombre: 'Gameboy Advance Modificada',
      ruta: ' ',
      imagen: 'https://i.pinimg.com/originals/3b/5f/7e/3b5f7ecbafc3c902334595cae78da2fa.jpg',
      descripcion: 'Con un amor por la tecnología de antaño me adentro en las modificaciones para darle una nueva vida a consolas antiguas.'
    }
  ]

  return (
    <div className='Proyectos'>
      {fuentes.map(({nombre, ruta, imagen, descripcion}) => (
        <div className='Card'>
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imagen}
              alt={nombre}
            />
            <CardContent>
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
