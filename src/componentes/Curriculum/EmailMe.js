import React from 'react'
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';


function EmailMe() {

  const correo = 'rcuevaspantoja@gmail.com'

  return (
    <div className='EmailMe'>
        
        <TextField  
            style={{width: 290}}
            defaultValue= { correo }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" >
                  <IconButton onClick={ navigator.clipboard.writeText( correo ) }>
                    <ContentCopyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  </IconButton>
                </InputAdornment>
              ),  readOnly: true,
            }}
        />
    </div>
  )
}

export default EmailMe