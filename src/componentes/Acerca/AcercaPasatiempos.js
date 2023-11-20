import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import GitHubCalendar from "react-github-calendar";

function AcercaPasatiempos() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Varela Round", "sans-serif"].join(","),
    },
  });

  return (
    <div class="calendar">
      <Typography theme={theme} variant="h4">
        Calendario de Github
      </Typography>
      <GitHubCalendar username="rcuevaspantoja" />
    </div>
  );
}

export default AcercaPasatiempos;
