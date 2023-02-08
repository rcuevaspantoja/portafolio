import React from 'react'
import { styled, createTheme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import imagen1 from '../../archivos/Curriculum.jpg';

function DescargarCV() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round',
        'sans-serif',
      ].join(','),
  },});

  //boton de imagen
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.1,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid black',
      },
    },
  }));

  //estilo de imagen
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  //sombra
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.35,
    transition: theme.transitions.create('opacity'),
  }));
  
  //Linea abajo de la palabra
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.black,
    position: 'absolute',
    bottom: -3,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

    
  return (
    <div className='Curriculum-imagen'>


      <ImageButton
          focusRipple
          key={"Descargar"}
         
          style={{
            width: 400,
            height: 566,
          }}
        >
      <img src={ imagen1 } alt="Imagen Curriculum" style={{maxWidth: 400}}
      >
      </img>
        <ImageBackdrop className="MuiImageBackdrop-root" />
          <a href={require("../../archivos/Curriculum_2023.pdf")} download="Curriculum-RodolfoCuevas.pdf">
          <Image>
              <Typography
                component="span"
                variant="subtitle1"
                theme={theme}
                style={{ fontSize: 20, color:'#000000'}}
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                
                {"Descargar"}
                <ImageMarked />
              </Typography>
          </Image>
          </a>

        </ImageButton>



    </div>
  )
}

export default DescargarCV