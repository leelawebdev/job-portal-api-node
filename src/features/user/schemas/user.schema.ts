import Joi from 'joi';

export const userCreateSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required()
});
