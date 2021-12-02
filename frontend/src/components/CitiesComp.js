import React, { useEffect, useState } from "react";
import { Grid, FormControl, Input } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CardComp from "./CardComp";
import backgroundImage from "../assets/background-cities.jpg";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { connect } from "react-redux";
import filterActions from "../redux/actions/filterActions";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: "60vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    backgroundColor: "rgba(256,256,256,.8)",
    borderRadius: "100px",
    width: "50vw",
    height: "3rem",
  },
  containerInput: {
    alignSelf: "center",
  },
}));

const CitiesComp = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { cities, fetchCities, filterCities, auxiliar, loading } = props;
  const classes = useStyles();
  useEffect(() => {
    fetchCities();
  }, []);

  const handleValue = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  return (
    <>
      <Box>
        <Box className={classes.container}>
          <FormControl variant="standard" className={classes.containerInput}>
            <Input
              className={classes.input}
              placeholder="Where to?"
              onChange={(event) => {
                filterCities(cities, event.target.value);
                handleValue(event);
              }}
              id="input-with-icon-adornment"
              startAdornment={
                <SearchIcon
                  sx={{
                    fontSize: "30px",
                    color: "rgba(0,0,0,.7)",
                    marginLeft: "1rem",
                  }}
                />
              }
            />
          </FormControl>
        </Box>
        <Box>
          <Grid container sx={{ justifyContent: "center", margin: "1rem" }}>
            <Grid item xs={12}>
              <Alert
                severity="error"
                style={{ display: auxiliar ? "none" : "block" }}
              >
                <AlertTitle>No results found for '{inputValue}'</AlertTitle>
                We couldnt found your request 😿 —{" "}
                <strong>check it out!</strong>
              </Alert>
            </Grid>
            {loading ? (
              <Loader />
            ) : (
              auxiliar.map((city, index) => {
                return (
                  <Grid item key={index} xs={7} lg={4} md={4}>
                    <CardComp photo={city} />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
const mapDispatchToProps = {
  fetchCities: filterActions.fetchCities,
  filterCities: filterActions.filterCities,
};

const mapStateToProps = (state) => {
  return {
    cities: state.filterReducer.cities,
    auxiliar: state.filterReducer.auxiliar,
    loading: state.filterReducer.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesComp);
