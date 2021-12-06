import {
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "rgba(0,0,0,.5)",
    width: "40rem",
    height: "40rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  formInput: {
    backgroundColor: "rgba(256,256,256,.3)",
  },
  title: {
    fontSize: "60px",
    color: "#",
  },
}));
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const RegistrationForm = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [currency, setCurrency] = useState("EUR");
  const classes = useStyles();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setCurrency(event.target.value);
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
      <h2 className={classes.title}> Create new account</h2>
      <h3>Already Have An Account?</h3>
      <Link to="/SignIn">Sign In</Link>
      <Box>
        <TextField
          id="outlined-Name-input"
          label="Name"
          type="text"
          autoComplete="current-Name"
          variant="filled"
          className={classes.formInput}
          sx={{ margin: "1rem" }}
        />
        <TextField
          id="outlined-Surname-input"
          label="Surname"
          type="text"
          autoComplete="current-Surname"
          variant="filled"
          className={classes.formInput}
          sx={{ margin: "1rem" }}
        />
        <TextField
          id="outlined-email-input"
          label="email"
          type="text"
          autoComplete="current-email"
          variant="filled"
          fullWidth
          sx={{ margin: "1rem" }}
          className={classes.formInput}
        />
        <FormControl
          fullWidth
          sx={{ margin: "1rem" }}
          variant="filled"
          className={classes.formInput}
        >
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
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
        <TextField
          id="filled-basic"
          label="Image URL"
          variant="filled"
          sx={{ margin: "1rem" }}
          className={classes.formInput}
          fullWidth
        />
        <TextField
          id="filled-select-currency"
          select
          label="Select a country"
          value={currency}
          onChange={handleSelectChange}
          variant="filled"
          className={classes.formInput}
          sx={{ margin: "1rem" }}
          fullWidth
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
