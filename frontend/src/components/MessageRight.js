import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { IconButton, TextField, Dialog, DialogActions,DialogContent,DialogContentText,DialogTitle, Button } from "@mui/material";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import { useState } from "react";

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
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
}));

const MessageRight = (props) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    commentId,
    handleEdit,
    handleDelete,
    message
  } = props;

  const editState = ()=>{
    setEdit(!edit)
  }
  const handleInput = (e) => {
    setEditValue(e.target.value)
  }
  const handleEdits = (edit) => {
    handleEdit(editValue,commentId,edit)
    editState()
  }
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
            onChange={e => handleInput(e)}
          />
        ) : (
          <p className={classes.messageContent}>{message}</p>
        )}
      </div>
      <Box>
        <IconButton onClick={() => handleEdits(edit) } >
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleOpen}>
          <DeleteIcon />
        </IconButton>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete message?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to permanently remove it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(commentId)}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
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
  
};
export default connect(mapStateToprops, mapDistatchToProps)(MessageRight);
