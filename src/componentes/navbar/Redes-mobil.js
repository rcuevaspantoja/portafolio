import React, { useState } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const RedesMobil = (props) => {

    const [/* hoverInstagram,  */setHoverInstagram] = useState(false);
    const [/* hoverTwitter,  */setHoverTwitter] = useState(false);
    const [/* hoverLinkedIn,  */setHoverLinkedIn] = useState(false);

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
      <div className='Redes'>
        <div className='Instagram-mobil' onMouseEnter={onHoverInstagram} onMouseLeave={onLeaveInstagram}>
            
            <IconButton size="large" href='https://www.instagram.com/rudd.dev/' target="_blank">
            <div className='Instagram'><InstagramIcon style={{ fontSize: 40 }} fontSize="inherit" /></div>
            </IconButton>
        </div>

        <div className='Twitter-mobil' onMouseEnter={onHoverTwitter} onMouseLeave={onLeaveTwitter}>
            
            <IconButton size="large" href='https://twitter.com/rcuevaspantoja' target="_blank">
                <div className='Twitter'><TwitterIcon style={{ fontSize: 40 }} fontSize="inherit" /></div>
            </IconButton>
        </div>

        <div className='LinkedIn-mobil' onMouseEnter={onHoverLinkedIn} onMouseLeave={onLeaveLinkedIn}>
            
            <IconButton size="large" href='https://www.linkedin.com/in/rodolfo-cuevas-pantoja-7407231b5' target="_blank"> 
                <div className='LinkedIn'><LinkedInIcon style={{ fontSize: 40 }} fontSize="inherit" /></div>
            </IconButton>
        </div>
      </div>
    )
}

export default RedesMobil