import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';


function EmailMe() {



  return (
    <div className='EmailMe'>

        <TextField  
            style={{width: 240}}
            InputProps={{readOnly: true}}
            defaultValue="rcuevaspantoja@gmail.com"
            variant="outlined" 

        />
        
        <Button className='escribirme' variant="contained" color="error"  startIcon={<EmailIcon />}>
            Escribir
        </Button> 

    </div>
  )
}

export default EmailMe