import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRef, useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Button, Autocomplete } from "@mui/material";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import ImageIcon from "@mui/icons-material/Image";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import zxcvbn from "zxcvbn";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { GoogleLogin } from "react-google-login";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(0,0,0,.5)",
    width: "40rem",
    maxHeight: "42rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    borderRadius: "5%",
    marginTop: "7rem",
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
const createPasswordLabel = {
  0: "Weak",
  1: "Weak",
  2: "Fair",
  3: "Good",
  4: "Strong",
};
const RegistrationForm = (props) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState(false);
  const [errorArray, setErrorArray] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const classes = useStyles();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputName = useRef();
  const inputSurname = useRef();
  const inputImageURL = useRef();
  const inputCountry = useRef();
  const testedResult = zxcvbn(values.password);

  function findError(input){
    let error = errorMessage.find(error => error.label === input.current.name)
    return error
  }

  useEffect(() => {
    props.fetchCountrys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  const responseGoogle = (res) => {
    let googleUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      name: res.profileObj.givenName,
      surname: res.profileObj.familyName,
      imageURL: res.profileObj.imageUrl,
      country: "Argentina",
      google: true,
    };
    props.registerUser(
      googleUser.email,
      googleUser.password,
      googleUser.name,
      googleUser.surname,
      googleUser.imageURL,
      googleUser.country,
      googleUser.google
    );
  };
  const handleSubmitInput = (e) => {
    e.preventDefault();
    handleSubmitRegister(
      inputEmail.current.value,
      inputPassword.current.value,
      inputName.current.value,
      inputSurname.current.value,
      inputImageURL.current.value,
      inputCountry.current.value
    );
  };

  const handleSubmitRegister = async (
    email,
    password,
    name,
    surname,
    imageURL,
    country
  ) => {
    const errors = await props.registerUser(
      email,
      password,
      name,
      surname,
      imageURL,
      country
    );
    if (errors) {
      let auxLabel = [];
      let auxMessage = [];
      setError(true);
      toast.error('Error trying to submit')
      errors.message.map((error) => {
        auxLabel.push(error.context.label);
        auxMessage.push({ message: error.message, label: error.context.label });
        // toast.error(error.message ? error.message : "error");
      });
      setErrorMessage(auxMessage);
      setErrorArray(auxLabel);
    }
  };
  return (
    <Box className={classes.container}>
      <h2 className={classes.title} id="newAccount">
        {" "}
        Create new account
      </h2>
      <h3 className={classes.callToAction}>Already Have An Account? </h3>
      <Link to="/SignIn"> Sign In</Link>
      <Box sx={{ width: "90%", overflow: "hidden" }}>
        <form onSubmit={(e) => handleSubmitInput(e)}>
          <TextField
            helperText={ findError(inputName) && findError(inputName).message}
            name="name"
            inputRef={inputName}
            label="Name"
            type="text"
            id="nameInput"
            className={classes.formInput}
            sx={{ marginBottom: "1rem", marginRight: "2rem", width: "47%" }}
            InputProps={{
              endAdornment: <AccountCircle />,
            }}
            variant="filled"
            error={error && errorArray.includes(inputName.current.name) && true}
          />
          <TextField
           helperText={ findError(inputSurname) && findError(inputSurname).message}
            error={
              error && errorArray.includes(inputSurname.current.name) && true
            }
            name="surname"
            inputRef={inputSurname}
            label="Surname"
            type="text"
            className={classes.formInput}
            sx={{ marginBottom: "1rem", width: "47%" }}
            InputProps={{
              endAdornment: <AccountCircle />,
            }}
            variant="filled"
          />
          <TextField
           helperText={ findError(inputEmail) && findError(inputEmail).message}
            error={
              error && errorArray.includes(inputEmail.current.name) && true
            }
            name="email"
            inputRef={inputEmail}
            label="Email"
            type="text"
            className={classes.formInput}
            sx={{ marginBottom: "1rem" }}
            fullWidth
            InputProps={{
              endAdornment: <EmailIcon />,
            }}
            variant="filled"
          />
          <TextField
           helperText={ findError(inputPassword) && findError(inputPassword).message}
            error={
              error && errorArray.includes(inputPassword.current.name) && true
            }
            name="password"
            label="Password"
            fullWidth
            color="success"
            inputRef={inputPassword}
            id="filled-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            className={classes.formInput}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
            variant="filled"
          />
          <div className="password-strength-meter">
            <progress
              value={testedResult.score}
              max="4"
              sx={{ width: "100%" }}
              className={`password-strength-meter-progress strength-${
                createPasswordLabel[testedResult.score]
              }`}
            />
          </div>
          <label
            className="password-strength-meter-label"
            sx={{ color: "#fff", display: "flex" }}
          >
            <strong>Password strength:</strong>{" "}
            <span className="hola">
              {createPasswordLabel[testedResult.score]}
            </span>
          </label>
          <TextField
           helperText={ findError(inputImageURL) && findError(inputImageURL).message}
            error={
              error && errorArray.includes(inputImageURL.current.name) && true
            }
            name="imageURL"
            inputRef={inputImageURL}
            id="outlined-Image-input"
            label="ImageURL"
            type="text"
            autoComplete="current-Image"
            className={classes.formInput}
            sx={{ marginBottom: "1rem" }}
            color="success"
            fullWidth
            InputProps={{
              endAdornment: <ImageIcon />,
            }}
            variant="filled"
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            component="select"
            options={
              props.countrys &&
              props.countrys.map((country) => country.name.common)
            }
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                error={
                  error &&
                  errorArray.includes(inputCountry.current.name) &&
                  true
                }
                inputRef={inputCountry}
                {...params}
                label="Select a country..."
              />
            )}
            className={classes.formInput}
          />
          <GoogleLogin
            clientId="778603027811-79eh6q3tq939m9dqdmse2s9vhrk2esqo.apps.googleusercontent.com"
            buttonText="Sign Up"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <button
                className="login-with-google-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign up
              </button>
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="error"
            id="registerSubmit"
            sx={{ width: "40%", margin: "1rem" }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};


const mapDispatchToProps = {
  fetchCountrys: authActions.fetchCountrys,
  registerUser: authActions.registerUser,
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    countrys: state.authReducer.countrys,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
