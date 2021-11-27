import React, { useEffect, useState } from "react";
import { Grid, FormControl, InputAdornment, Input } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CardComp from "./CardComp";
import backgroundImage from "../assets/background-cities.jpg";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

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
    width: "50rem",
    height: "3rem",
  },
  containerInput: {
    alignSelf: "center",
  },
}));

export default function CitiesComp() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios.get("http://localhost:4000/api/cities").then((res) => {
      setSearch(res.data.response);
      setCities(res.data.response);
    });
  }, []);

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    if (value) {
      result = cities.filter(
        (city) =>
          city.title.toLowerCase().startsWith(value) ||
          city.country.toLowerCase().startsWith(value)
      );
      setSearch(result);
    } else {
      setSearch(cities);
    }
  };
  return (
    <>
      <Box>
        <Box className={classes.container}>
          <FormControl variant="standard" className={classes.containerInput}>
            <Input
              className={classes.input}
              placeholder="Where to?"
              onChange={(event) => handleChange(event)}
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
          <Grid container sx={{ justifyContent: "center" }}>
            {search.map((city, index) => {
              return (
                <Grid item key={index}>
                  <CardComp photo={city} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
