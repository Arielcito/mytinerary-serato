import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { IconButton, TextField } from "@mui/material";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useState, useRef } from "react";
import Popup from "reactjs-popup";

const useStyles = makeStyles((theme) => ({
  messageRow: {
    display: "flex",
  },
  messageRowRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  messageOrange: {
    overflow: "hidden",
    position: "relative",
    marginRight: "1rem",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f8e896",
    width: "50%",
    minHeight: "50px",
    textAlign: "left",
    font: "400 .4em 'Open Sans', sans-serif",
    border: "1px solid #dfd087",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #f8e896",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #dfd087",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px",
    },
  },

  messageContent: {
    padding: 0,
    margin: 0,
  },
  messageTimeStampRight: {
    position: "absolute",
    fontSize: ".3em",
    fontWeight: "300",
    marginTop: "10px",
    bottom: "-3px",
    right: "5px",
  },

  orange: {
    color: "black",
    backgroundColor: "orange",
    width: "5rem",
    height: "5rem",
  },
  avatarNothing: {
    color: "transparent",
    backgroundColor: "transparent",
    width: "5rem",
    height: "5rem",
  },
  displayName: {
    marginLeft: "20px",
  },
  inputEdit: {
    width: "100%",
  },
}));

const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const inputEdit = useRef();
  const [deleting, setDeleting] = useState(false);
  const [edit, setEdit] = useState(false);

  const {
    deleteComment,
    getCommentaries,
    userData,
    commentId,
    itineraryId,
    editComment,
  } = props;

  const handleDelete = () => {
    setDeleting(true);
    if (!deleting)
      deleteComment(userData, commentId).then((res) =>
        getCommentaries(itineraryId)
      );
  };

  const handleEdit = () => {
    setEdit(!edit);
    if (edit) {
      editComment(userData, commentId, inputEdit.current.value).then((res) =>
        getCommentaries(itineraryId)
      );
    }
  };
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageOrange}>
        {edit ? (
          <TextField
            className={classes.inputEdit}
            id="filled-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue={message}
            variant="filled"
            inputRef={inputEdit}
          />
        ) : (
          <p className={classes.messageContent}>{message}</p>
        )}
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
      <Box>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>

        <Popup
          trigger={
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header"> Are you sure you want to delete your comment? </div>
              
              <div className="actions">
                <Popup
                  trigger={<button className="button"> Trigger </button>}
                  position="top center"
                  nested
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae magni omnis delectus nemo, maxime molestiae dolorem
                    numquam mollitia, voluptate ea, accusamus excepturi deleniti
                    ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                  </span>
                </Popup>
                <button
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  close modal
                </button>
              </div>
            </div>
          )}
        </Popup>
      </Box>
    </div>
  );
};
const mapStateToprops = (state) => {
  return {
    user: state.authReducer.user,
    userData: state.authReducer.userData,
  };
};

const mapDistatchToProps = {
  getCommentaries: itinerariesActions.getCommentaries,
  deleteComment: itinerariesActions.deleteComment,
  editComment: itinerariesActions.editComment,
};
export default connect(mapStateToprops, mapDistatchToProps)(MessageRight);
