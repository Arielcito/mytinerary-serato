import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//estilado de las slides
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "calc(1vw+1rem)",
    height: "40vh",
    cursor: "pointer",
  },
  container: {
    width: "30rem",
    height: "40vh",
    margin: "1rem",
    overflow: "hidden",
  },
  titulo: {
    width: "100%",

    fontSize: "28px",
    lineHeight: "32px",
    position: "relative",
    top: "50%",
    color: "#fff",
    background: "rgba(0,0,0,.562)",
    textAlign: "center",
  },
}));
//componente de las slides
const CardComp = ({ photo }) => {
  const imageSrc = require(`../assets/carousel/${photo.src}`).default;
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        className={classes.card}
        id="card"
        sx={{ backgroundImage: `url(${imageSrc})` }}
      >
        <h3 className={classes.titulo}>
          <LocationOnIcon />
          {photo.title}
        </h3>
      </Box>
    </Box>
  );
};

export default CardComp;
