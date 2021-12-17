import "../styles/NavBar.css";
import React from "react";
import { Box } from "@mui/system";
import Itinerary from "../components/Itinerary";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Loader from "../components/Loader";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
class City extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchCities();
    this.props.fetchItineraries();
    window.scroll({
      top: 0,
      left: 0,
    });
  }
  render() {
    let id = this.props.params.id;
    let city = this.props.cities.find((city) => city._id === id);
    let image = "";
    if (city) {
      image = city.src;
    }
    let imageSrc = "";
    if (image) {
      imageSrc = require(`../assets/carousel/${image}`).default;
    }
    let arrayItineraries = this.props.itineraries.filter(
      (itinerary) => itinerary.city[0]._id === id
    );
    console.log(this.props.itineraries);
    return (
      <>
        <Box
          sx={{
            backgroundImage: `url(${imageSrc})`,
            width: "100vw",
            height: "60vh",
            backgroundSize: "cover",
            backgroundPositionY: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "100px",
              textShadow: "4px 4px 3px #000",
            }}
            id="cityTitle"
          >
            {city && city.title}
          </h2>
        </Box>
        {this.props.loading ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}
          >
            <Loader />
          </Box>
        ) : arrayItineraries && arrayItineraries.length === 0 ? (
          <Box
            sx={{
              width: "40vw",
              height: "15rem",
              margin: "2rem auto",
              border: "1px solid #000",
              overflow: "hidden",
            }}
            id="noItineraries"
          >
            <Box
              sx={{
                backgroundColor: "#000",
                padding: "1rem",
                textAlign: "center",
                fontSize: "2rem",
              }}
            >
              <h2>Sorry!</h2>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                color: "rgba(0,0,0,.6)",
                fontSize: "1.43em",
                fontWeight: "700",
                marginTop: "1rem",
              }}
            >
              We dont have any itinerary yet.
            </Box>
          </Box>
        ) : (
          arrayItineraries.map((itinerary) => (
            <Itinerary id={id} Itinerary={itinerary} />
          ))
        )}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link to="/cities">
            <Button
              sx={{ backgroundColor: "#000", color: "white", margin: "4rem" }}
              id="backToCities"
            >
              Back To Cities
            </Button>
          </Link>
        </Box>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    user: state.authReducer.user,
    itineraries: state.itinerariesReducer.itineraries,
    loading: state.itinerariesReducer.loading,
    userData: state.authReducer.userData,
    comments: state.authReducer.comments,
  };
};
const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities,
  likeItinerary: itinerariesActions.likeItinerary,
  getCommentaries: itinerariesActions.getCommentaries,
  fetchItineraries: itinerariesActions.fetchItineraries,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
