import React from "react";
import axios from "axios";
import { Box } from "@mui/system";
import "../styles/NavBar.css";
import ButtonNav from "../components/Button";

export default class City extends React.Component {
  state = { city: { title: "loading..." } };
  id = this.props.params.id;

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/city/" + this.id)
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
        <Box sx={{ backgroundColor: "rgba(0,0,0,.5)" }}>
          <h3>
            Oops... this page is under construction, come back on sprint 3
          </h3>
          <ButtonNav page={"cities"}></ButtonNav>
        </Box>
      </>
    );
  }
}
