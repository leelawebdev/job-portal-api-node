import express from 'express';
import authController from '../controllers/auth.controller';
import asyncWrapper from '~/shared/cores/asyncWrapper.core';
import { verifyUser } from '~/shared/middlewares/verifyUser.middleware';
const authRoutes = express.Router();

authRoutes.post('/signup', asyncWrapper(authController.Signup));
authRoutes.post('/signin', asyncWrapper(authController.Signin));
authRoutes.get('/me', verifyUser, authController.getCurrentUser);
authRoutes.post('/logout', verifyUser, authController.logout);

export default authRoutes;
