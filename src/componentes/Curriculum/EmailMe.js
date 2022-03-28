import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';


function EmailMe() {

  return (
    <div className='EmailMe'>

        <TextField  
            style={{width: 240}}
            InputProps={{readOnly: true}}
            defaultValue="rcuevaspantoja@gmail.com"
            variant="outlined" 
        />
        


        <Link underline="none" href="mailto:rcuevaspantoja@gmail.com?subject=Contacto vía sitioweb&body=Hola, me gustaría ponerme en contacto contigo">
          <Button className='escribirme' 
          variant="contained" color="error"  
          startIcon={<EmailIcon />}
          onClick={() => window.location = 'mailto:rcuevaspantoja@gmail.com'}
          >
              Escribir
          </Button> 
        </Link>


    </div>
  )
}

export default EmailMe