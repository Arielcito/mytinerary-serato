const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required().trim().min(3).messages({
      "string.empty": " The email is required",
      "string.min": " Email must have at least 3 characters",
      'string.email': 'Enter a valid email',
      "string.base": `email should be a type of string`,
    }),
    password: joi
      .string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .min(3)
      .max(30)
      .required()
      .trim()
      .messages({
        "string.base": `Password should be a type of string`,
        "string.empty": " The password is required",
        "string.min": "  Password must have at least 3 characters",
      }),
    name: joi.string().alphanum().min(3).max(30).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must have at least 3 characters",
    }),
    surname: joi.string().alphanum().min(3).max(30).required().messages({
      "string.empty": "Surname is required",
      "string.min": "Surname must have at least 3 characters",
    }),
    imageURL: joi.string().required().messages({
      "string.empty": "An image is required",
    }),
    country: joi.string().required().messages({
      "string.empty": "Country field is required",
    }),
    google: joi.boolean()
  });
  const validation = schema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    res.json({ succes: false, response: validation.error });
  }
  next();
};

module.exports = validator;
