import express from 'express';
import asyncWrapper from '~/shared/cores/asyncWrapper.core';
import { verifyUser } from '~/shared/middlewares/verifyUser.middleware';
import candidateProfileController from '../controllers/candidate-profile.controller';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.post('/', verifyUser, asyncWrapper(candidateProfileController.create));
candidateProfileRoutes.get('/', verifyUser, asyncWrapper(candidateProfileController.getAll));
candidateProfileRoutes.get('/:id', verifyUser, asyncWrapper(candidateProfileController.getSingleCandidate));

export default candidateProfileRoutes;
