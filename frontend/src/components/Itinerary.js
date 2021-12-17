import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Grid, List, ListItem, Button } from "@mui/material";
import Carousel from "react-elastic-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import dolar from "../assets/dolar.png";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comments from "./Comments";
import { toast } from "react-toastify";
import Activities from "./Activities";

const useStyles = makeStyles((theme) => ({
  tripContainer: {
    maxWidth: "65rem",
    minHeight: "35rem",
    backgroundColor: "rgb(238,174,202)",
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    margin: "2vh auto 5vh",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)"
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
    margin:"2rem"
  },
}));

const Itinerary = (props) => {
  const [visible, setVisible] = useState(false);
  const [like, setLike] = useState(0);
  const [liked, setLiked] = useState(false);
  const classes = useStyles();
  const {
    id,
    itineraries,
    fetchItineraries,
    loading,
    likeItinerary,
    userData,
    getCommentaries,
  } = props;
  useEffect(() => {
    fetchItineraries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleLike = (itineraryId) => {
    if (props.user) {
      likeItinerary(itineraryId, userData, liked).then((res) => {
        setLike(res.response.length);
        setLiked(!liked);
      });
    } else {
      toast.error("You must be logged to like itinerarys", {
        duration: 6000,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  const viewMoreLess = (itineraryId) => {
    setVisible(!visible);
    getCommentaries(itineraryId);
  };
  let arrayItineraries = itineraries.filter(
    (itinerary) => itinerary.city[0]._id === id
  );
  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
          <Loader />
        </Box>
      ) : arrayItineraries && arrayItineraries.length === 0 ? (
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
          </Box>
        </Box>
      ) : (
        arrayItineraries.map((itinerary, index) => {
          const price = itinerary.price;
          return (
            <Box className={classes.tripContainer} key={index}>
              <h3 className={classes.title}>{itinerary.title}</h3>
              <List className={classes.hashtags} key={index}>
                {itinerary["hashtags"].map((hashtag, index) => {
                  return (
                    <ListItem
                      key={index}
                      sx={{ color: "blue", cursor: "pointer" }}
                    >
                      #{hashtag}
                    </ListItem>
                  );
                })}
              </List>
              <Grid container className={classes.gridContainer}>
                <Grid item xs={12} md={12} lg={6} id="ghelo">
                  <Carousel>
                    {itinerary["src"].map((item, index) => {
                      return (
                        <img
                          src={item}
                          alt={item}
                          key={index}
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
                      {priceCounter(price).map((bill, index) => {
                        return (
                          <img
                            src={dolar}
                            alt="dolar"
                            className={classes.dolar}
                            key={index}
                          />
                        );
                      })}
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
                          <IconButton
                            aria-label="like the itinerary"
                            onClick={() => handleLike(itinerary._id)}
                          >
                            {liked ? (
                              <FavoriteIcon
                                sx={{ fontSize: "40px", color: "red" }}
                              />
                            ) : (
                              <FavoriteBorderIcon
                                sx={{ fontSize: "40px", color: "red" }}
                              />
                            )}
                          </IconButton>
                        </ListItem>
                        <ListItem>
                          <p>
                            {like} {like > 1 ? "likes" : "like"}
                          </p>
                        </ListItem>
                        <ListItem>
                          <ShareIcon sx={{ fontSize: "40px" }} />
                        </ListItem>
                      </List>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
              <Box sx={{ display: visible ? "block" : "none",minHeight:"40rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "60px",
                    flexDirection:"column",
                    height:"100%"
                  }}
                >
                  <Activities id={itinerary._id}/>
                  <Comments id={itinerary._id} />
                </Box>
              </Box>
              <Box className={classes.commentContainer}>
                <Button
                  variant="contained"
                  size="medium"
                  color="error"
                  onClick={() => viewMoreLess(itinerary._id)}
                >
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
            id="backToCities"
          >
            Back To Cities
          </Button>
        </Link>
      </Box>
    </>
  );
};

const priceCounter = (element) => {
  let arrayElement = [];
  for (let i = 0; i < element; i++) {
    arrayElement.push("e");
  }
  return arrayElement;
};
const mapDispatchToProps = {
  fetchItineraries: itinerariesActions.fetchItineraries,
  likeItinerary: itinerariesActions.likeItinerary,
  getCommentaries: itinerariesActions.getCommentaries,
};
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    itineraries: state.itinerariesReducer.itineraries,
    loading: state.itinerariesReducer.loading,
    userData: state.authReducer.userData,
    comments: state.authReducer.comments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
