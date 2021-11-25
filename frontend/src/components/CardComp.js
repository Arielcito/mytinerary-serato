import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
//estilado de las slides
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    width: "calc(1vw+1rem)",
    height: "40vh",
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
  },
  container: {
    width: "30rem",
    height: "40vh",
    margin: "1rem",
    overflow: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
  },
  titulo: {
    width: "100%",
    fontSize: "28px",
    lineHeight: "32px",
    color: "#fff",
    background: "rgba(0,0,0,.562)",
    textAlign: "center",
  },
  titleContainer: {
    position: "relative",
    top: "-50%",
  },
  footer: {
    color: "rgba(0,0,0,.87)",
    backgroundColor: "rgba(255,255,255,.92)",
    padding: "18px 20px 16px",
    fontSize: "13px",
    overflow: "hidden",
    position: "relative",
    top: "-5.5rem",
    textOverflow: "ellipsis",
  },
}));
//componente de las slides
const CardComp = ({ photo }) => {
  const imageSrc = require(`../assets/carousel/${photo.src}`).default;
  const classes = useStyles();

  return (
    <Link to={`/city/${photo.title}`}>
      <Box className={classes.container}>
        <Box
          className={classes.card}
          id="card"
          sx={{ backgroundImage: `url(${imageSrc})` }}
        ></Box>
        <Box className={classes.titleContainer}>
          <h3 className={classes.titulo}>
            <LocationOnIcon />
            {photo.title}
          </h3>
        </Box>
        {photo.country && (
          <Box className={classes.footer}>
            <h4>{photo.country}</h4>
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default CardComp;
