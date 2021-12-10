import {
  IconButton,
  InputLabel,
  FormControl,
  FilledInput,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import GoogleLogin from "react-google-login";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(0,0,0,.5)",
    width: "40rem",
    height: "20rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    borderRadius: "5%",
    marginTop: "3rem",
    overflow: "hidden",
  },
  formInput: {
    backgroundColor: "rgba(256,256,256,.3)",
    borderRadius: "10px",
  },
  title: {
    fontSize: "45px",
  },
  callToAction: {
    color: "rgba(0,0,0,.5)",
  },
}));
const RegistrationForm = (props) => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  
  const responseGoogle = (res) => {
    let googleUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      google:true
    }
    props.logInUser(googleUser).then(res => res.data.success).catch( err => console.err(err))
  };
  const handleSubmitInputs = (e) => {
    e.preventDefault();
    handleSubmit(inputEmail.current.value, inputPassword.current.value);
  };

  const handleSubmit = async (email, password) => {
    props.logInUser(email, password);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box className={classes.container}>
      <h2 className={classes.title} id="newAccount">
        {" "}
        Welcome back !
      </h2>
      <Box sx={{ width: "90%" }}>
        <form onSubmit={(e) => handleSubmitInputs(e)}>
          <FormControl
            id="outlined-Email-input"
            label="Email"
            type="text"
            autoComplete="current-Email"
            variant="filled"
            className={classes.formInput}
            sx={{ marginBottom: "1rem" }}
            color="success"
            fullWidth
            required
          >
            <InputLabel htmlFor="filled-adornment-password">Email</InputLabel>
            <FilledInput
              inputRef={inputEmail}
              id="filled-adornment-Email"
              type="text"
              endAdornment={
                <IconButton edge="end">
                  <EmailIcon />
                </IconButton>
              }
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              marginBottom: "1rem",
              backgroundColor: "rgba(256,256,256,.3)",
              borderRadius: "10px",
            }}
            variant="filled"
            color="success"
            required
          >
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              inputRef={inputPassword}
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="error"
            sx={{ width: "100%", marginBottom: "1rem" }}
          >
            Sign In
          </Button>
          <GoogleLogin
            clientId="778603027811-79eh6q3tq939m9dqdmse2s9vhrk2esqo.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <Toaster />
        </form>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = {
  logInUser: authActions.logInUser,
};
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.userlog,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
