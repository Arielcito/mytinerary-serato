import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  List,
  ListItem,
  Button,
  FormControlLabel,
  Switch,
  Collapse,
} from "@mui/material";
import Carousel from "react-elastic-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import dolar from "../assets/dolar.png";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import filterActions from "../redux/actions/filterActions";
import { Link } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";

const useStyles = makeStyles((theme) => ({
  tripContainer: {
    maxWidth: "65rem",
    minHeight: "35rem",
    backgroundColor: "#e2ceb5",
    margin: "2vh auto",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
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
    maxWidth: "30rem",
    height: "20rem",
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
  noItineraries: {
    width: "40vw",
    height: "15rem",
    margin: "2rem auto",
    border: "1px solid #000",
    overflow: "hidden",
  },
  gridContainer: {
    width: "100%",
    height: "100%",
  },
  commentContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Itinerary = (props) => {
  const [visible, setVisible] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetchItineraries();
  }, []);

  const handleClick = () => {
    setVisible(!visible);
  };
  const { id, itineraries, fetchItineraries } = props;
  let arrayItineraries = itineraries.filter(
    (itinerary) => itinerary.city[0]._id === id
  );
  return (
    <>
      {arrayItineraries && arrayItineraries.length === 0 ? (
        <Box className={classes.noItineraries} id="noItineraries">
          <Box
            sx={{
              backgroundColor: "#000",
              padding: "1rem",
              textAlign: "center",
              fontSize: "2rem",
            }}
          >
            <h2>Sorry!</h2>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              color: "rgba(0,0,0,.6)",
              fontSize: "1.43em",
              fontWeight: "700",
              marginTop: "1rem",
            }}
          >
            We dont have any itinerary yet.
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Link to="/cities">
                <Button sx={{ backgroundColor: "#000", color: "white" }}>
                  Cities
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      ) : (
        arrayItineraries.map((itinerary, index) => {
          return (
            <Box className={classes.tripContainer}>
              <h3 className={classes.title}>{itinerary.title}</h3>
              <List className={classes.hashtags} key={index}>
                {itinerary["hashtags"].map((hashtag, index) => {
                  return <ListItem key={index}>#{hashtag}</ListItem>;
                })}
              </List>
              <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={12} lg={6} id="ghelo">
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
                <Grid item xs={12} md={12} lg={6}>
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
                      {
                        <img
                          src={dolar}
                          alt="dolar"
                          className={classes.dolar}
                        />
                      }
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
              <Box>
                {visible && (
                  <>
                    <Box>
                        <h2>UnderConstruction</h2>
                    </Box>
                  </>
                )}
              </Box>
              <Box className={classes.commentContainer}>
                <Button variant="outlined" onClick={() => handleClick()}>
                  {visible ? "Show Less" : "Show More"}
                </Button>
              </Box>
            </Box>
          );
        })
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Link to="/cities">
          <Button
            sx={{ backgroundColor: "#000", color: "white", margin: "4rem" }}
          >
            Back To Cities
          </Button>
        </Link>
      </Box>
    </>
  );
};
const mapDispatchToProps = {
  fetchItineraries: filterActions.fetchItineraries,
};
const mapStateToProps = (state) => {
  return {
    itineraries: state.filterReducer.itineraries,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
