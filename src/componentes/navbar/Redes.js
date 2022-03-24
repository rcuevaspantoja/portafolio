import React, { useState } from 'react'
import { createTheme } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Redes = () => {

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Varela Round',
            'sans-serif',
          ].join(','),
        },});

    const [hoverInstagram, setHoverInstagram] = useState(false);
    const [hoverTwitter, setHoverTwitter] = useState(false);
    const [hoverLinkedIn, setHoverLinkedIn] = useState(false);

    const onHoverInstagram = () => {
        setHoverInstagram(true);
    };
    const onLeaveInstagram = () => {
        setHoverInstagram(false);
    };    
    const onHoverTwitter = () => {
        setHoverTwitter(true);
    };
    const onLeaveTwitter = () => {
        setHoverTwitter(false);
    };
    const onHoverLinkedIn = () => {
        setHoverLinkedIn(true);
    };
    const onLeaveLinkedIn = () => {
        setHoverLinkedIn(false);
    };


    return (
      <>
        <div>
        {hoverInstagram ? <Typography theme={theme} style={{ fontSize: 20, color:'#707070'}}> rcuevaspantoja </Typography> : "" }
        {hoverTwitter ? <Typography theme={theme} style={{ fontSize: 20, color:'#707070'}}> @rcuevaspantoja </Typography> : "" }
        {hoverLinkedIn ? <Typography theme={theme} style={{ fontSize: 20, color:'#707070'}}> Rodolfo </Typography> : "" }
        
        </div>
        <div className='Instagram' onMouseEnter={onHoverInstagram} onMouseLeave={onLeaveInstagram}>       
            <IconButton size="large" href='https://www.instagram.com/rcuevaspantoja/' target="_blank">
            <div className='Instagram'><InstagramIcon style={{ fontSize: 40 }} fontSize="inherit" /></div>
            </IconButton>
        </div>

        <div className='Twitter' onMouseEnter={onHoverTwitter} onMouseLeave={onLeaveTwitter}>     
            <IconButton size="large" href='https://twitter.com/rcuevaspantoja' target="_blank">
                <div className='Twitter'><TwitterIcon style={{ fontSize: 40 }} fontSize="inherit" /></div>
            </IconButton>
        </div>

        <div className='LinkedIn' onMouseEnter={onHoverLinkedIn} onMouseLeave={onLeaveLinkedIn}>        
            <IconButton size="large" href='https://www.linkedin.com/in/rodolfo-cuevas-7407231b5/' target="_blank"> 
                <div className='LinkedIn'><LinkedInIcon style={{ fontSize: 40 }} fontSize="inherit" /></div>
            </IconButton>
        </div>
      </>
    )
}

export default Redes