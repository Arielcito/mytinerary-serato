import "../styles/NavBar.css";
import React from "react";
import axios from "axios";
import { Box } from "@mui/system";
import Itinerary from "../components/Itinerary";
export default class City extends React.Component {
  state = { city: { title: "loading..." } };
  id = this.props.params.id;

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/cities/" + this.id)
      .then((res) => this.setState({ city: res.data.response }));
  }
  render() {
    const image = this.state.city.src;
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
          <h2 style={{ textAlign: "center", fontSize: "100px" }} id="cityTitle">
            {this.state.city.title}
          </h2>
        </Box>
        <Itinerary />
      </>
    );
  }
}
