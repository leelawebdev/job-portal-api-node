import express from 'express';
import userController from '../controllers/user.controller';
import asyncWrapper from '~/shared/cores/asyncWrapper.core';
import { ValidationSchema } from '~/shared/middlewares/validationSchema.middleware';
import { userCreateSchema } from '../schemas/user.schema';

const userRoutes = express.Router();

userRoutes.get('/', asyncWrapper(userController.getAll));
userRoutes.post('/create', ValidationSchema(userCreateSchema), asyncWrapper(userController.create));

export default userRoutes;
