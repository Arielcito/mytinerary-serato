import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import CardComp from "./CardComp";
import backgroundImage from "../assets/background-cities.jpg";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios'

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
  },
  containerInput: {
    alignSelf: "center",
  },
}));

export default function CitiesComp() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const classes = useStyles();

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
      .then((res) => setCities(res.data.response))
    //   axios.post("http://localhost:4000/api/cities", {})
  }, []);

  const handleChange = (e) => {
    setSearch(e.taget.value);
    searchFilter()
  }
  const searchFilter = () => {
    if (search.length > 0) {
      let resultado = cities.filter(
        (city) =>
          city.title.toLowerCase().includes(search) ||
          city.country.toLowerCase().includes(search)
      );
      setCities(resultado);
    }
  };

  return (
    <>
      <Box >
        <Box className={classes.container}>
          <div className={classes.containerInput}>
            <SearchIcon sx={{ fontSize: "50px" }} />
            <TextField
              className={classes.input}
              placeholder="Where to?"
              value={search}
              onChange={handleChange}
            ></TextField>
          </div>
        </Box>
        <Box>
          <Grid container sx={{justifyContent:"center" }}>
            {cities.map((city, index) => {
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
