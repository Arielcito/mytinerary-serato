import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Grid, List, ListItem, Button, TextField, Paper } from "@mui/material";
import Carousel from "react-elastic-carousel";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import dolar from "../assets/dolar.png";
import { Avatar } from "@mui/material";
import { useState, useRef } from "react";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Comments from "./Comments";
import { toast } from "react-toastify";
import Activities from "./Activities";
import SendIcon from "@mui/icons-material/Send";

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
    boxShadow:
      "5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)",
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
    margin: "2rem",
  },
  titleCommentary: {
    fontSize: "30px",
    textAlign: "center",
    margin: "2rem",
  },
  wrapForm: {
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
  wrapText: {
    width: "60vw",
  },
  paper: {
    width: "80vw",
    height: "80vh",
    maxWidth: "80rem",
    maxHeight: "60rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  paper2: {
    width: "80vw",
    maxWidth: "500px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  messagesBody: {
    width: "calc( 100% - 20px )",
    margin: 10,
    overflowY: "scroll",
    height: "calc( 100% - 80px )",
  },
}));

const Itinerary = (props) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const inputComment = useRef();
  const [comentaries, setComentaries] = useState([]);
  const { likeItinerary, userData, getCommentaries, Itinerary, user } = props;
  const [likesArray, setLikeArray] = useState(Itinerary.like);
  const [likeNumber, setLikeNumber] = useState(Itinerary.like.length);
  const [like, setLike] = useState(
    user && likesArray.find((like) => like.user === userData._id)
  );

  const handleLike = (itineraryId) => {
    if (user) {
      likeItinerary(itineraryId, userData, like).then((res) => {
        setLikeArray(res.response);
        setLikeNumber(res.response.length);
        setLike(!like);
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
  const viewMoreLess = () => {
    getCommentaries(Itinerary._id).then((res) => setComentaries(res.response));
    setVisible(!visible);
    props.fetchActivities();
  };
  
  const handlePost = (e) => {
    e.preventDefault();
    if (props.user) {
      if (inputComment.current.value.trim() !== "") {
        props
          .postCommentary(Itinerary._id, inputComment.current.value, userData)
          .then((res) => setComentaries(res.response));
        inputComment.current.value = "";
      } else {
        toast.error("Type something first!");
      }
    } else {
      toast.error("You must be logged to comment");
    }
  };
  return (
    <>
      <Box className={classes.tripContainer}>
        <h3 className={classes.title}>{Itinerary.title}</h3>
        <List className={classes.hashtags}>
          {Itinerary["hashtags"].map((hashtag, index) => {
            return (
              <ListItem key={index} sx={{ color: "blue", cursor: "pointer" }}>
                #{hashtag}
              </ListItem>
            );
          })}
        </List>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={12} lg={6} id="ghelo">
            <Carousel>
              {Itinerary["src"].map((item, index) => {
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
                  alt={Itinerary.user}
                  src={Itinerary.userAvatar}
                  sx={{ width: 80, height: 80, marginRight: "2rem" }}
                />
                <h4 className={classes.profileName}>{Itinerary.user}</h4>
              </ListItem>
              <ListItem sx={{ fontSize: "20px" }}>
                Duration:{Itinerary.duration}hs
              </ListItem>
              <ListItem sx={{ fontSize: "20px" }}>
                Price:
                {priceCounter(1).map((bill, index) => {
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
                Currency:{Itinerary.currency}
              </ListItem>
              <ListItem sx={{ fontSize: "20px" }}>
                Language:{Itinerary.language}
              </ListItem>
              <ListItem>
                <List className={classes.profileInfo}>
                  <ListItem>
                    <IconButton
                      aria-label="like the itinerary"
                      onClick={() => handleLike(Itinerary._id)}
                    >
                      {like ? (
                        <FavoriteIcon sx={{ fontSize: "40px", color: "red" }} />
                      ) : (
                        <FavoriteBorderIcon
                          sx={{ fontSize: "40px", color: "red" }}
                        />
                      )}
                    </IconButton>
                  </ListItem>
                  <ListItem>
                    <p>
                      {likeNumber} {likeNumber > 1 ? "likes" : "like"}
                    </p>
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Box sx={{ display: visible ? "block" : "none", minHeight: "40rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "60px",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Activities id={Itinerary._id} />
            <Box sx={{ width: "90%", height: "100%" }}>
              <Box>
                <h3 className={classes.titleCommentary}>Comentaries</h3>
              </Box>
              <div className={classes.container}>
                <Paper
                  className={classes.paper}
                  sx={{ backgroundColor: "#eeaeca" }}
                >
                  <Paper
                    id="style-1"
                    className={classes.messagesBody}
                    sx={{ backgroundColor: "#94bbe9" }}
                  >
                    <Comments
                      id={Itinerary._id}
                      comments={comentaries && comentaries}
                    />
                  </Paper>
                  <Box className={classes.wrapForm}>
                    <form
                      className={classes.wrapForm}
                      noValidate
                      autoComplete="off"
                      onSubmit={(e) => handlePost(e)}
                    >
                      <TextField
                        id="standard-text"
                        label="Comment"
                        className={classes.wrapText}
                        inputRef={inputComment}
                      />
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        <SendIcon />
                      </Button>
                    </form>
                  </Box>
                </Paper>
              </div>
            </Box>
          </Box>
        </Box>
        <Box className={classes.commentContainer}>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={() => viewMoreLess(Itinerary._id)}
          >
            {visible ? "Show Less" : "Show More"}
          </Button>
        </Box>
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
  likeItinerary: itinerariesActions.likeItinerary,
  getCommentaries: itinerariesActions.getCommentaries,
  fetchActivities: itinerariesActions.fetchActivities,
  postCommentary: itinerariesActions.postCommentary,
};
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    itineraries: state.itinerariesReducer.itineraries,
    userData: state.authReducer.userData,
    comments: state.authReducer.comments,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
