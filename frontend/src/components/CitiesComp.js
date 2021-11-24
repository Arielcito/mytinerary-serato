import React, { useEffect, useState } from "react";
import { Autocomplete, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {makeStyles} from '@mui/styles'
import CardComp from "./CardComp";

const useStyles = makeStyles((theme) => ({
    container:{
        display: "flex",
        justifyContent:"center",
    },
    input:{
        margin: "3rem",
        width:"50rem"
    }
}))
export default function CitiesComp() {
  const [cities, setCities] = useState([])
    const classes = useStyles()

  useEffect(() => {
    fetch("http://localhost:4000/api/cities")
      .then(res => res.json())
      .then(data => setCities(data.response))
      .catch((err) => console.error(err.message))
  }, [])

  return (
      <>
        <Container>
        <Box className={classes.container}>
            <Autocomplete
                className={classes.input}
                disablePortal
                id="combo-box"
                options={cities}
                renderInput={(params) => <TextField {...params} label="Cities" />}
            />
        </Box>
        <Box>
            <Grid container>
                {cities.map((city,index) => {
                    return(
                    <Grid item key={index}>
                        <CardComp photo={city}  />
                    </Grid>
                    )
                })}
            </Grid>
        </Box>
        </Container>
      </>
  )
}
