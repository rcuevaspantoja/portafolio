import React from "react";
import profilePic from "../../archivos/img/profile-pic.jpg";
import ErrorIcon from "@mui/icons-material/Error";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import resumeESP from '../../archivos/pdf/Resume_RodolfoCuevas_ESP.pdf'

function FotodePerfil() {
  
  const disponible = (
    <>
      <div className="opentowork">
        <ErrorIcon className="simbolo_alerta" style={{ fontSize: "50px" }} />
        <p>Disponible para trabajar!</p>
      </div>

      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        href={resumeESP}
        target="_blank"
        style={{
          backgroundColor: "#be2af2",
          width: "200px",
          height: "50px",
          borderRadius: "12px",
        }}
      >
        Descargar CV
      </Button>
    </>
  );

  return (
    <div className="fotodeperfil">
      <img className="profile-pic" src={profilePic} alt="Avatar" />

      {disponible}
    </div>

    
  );
}

export default FotodePerfil;
