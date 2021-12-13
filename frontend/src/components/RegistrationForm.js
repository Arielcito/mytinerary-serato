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
import { Toaster } from "react-hot-toast";
import { useFormik, Form } from "formik";
import * as Yup from "yup";

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
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      imageURL: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "must be 3 characters at least")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      surname: Yup.string()
        .min(3, "must be 3 characters at least")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(3, "must be 3 characters at least")
        .required("Required"),
      imageURL: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
    }),
    onSubmit: () => {
      handleSubmit(
        inputEmail.current.value,
        inputPassword.current.value,
        inputName.current.value,
        inputSurname.current.value,
        inputImageURL.current.value,
        inputCountry.current.value
      );
      inputEmail.current.value = "";
      inputPassword.current.value = "";
      inputName.current.value = "";
      inputSurname.current.value = "";
      inputImageURL.current.value = "";
      inputCountry.current.value = "";
    },
  });
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
  const handleSubmit = async (
    email,
    password,
    name,
    surname,
    imageURL,
    country
  ) => {
    await props.registerUser(email, password, name, surname, imageURL, country);
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
        <Form>
          <TextField
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            inputRef={inputName}
            label="Name"
            type="text"
            className={classes.formInput}
            sx={{ marginBottom: "1rem", marginRight: "3.5rem", width: "45%" }}
            InputProps={{
              endAdornment: <AccountCircle />,
            }}
            variant="filled"
          />
          <TextField
            name="surname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
            inputRef={inputSurname}
            label="Surname"
            type="text"
            className={classes.formInput}
            sx={{ marginBottom: "1rem", width: "45%" }}
            InputProps={{
              endAdornment: <AccountCircle />,
            }}
            variant="filled"
          />
          <TextField
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            name="password"
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            label="Password"
            fullWidth
            sx={{
              marginBottom: "1rem",
              backgroundColor: "rgba(256,256,256,.3)",
              borderRadius: "10px",
            }}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.imageURL && Boolean(formik.errors.imageURL)}
            helperText={formik.touched.imageURL && formik.errors.imageURL}
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
            sx={{ width: "40%", margin: "1rem 2rem" }}
          >
            Sign Up
          </Button>
          <Toaster />
        </Form>
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
