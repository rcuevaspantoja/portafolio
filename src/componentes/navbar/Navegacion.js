import React from 'react'
import { createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



export const Navegacion = () =>{

    const theme = createTheme({
      typography: {
        fontFamily: [
          'Varela Round',
          'sans-serif',
        ].join(','),
      },});


    return (
      <>

        <Button variant="text" component={Link} to="/acerca"> 
          <Typography theme={theme} style={{ fontSize: 20, color:'#707070'}}>Acerca</Typography>
        </Button>

        <Button variant="text" component={Link} to="/proyectos"> 
          <Typography theme={theme} style={{ fontSize: 20, color:'#707070'}}>Proyectos</Typography>
        </Button>
        
        <Button variant="text" component={Link} to="/curriculum"> 
          <Typography theme={theme} style={{ fontSize: 20, color:'#707070'}}>Curriculum</Typography>
        </Button>

        
        
        
      </>
    )
  
}

export default Navegacion