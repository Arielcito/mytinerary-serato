import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles((theme) => ({
  messageRow: {
    display: "flex",
  },
  messageBlue: {
    overflow:"hidden",
    position: "relative",
    marginLeft: "1rem",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#A8DDFD",
    maxWidth: "20rem",
    minHeight: "50px",
    textAlign: "left",
    font: "400 .4em 'Open Sans', sans-serif",
    border: "1px solid #97C6E3",
    borderRadius: "10px",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #A8DDFD",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      left: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #97C6E3",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      left: "-17px",
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
  displayName: {
    marginLeft: "20px",
    fontSize:'1rem'
  },
}));

const MessageLeft = (props) => {
  const message = props.message ? props.message : "No message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "jorge";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar
          alt={displayName}
          className={classes.orange}
          src={photoURL}
        ></Avatar>
        <div >
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};



export default (MessageLeft );
