import express from 'express';
import asyncWrapper from '~/shared/cores/asyncWrapper.core';
import { verifyUser } from '~/shared/middlewares/verifyUser.middleware';
import candidateProfileController from '../controllers/candidate-profile.controller';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.post('/', asyncWrapper(verifyUser), asyncWrapper(candidateProfileController.create));
candidateProfileRoutes.get('/', asyncWrapper(verifyUser), asyncWrapper(candidateProfileController.getAll));
candidateProfileRoutes.get(
  '/:id',
  asyncWrapper(verifyUser),
  asyncWrapper(candidateProfileController.getSingleCandidate)
);
candidateProfileRoutes.patch('/:id', asyncWrapper(verifyUser), asyncWrapper(candidateProfileController.update));

export default candidateProfileRoutes;
