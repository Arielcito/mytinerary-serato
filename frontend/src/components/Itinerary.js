import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Grid, List, ListItem, Button } from "@mui/material";
import Carousel from "react-elastic-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import dolar from "../assets/dolar.png";
import { Avatar } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({
  tripContainer: {
    width: "65rem",
    height: "35rem",
    backgroundColor: "#e2ceb5",
    margin: "2vh auto",
    borderRadius: "10px",
    overflow: "hidden",
  },
  title: {
    margin: "1rem 1rem 0 1rem",
    fontSize: "45px",
    textAlign: "center",
  },
  hashtags: {
    display: "inline-flex",
    justifyContent: "start",
  },
  imageCarousel: {
    width: "100%",
    height: "100%",
  },
  avatar: {
    width: "80px",
    height: "80px",
  },
  profileInfo: {
    display: "inline-flex",
  },
  profileName: {
    fontSize: "35px",
  },
  dolar: {
    width: "50px",
  },
}));
const itinerarys = [
  {
    title: "Coliseum",
    hashtags: ["Historycal", "GuidedVisit", "Ruins"],
    src: [
      "https://ichef.bbci.co.uk/news/800/cpsprodpb/A6F4/production/_118304724_romecolosseum.jpg",
      "https://assets.buendiatours.com/s3fs-public/styles/highlight_large/public/2019-12/roma-que-ver-coliseo-listado_0.jpg?VersionId=AvKnDEuPMh6gb5_5pKef4gdo23Yi57ys&itok=kuAp-nrw",
      "https://locuraviajes.com/wp-content/uploads/2014/03/coliseo-romano-interior.jpg",
    ],
    user: "Mirtha Legrand",
    currency: "dolar",
    price: "4",
    duration: "2",
    language: "Italian",
    userAvatar:
      "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg",
  },
];
const Itinerary = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <>
      {itinerarys.map((itinerary) => {
        return (
          <Box className={classes.tripContainer}>
            <h3 className={classes.title}>{itinerary.title}</h3>
            <List className={classes.hashtags}>
              {itinerary["hashtags"].map((hashtag) => {
                return <ListItem>#{hashtag}</ListItem>;
              })}
            </List>
            <Grid container sx={{ width: "100%" }}>
              <Grid item xs={6}>
                <Carousel>
                  {itinerary["src"].map((item) => {
                    return (
                      <img
                        src={item}
                        alt={item}
                        className={classes.imageCarousel}
                      />
                    );
                  })}
                </Carousel>
              </Grid>
              <Grid item xs={6}>
                <Box></Box>
                <List>
                  <ListItem className={classes.profileInfo}>
                    <Avatar
                      alt={itinerary.user}
                      src={itinerary.userAvatar}
                      sx={{ width: 80, height: 80, marginRight: "2rem" }}
                    />
                    <h4 className={classes.profileName}>{itinerary.user}</h4>
                  </ListItem>
                  <ListItem sx={{ fontSize: "20px" }}>
                    Duration:{itinerary.duration}hs
                  </ListItem>
                  <ListItem sx={{ fontSize: "20px" }}>
                    Price:
                    {<img src={dolar} alt="dolar" className={classes.dolar} />}
                  </ListItem>
                  <ListItem sx={{ fontSize: "20px" }}>
                    Currency:{itinerary.currency}
                  </ListItem>
                  <ListItem sx={{ fontSize: "20px" }}>
                    Language:{itinerary.language}
                  </ListItem>
                  <ListItem>
                    <List className={classes.profileInfo}>
                      <ListItem>
                        <FavoriteBorderIcon sx={{ fontSize: "40px" }} />
                      </ListItem>
                      <ListItem>
                        <ShareIcon sx={{ fontSize: "40px" }} />
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon />
                        }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      ></AccordionSummary>
                      <AccordionDetails>
                        <p>UnderConstruction</p>
                      </AccordionDetails>
                    </Accordion>
          </Box>
        );
      })}
    </>
  );
};

export default Itinerary;
