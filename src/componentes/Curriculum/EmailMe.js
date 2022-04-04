import React from 'react'
import TextField from '@mui/material/TextField';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import {useSpring, animated } from 'react-spring'

function EmailMe() {

  const correo = 'rcuevaspantoja@gmail.com'

  const springCurriculum2 = useSpring({
    from:{ opacity: 0 },
    to: { opacity: 1 },
    config: {duration: 1000} ,
    delay: 1000,

  })  

  return (
    <animated.div style={ springCurriculum2 } className='EmailMe'>
        
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
    </animated.div>
  )
}

export default EmailMe