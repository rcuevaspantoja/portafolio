import React, { useState } from "react";
import { createTheme } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Redes = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Varela Round", "sans-serif"].join(","),
    },
  });

  const [hoverGithub, setHoverGithub] = useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);

  const onHoverLinkedIn = () => {
    setHoverLinkedIn(true);
  };
  const onLeaveLinkedIn = () => {
    setHoverLinkedIn(false);
  };
  const onHoverGithub = () => {
    setHoverGithub(true);
  };
  const onLeaveGithub = () => {
    setHoverGithub(false);
  };

  return (
    <>
      <div>
        {hoverGithub ? (
          <Typography theme={theme} style={{ fontSize: 20, color: "#707070" }}>
            {" "}
            rcuevaspantoja{" "}
          </Typography>
        ) : (
          ""
        )}
        {hoverLinkedIn ? (
          <Typography theme={theme} style={{ fontSize: 20, color: "#707070" }}>
            {" "}
            Rodolfo{" "}
          </Typography>
        ) : (
          ""
        )}
      </div>

      <div
        className="Github"
        onMouseEnter={onHoverGithub}
        onMouseLeave={onLeaveGithub}
      >
        <IconButton
          size="large"
          href="https://www.Github.tv/rudddeveloper"
          target="_blank"
        >
          <div className="Github">
            <GitHubIcon style={{ fontSize: 40 }} fontSize="inherit" />
          </div>
        </IconButton>
      </div>

      <div
        className="LinkedIn"
        onMouseEnter={onHoverLinkedIn}
        onMouseLeave={onLeaveLinkedIn}
      >
        <IconButton
          size="large"
          href="https://www.linkedin.com/in/rodolfo-cuevas-pantoja-7407231b5"
          target="_blank"
        >
          <div className="LinkedIn">
            <LinkedInIcon style={{ fontSize: 40 }} fontSize="inherit" />
          </div>
        </IconButton>
      </div>
    </>
  );
};
export default Redes;
