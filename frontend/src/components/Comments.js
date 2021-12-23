import { makeStyles } from "@mui/styles";
import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";
import { connect } from "react-redux";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({}));
const Comments = (props) => {
  const { id, comments, user, handleEdit, handleDelete } = props;

  return (
    <>
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
                handleEdit={handleEdit}
                handleDelete={handleDelete}
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
    </>
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
export default connect(mapStateToprops, mapDistatchToProps)(Comments);
