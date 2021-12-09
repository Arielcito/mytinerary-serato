import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRef, useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Button, Autocomplete } from "@mui/material";
import { FormControl, IconButton, InputLabel } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FilledInput } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ImageIcon from "@mui/icons-material/Image";
import { connect } from "react-redux";
import authActions from "../redux/actions/authActions";
import zxcvbn from "zxcvbn";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(0,0,0,.5)",
    width: "40rem",
    maxHeight: "35rem",
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
  const classes = useStyles();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputName = useRef();
  const inputSurname = useRef();
  const inputImageURL = useRef();
  const inputCountry = useRef();
  const testedResult = zxcvbn(values.password);
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
  const handleSubmit = async (
    email,
    password,
    name,
    surname,
    imageURL,
    country
  ) => {
    props.registerUser(email, password, name, surname, imageURL, country);
  };
  const handleSubmitInputs = (e) => {
    e.preventDefault();
    handleSubmit(
      inputEmail.current.value,
      inputPassword.current.value,
      inputName.current.value,
      inputSurname.current.value,
      inputImageURL.current.value,
      inputCountry.current.value
    );
      inputEmail.current.value = ''
      inputPassword.current.value = ''
      inputName.current.value = ''
      inputSurname.current.value = ''
      inputImageURL.current.value= ''
      inputCountry.current.value = ''
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
        <form onSubmit={(e) => handleSubmitInputs(e)}>
          <FormControl
            id="outlined-Name-input"
            label="Name"
            type="text"
            autoComplete="current-Name"
            variant="filled"
            className={classes.formInput}
            sx={{ marginBottom: "1rem", marginRight: "3.5rem", width: "45%" }}
            color="success"
            required
          >
            <InputLabel htmlFor="filled-adornment-password">Name</InputLabel>
            <FilledInput
              inputRef={inputName}
              id="filled-adornment-Name"
              type="text"
              endAdornment={
                <IconButton edge="end">
                  <AccountCircle />
                </IconButton>
              }
            />
          </FormControl>
          <FormControl
            id="outlined-Surname-input"
            label="Surname"
            type="text"
            autoComplete="current-Surname"
            variant="filled"
            className={classes.formInput}
            sx={{ marginBottom: "1rem", width: "45%" }}
            color="success"
            required
          >
            <InputLabel htmlFor="filled-adornment-password">Surname</InputLabel>
            <FilledInput
              inputRef={inputSurname}
              id="filled-adornment-Surname"
              type="text"
              endAdornment={
                <IconButton edge="end">
                  <AccountCircle />
                </IconButton>
              }
            />
          </FormControl>
          <FormControl
            id="outlined-Email-input"
            label="Email"
            type="email"
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
              type="email"
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
            className={classes.formInput}
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
          <FormControl
            id="outlined-Image-input"
            label="Image"
            type="text"
            autoComplete="current-Image"
            variant="filled"
            className={classes.formInput}
            sx={{ marginBottom: "1rem" }}
            color="success"
            fullWidth
            required
          >
            <InputLabel htmlFor="filled-adornment-password">
              Image URL
            </InputLabel>
            <FilledInput
              inputRef={inputImageURL}
              id="filled-adornment-Image"
              type="text"
              endAdornment={
                <IconButton edge="end">
                  <ImageIcon />
                </IconButton>
              }
            />
          </FormControl>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={
              props.countrys &&
              props.countrys.map((country) => country.name.common)
            }
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField inputRef={inputCountry} {...params} label="Select a country..." />}
            className={classes.formInput}
            
          />
          <Button
            type="submit"
            variant="contained"
            color="error"
            sx={{ width: "100%", marginBottom: "1rem", marginTop: "1rem" }}
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
  logInUser: authActions.logInUser,
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    countrys: state.authReducer.countrys,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
