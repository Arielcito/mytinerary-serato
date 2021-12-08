const User = require("../models/User.js");
const bcryptjs = require("bcryptjs");

const userController = {
  newUser: async (req, res) => {
    let { email, password, name, surname, imageURL, country } = req.body;
    try {
      const userExist = await User.findOne({ email });
      if (userExist) {
        res.json({
          succes: false,
          error: "the user already exists",
          response: null,
        });
      } else {

        const hashedPassword = bcryptjs.hashSync(password, 10);

        const newUser = new User({
          email,
          password:hashedPassword,
          name,
          surname,
          imageURL,
          country,
        });

        await newUser.save();
        res.json({success: true, response: newUser, error: null})
      }
    } catch (error) {
      res.json({success: false, response: null, error: error})
    }
  },
  logInUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const userExists = await User.findOne({ email });
      if (!userExists) {
        res.json({ succes: false, error: "el usuario es incorrecto" });
      } else {
        let passwordCompare = bcryptjs.compareSync(
          password,
          userExists.password
        );
        if (passwordCompare) {
          res.json({ succes: true, response: { email }, error: null });
        }
      }
    } catch (error) {
      res.json({ succes: false, response: null, error: error });
    }
  },
};
module.exports = userController;
