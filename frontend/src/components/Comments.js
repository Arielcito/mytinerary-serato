import { TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";
import { Paper } from "@mui/material";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useRef } from "react";
import Loader from "./Loader";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  title: {
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
const Comments = (props) => {
  const classes = useStyles();
  const inputComment = useRef();
  const { getCommentaries, id, userData, comments, postCommentary, user } =
    props;

  const handlePost = (e) => {
    e.preventDefault();
    if (props.user) {
      if (inputComment.current.value.trim() !== "") {
        postCommentary(id, inputComment.current.value, userData).then((res) =>
          getCommentaries(id)
        );
        inputComment.current.value = ''
      } else {
        toast.error("Type something first!");
      }
    } else {
      toast.error("You must be logged to comment");
    }
  };
  return (
    <Box sx={{ width: "90%", height: "100%" }}>
      <Box>
        <h3 className={classes.title}>Comentaries</h3>
      </Box>
      <div className={classes.container}>
        <Paper className={classes.paper} sx={{ backgroundColor: "#eeaeca" }}>
          <Paper
            id="style-1"
            className={classes.messagesBody}
            sx={{ backgroundColor: "#94bbe9" }}
          >
            {comments ? (
              comments.map((comment, index) => {
                return user ? (
                  comment.user.userId === props.userData._id ? (
                    <MessageRight
                      itineraryId={id}
                      key={index}
                      commentId={comment.comment["_id"]}
                      message={comment.comment["text"]}
                      photoURL={props.userData.imageURL}
                      displayName={props.userData.name}
                      avatarDisp={false}
                    />
                  ) : (
                    <MessageLeft
                      key={index}
                      commentId={comment.comment["_id"]}
                      message={comment.comment["text"]}
                      photoURL={comment.user.imageURL}
                      displayName={comment.user.name}
                      avatarDisp={true}
                    />
                  )
                ) : (
                  <MessageLeft
                    key={index}
                    commentId={comment.comment["_id"]}
                    message={comment.comment["text"]}
                    photoURL={comment.user.imageURL}
                    displayName={comment.user.name}
                    avatarDisp={true}
                  />
                );
              })
            ) : (
              <Loader />
            )}
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
  );
};
const mapStateToprops = (state) => {
  return {
    user: state.authReducer.user,
    userData: state.authReducer.userData,
    comments: state.itinerariesReducer.comments,
  };
};

const mapDistatchToProps = {
  getCommentaries: itinerariesActions.getCommentaries,
  postCommentary: itinerariesActions.postCommentary,
};
export default connect(mapStateToprops, mapDistatchToProps)(Comments);
