import express from 'express';
import asyncWrapper from '~/shared/cores/asyncWrapper.core';
import { ValidationSchema } from '~/shared/middlewares/validationSchema.middleware';
import { verifyUser } from '~/shared/middlewares/verifyUser.middleware';
import candidateProfileController from '../controllers/candidate-profile.controller';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.post('/', verifyUser, asyncWrapper(candidateProfileController.create));

export default candidateProfileRoutes;
