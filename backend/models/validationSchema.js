const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const noteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().allow(""), 
  owner: Joi.string().required(),
});

const shareNoteSchema = Joi.object({
  userIdToShare: Joi.string().required()
});

module.exports = {
  userSchema,
  noteSchema,
  shareNoteSchema
};
