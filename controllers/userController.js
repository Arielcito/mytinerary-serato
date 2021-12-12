const User = require("../models/User.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  newUser: async (req, res) => {
    let { email, password, name, surname, imageURL, country, google } =
      req.body;

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
          password: hashedPassword,
          name,
          surname,
          imageURL,
          country,
          google,
        });
        const token = jwt.sign({ ...userExist }, process.env.JWT_KEY);
        await newUser.save();
        res.json({ success: true, response: newUser, token, error: null });
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
      if (!passwordCompare)
        res.json({
          success: true,
          error: "Email and/or password incorrect",
        });
      const token = jwt.sign({ ...user }, process.env.JWT_KEY);
      res.json({ success: true, response: { token, email }, error: null });
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = userController;
