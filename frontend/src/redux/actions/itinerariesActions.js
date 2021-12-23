import axios from "axios";
import { toast } from 'react-toastify';

const itinerariesActions = {
  fetchItineraries: () => {
    return async (dispatch, getState) => {
      const res = await axios.get("http://localhost:4000/api/itineraries");
      dispatch({ type: "GET_ITINERARIES", payload: res.data.response });
    };
  },
  likeItinerary: (itineraryId, user, like) => {
    return async (dispatch, getState) => {
      const res = await axios.put(
        "http://localhost:4000/api/like/" + itineraryId,
        { user, like }
      );
      if (res.data.success) {
        return res.data;
      }
    };
  },
  getCommentaries: (id) => {
      return async (dispatch, getState) => {
        const res = await axios.get(
          "http://localhost:4000/api/comments/" + id
        );
        if (res.data.success) {
          return res.data
        } else {
          toast.error('error')
        }
      };
  },
  postCommentary: ( itineraryId, comment,user) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/comments/" + itineraryId,
          {comment,user},
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        );
        if (res.data.success) {
          return res.data
        } else {
          toast.error("Error trying to post!");
        }
      } catch {
        console.log("error");
      }
    };
  },

  deleteComment: (user, commentId) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.delete(
          "http://localhost:4000/api/comments/" + commentId,
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        );
        if (res.data.success) {
          return res.data
        } else {
          toast.error("Error trying to delete!");
        }
      } catch {
        console.log("error");
      }
    };
  },

  editComment: (user, commentId, message) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.put(
          "http://localhost:4000/api/comments/" + commentId,
          {message},
          {
            headers: { Authorization: "Bearer " + user.token },
          }
        );
        console.log(res.data)
        if (res.data.success) {
          return res.data
        } else {
          toast.error("Error trying to edit");
        }
      } catch {
        console.log("error");
      }
    };
  },
  fetchActivities: () => {
    return async (dispatch, getState) => {
      const res = await axios.get("http://localhost:4000/api/activities");
      dispatch({ type: "GET_ACTIVITIES", payload: res.data.response });
    };
  },
};
export default itinerariesActions;
