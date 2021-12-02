import "../styles/NavBar.css";
import React from "react";
import { Box } from "@mui/system";
import Itinerary from "../components/Itinerary";
import { connect } from "react-redux";
import filterActions from "../redux/actions/filterActions";
class City extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchCities();
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
        <Itinerary id={id} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.filterReducer.cities,
  };
};
const mapDispatchToProps = {
  fetchCities: filterActions.fetchCities,
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
