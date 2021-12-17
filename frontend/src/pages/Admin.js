import React, { Component } from "react";
import backgroundAdmin from "../assets/adminpage.jpg";
import Box from "@mui/material/Box";
import ItineraryAdmin from "../components/Admin/ItineraryAdmin";

export default class Admin extends Component {
  render() {
    return (
      <Box
        sx={{
          backgroundImage: `url(${backgroundAdmin})`,
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <ItineraryAdmin></ItineraryAdmin>
      </Box>
    );
  }
}
