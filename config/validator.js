const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required().trim().min(3).messages({
      "string.empty": "This field is required",
      "string.min": "This field is required",
    }),
    password: joi
      .string()
      .min(3)
      .required()
      .trim()
      .messages({
        "string.empty": "This field is required",
        "string.min": "This field is required",
      }),
    name: joi.string().min(3).required().messages({
      "string.empty": "This field is required",
      "string.min": "This field is required",
    }),
    surname: joi.string().min(3).required().messages({
      "string.empty": "This field is required",
      "string.min": "This field is required",
    }),
    imageURL: joi.string().required().messages({
      "string.empty": "This field is required",
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
