const Activity = require('../models/Activities')

const ActivitiesController = {
    getAllActivities: async (req, res) => {
        let activities;
        let error = null;
        try {
            activities = await Activity.find().populate("itinerary");
        } catch (error) {
          error = error;
          console.error(error);
        }
        res.json({
          response: error ? "ERROR" : activities,
          success: error ? false : true,
          error: error,
        });
      },
      postAnActivity: async (req, res) => {
        const {
          title,
          src,
          itinerary,
        } = req.body;
        let activities;
        try {
            activities = await new Activity({
                title,
                src,
                itinerary,
          }).save();
          res.json({
            res: activities,
            success: true,
          });
        } catch (error) {
            res.json({
                res: error,
                success: false,
              });
        }
        res.json({
          res: activities,
          success: true,
        });
      },
      deleteAnActivity: async (req, res) => {
        let activities;
        const id = req.params.id;
        try {
            activities = await Activity.findOneAndDelete({ _id: id });
        } catch (error) {
          console.error(error);
        }
        res.json({
          res: activities,
          success: true,
        });
      },
      modifyAnActivity: async (req, res) => {
        let id = req.params.id;
        let activities = req.body;
        let update;
        try {
          update = await Activity.findOneAndUpdate({ _id: id }, { ...activities });
        } catch (error) {
          console.error(error);
        }
        res.json({
          res: activities,
          success: true,
        });
      },
}
module.exports = ActivitiesController;