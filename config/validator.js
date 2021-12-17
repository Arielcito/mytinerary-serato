const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required().trim().min(3).messages({
      "string.empty": " is required",
      "string.min": " is required",
      'string.email': 'Enter a valid email'
    }),
    password: joi
      .string()
      .regex(/^[a-zA-Z0-9]{3,30}$/)
      .min(3)
      .max(30)
      .required()
      .trim()
      .messages({
        "string.empty": " is required",
        "string.min": " is required",
      }),
    name: joi.string().alphanum().min(3).max(30).required().messages({
      "string.empty": " is required",
      "string.min": " is required",
    }),
    surname: joi.string().alphanum().min(3).max(30).required().messages({
      "string.empty": " is required",
      "string.min": " is required",
    }),
    imageURL: joi.string().required().messages({
      "string.empty": " is required",
    }),
    country: joi.string().required().messages({
      "string.empty": "This field is required",
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
