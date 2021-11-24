import { Box } from "@mui/system";
import React from "react";
import CitiesComp from "../components/CitiesComp";
import backgroundImage from "../assets/background-cities.jpg";
export default class Cities extends React.Component {
  render() {
    return (
      <>
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            width: "100%",
            height: "60vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 sx={{ textAlign: "center" }}>Cities</h1>
        </Box>
        <CitiesComp />
      </>
    );
  }
}
