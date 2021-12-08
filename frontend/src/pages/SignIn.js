import LogIn from '../components/LogIn'
import React from "react";
import backgroundSignUp from "../assets/registerbackground.jpg";
import { Box } from '@mui/system';
export default class SignIn extends React.Component {
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
    render(){
        return(
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
          <LogIn/>
      </Box>
        )
    }
}