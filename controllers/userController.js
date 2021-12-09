const User = require("../models/User.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
          password: hashedPassword,
          name,
          surname,
          imageURL,
          country,
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
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      const passwordCorrect =
        user === null
          ? res.json({ success: false, error: "the user doesnt exists" })
          : await bcryptjs.compareSync(password, user.password);
      if (passwordCorrect) {
        const token = jwt.sign({ ...user }, process.env.JWT_KEY);
        res.json({ success: true, response: { token, email }, error: null });
      } else {
        response.status(401).json({
          error: "invalid user or password",
        });
      }
    } catch (error) {
      res.json({ success: false, response: null, error: error });
    }
  },
};

module.exports = userController;
