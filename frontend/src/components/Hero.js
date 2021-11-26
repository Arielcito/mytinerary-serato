import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import background from "../assets/background.jpg";
import { makeStyles } from "@mui/styles";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
//estilado del Hero
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#1e2326",
    backgroundImage: `url(${background})`,
    height: "100vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "none",
    backgroundPositionY: "-5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  p: {
    fontWeight: 500,
    fontSize: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonHero: {
    width: "50%",
    textDecoration: "none",
  },
}));
//componente hero
const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.hero} id="hero">
      <Box className={classes.p}>
        <h2 id="heroTitle">MyTinerary</h2>
        <p id="slogan">
          Find your perfect trip, designed by insiders who know and love their
          cities!
        </p>
        <Link to={`/Cities`} className={classes.buttonHero}>
          <Tooltip title="Go To Cities" enterDelay={500} leaveDelay={200}>
            <Button variant="contained" size="medium" color="error">
              Start your trip
            </Button>
          </Tooltip>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
