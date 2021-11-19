import React from "react";
import MapIcon from '@mui/icons-material/Map';
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { List,ListItem } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const useStyles = makeStyles((theme) => ({
   container:{
       color:"white",
       display:"flex",
       justifyContent:"center",
       marginTop:"3rem",
        marginBottom:"5rem"
   },
   items:{
       display:"flex",
       flexDirection:"column"
   },
   list:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    textAlign:"center",
    position:"relative",
    
   },
   title:{
       color:"#FFA500",
       textAlign:"center",
       fontSize:"calc(.5em + 1vw)"
   },
   parraf:{
       color:"#ffcf97",
       fontSize:"calc(.25em + 1vw)"
   }
}))

const Steps = () =>{
    const classes = useStyles()

    return(
        <>
            <Box className={classes.container}>
                <List className={classes.list}>
                    <ListItem className={classes.items}>
                        <MapIcon className={classes.icons} sx={{width:"78px",height:"78px"}}/>
                        <h4 className={classes.title}>Get a personalized trip</h4>
                        <p className={classes.parraf}>A complete day by day itinerary<br/>
                        based on your preferences</p> 
                    </ListItem>
                    <ListItem>
                        <ArrowRightAltIcon sx={{width:"78px",height:"78px"}}/>
                    </ListItem>
                    <ListItem className={classes.items}>
                        <EventAvailableIcon sx={{width:"78px",height:"78px"}} />
                        <h4 className={classes.title}>Customize it</h4>
                        <p className={classes.parraf}>Refine your trip. We'll find the
                                         best routes and schedules</p> 
                    </ListItem>
                    <ListItem>
                        <ArrowRightAltIcon sx={{width:"78px",height:"78px"}} />
                    </ListItem>
                    <ListItem className={classes.items}>
                        <FlightTakeoffIcon sx={{width:"78px",height:"78px"}} />
                        <h4 className={classes.title}>Book it</h4>
                        <p className={classes.parraf}>Choose from the best hotels
                        and activities. Up to 50% off</p> 
                    </ListItem>
                    <ListItem>
                        <ArrowRightAltIcon sx={{width:"78px",height:"78px"}} />
                    </ListItem>
                    <ListItem className={classes.items}>
                        <AirplaneTicketIcon sx={{width:"78px",height:"78px"}}/>
                        <h4 className={classes.title}>Manage it</h4>
                        <p className={classes.parraf}>Everything in one place.
Everyone on the same page.</p> 
                    </ListItem>
                </List>  
            </Box>
        </>
    )
}

export default Steps