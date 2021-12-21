const User = require("../models/User.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  newUser: async (req, res) => {
    let { email, password, name, surname, imageURL, country, google } =
      req.body;
      const userExist = await User.findOne({ email });
    try {
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
          password: hashedPassword,
          name,
          surname,
          imageURL,
          country,
          google,
        });
        await newUser.save();
        const token = jwt.sign({ ...newUser }, process.env.JWT_KEY);
        res.json({ success: true, response: {newUser, token}, error: null });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
  logInUser: async (req, res) => {
    const { email, password, google } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user.google && !google)
        res.json({
          success: true,
          error: "Invalid email",
        });
      if (!user)
        res.json({
          success: true,
          error: "Email and/or password incorrect",
        });
      let passwordCompare = bcryptjs.compareSync(password, user.password);
      if (!passwordCompare){
        res.json({
          success: true,
          error: "Email and/or password incorrect",
        })}else{
          const token = jwt.sign({ ...user }, process.env.JWT_KEY);
          res.json({ success: true, response: {  user ,token }, error: null });
        }
    } catch (error) {
      res.json({
        success: false,
        response: null,
        error: "Email and/or password incorrect",
      });
    }
  },
  getToken: async (req, res) => {
    try {
      const userAuth = req.user;
      res.json({ succes: true, response: userAuth, error: null });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = userController;
