import { Box } from "@mui/system";
import React from "react";
import backgroundSignUp from "../assets/registerbackground.jpg";
import RegistrationForm
 from "../components/RegistrationForm";
export default class SignIn extends React.Component {
  render() {
    return (
      <Box
        sx={{
          backgroundImage: `url(${backgroundSignUp})`,
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <RegistrationForm/>
      </Box>
    );
  }
}
