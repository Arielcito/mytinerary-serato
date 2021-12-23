const Itinerary = require("../models/Itinerary.js");

const ItinerarysController = {
  getAllItinerarys: async (req, res) => {
    let itinerarys;
    let error = null;
    try {
      itinerarys = await Itinerary.find().populate("city");
    } catch (error) {
      error = error;
      console.error(error);
    }
    res.json({
      response: error ? "ERROR" : itinerarys,
      success: error ? false : true,
      error: error,
    });
  },
  getAItinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOne({ _id: id }).populate("city");
    } catch (error) {
      console.error(error);
    }
    res.json({
      response: itinerary,
      success: true,
    });
  },
  postItinerary: async (req, res) => {
    const {
      title,
      src,
      hashtags,
      price,
      duration,
      currency,
      language,
      user,
      userAvatar,
      city,
    } = req.body;
    let itinerary;
    try {
      itinerary = await new Itinerary({
        title,
        src,
        hashtags,
        price,
        duration,
        currency,
        language,
        user,
        userAvatar,
        city,
      }).save();
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: itinerary,
      success: true,
    });
  },
  deleteAItinerary: async (req, res) => {
    let itinerary;
    const id = req.params.id;
    try {
      itinerary = await Itinerary.findOneAndDelete({ _id: id });
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: itinerary,
      success: true,
    });
  },
  modifyAItinerary: async (req, res) => {
    let id = req.params.id;
    let itinerary = req.body;
    let update;
    try {
      update = await Itinerary.findOneAndUpdate({ _id: id }, { ...itinerary });
    } catch (error) {
      console.error(error);
    }
    res.json({
      res: itinerary,
      success: true,
    });
  },
  postLikes: async (req, res) => {
    const itineraryId = req.params.id;
    const { user, like } = req.body;
    const userId = user._id;
    let updateLike;
    try {
      if (!like) {
        updateLike = { $push: { like: { user: userId } } };
      } else {
        updateLike = { $pull: { like: { user: userId } } };
      }
      const itinerary = await Itinerary.findOneAndUpdate(
        { _id: itineraryId },
        updateLike,
        { new: true }
      );
      res.json({ success: true, response: itinerary.like });
    } catch (error) {
      res.json({ success: false });
    }
  },
  postACommentary: async (req, res) => {
    const itineraryId = req.params.id;
    const { comment, user } = req.body;

    try {
      postedComment = await Itinerary.findOneAndUpdate(
        { _id: itineraryId },
        { $push: { comments: { comment, user } } },
        { new: true }
      ).populate("comments.user");
      res.json({ success: true, response: postedComment });
    } catch (error) {
      res.json({ success: false, response: error });
    }
  },
  getCommentaries: async (req, res) => {
    try {
      const itineraryId = req.params.id;
      let itinerary = await Itinerary.findOne({ _id: itineraryId }).populate(
        "comments.user"
      );
      const comments = itinerary.comments.map((comment) => ({
        comment: { text: comment.comment, _id: comment._id },
        user: {
          name: comment.user.name,
          imageURL: comment.user.imageURL,
          surname: comment.user.surname,
          userId: comment.user._id,
        },
      }));
      res.json({ success: true, response: comments });
    } catch (error) {
      res.json({ success: false, response: [{ comment: "Error" }] });
    }
  },

  editCommentary: async (req, res) => {
    let commentaryToUpdate
    let commentId = req.params.id;
    const newComment = req.body.message
    try {
      commentaryToUpdate = { "comments._id": commentId }
      update = { "comments.$.comment": newComment };
      const updatedComment = await Itinerary.findOneAndUpdate(
        commentaryToUpdate,
        update,
        {new:true}
      ).populate("comments.user");
      res.json({ success: true, response: updatedComment });
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: [{ comment: "Error" }] });
    }
  },
  deleteCommentary: async (req, res) => {
    let commentaryToDelete;
    let update
    const commentId = req.params.id;
    try {
      commentaryToDelete = { "comments._id": commentId };
      update = { $pull: { comments: { _id: commentId } } };
      const deletedComment = await Itinerary.findOneAndUpdate(
        commentaryToDelete,
        update,
        {
          new: true,
        }
      ).populate("comments.user")
      res.json({ success: true, response: deletedComment });
    } catch (error) {

      res.json({ success: false, response: [{ comment: "Error" }] });
    }
  },
};

module.exports = ItinerarysController;
