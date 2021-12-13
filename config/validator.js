const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required().trim().messages({
      "string.empty": "Este campo es requerido",
      "string.min": "Este campo es requerido",
    }),
    password: joi
      .string()
      .min(4)
      .required()
      .trim()
      .messages({
        "string.empty": "Este campo es requerido",
        "string.min": "Este campo es requerido",
      }),
    name: joi.string().required().messages({
      "string.empty": "Este campo es requerido",
      "string.min": "Este campo es requerido",
    }),
    surname: joi.string().required().messages({
      "string.empty": "Este campo es requerido",
      "string.min": "Este campo es requerido",
    }),
    imageURL: joi.string().required().messages({
      "string.empty": "Este campo es requerido",
      "string.min": "Este campo es requerido",
    }),
    country: joi.string().required().messages({
      "string.empty": "Este campo es requerido",
      "string.min": "Este campo es requerido",
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
