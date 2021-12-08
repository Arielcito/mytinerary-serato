import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardsComp from "./CardsComp";
import Carousel from "react-elastic-carousel";
import "../styles/NavBar.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Steps from "./steps";
import MapIcon from "@mui/icons-material/Map";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const useStyles = makeStyles((theme) => ({
  titulo: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
    marginBottom: "3rem",
    color: "white",
    fontFamily: "Shippori Antique",
  },
  containter: {
    width: "100%",
    marginBottom: "5rem",
  },
  main: {
    background: "#1e2326",
  },
}));
const CarouselComp = (props) => {
  const classes = useStyles();
  const { cities, fetchCities } = props;
  let arrayCarousel = splitArray(cities, 4);
  useEffect(() => {
    fetchCities();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box className={classes.main} id="main">
      <Container className={classes.containerCarousel}>
        <Typography variant="h4" className={classes.titulo}>
          <ExploreIcon sx={{ fontSize: 30 }} />
          Start Your Journey
        </Typography>
        <Steps></Steps>
      </Container>
      <Box className={classes.containter}>
        <Typography variant="h4" className={classes.titulo}>
          <MapIcon sx={{ fontSize: 30 }} />
          Popular trips
        </Typography>
        <Carousel
          disableArrowsOnEnd={false}
          enableAutoPlay={true}
          autoPlaySpeed={10000}
          infinite
        >
          {arrayCarousel.map((image, index) => {
            return <CardsComp item={image} key={index} />;
          })}
        </Carousel>
      </Box>
    </Box>
  );
};
//funcion que recibe un array y devuelve un array de arrays con la cantidad de elementos n
function splitArray(array, n) {
  let length = 12;
  let i = 0;
  let auxArray = [];
  while (i < length) {
    auxArray.push(array.slice(i, (i += n)));
  }
  return auxArray;
}
const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities,
};

const mapStateToProps = (state) => {
  return { cities: state.citiesReducer.cities };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComp);
