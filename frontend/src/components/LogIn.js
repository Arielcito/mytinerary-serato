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

const RegistrationForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
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
            variant="contained"
            color="error"
            sx={{ width: "100%", marginBottom: "1rem" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    );
  };


export default RegistrationForm;
