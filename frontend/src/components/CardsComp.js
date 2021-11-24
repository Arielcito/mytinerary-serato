import React from "react";
import CardComp from "./CardComp";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
//estilado del container
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
}));
//creacion del container de las imagenes
const CardsComp = ({ item }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      {item.map((photo, index) => {
        return <CardComp photo={photo} />;
      })}
    </Grid>
  );
};

export default CardsComp;
