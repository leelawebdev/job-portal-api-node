import express from 'express';
import asyncWrapper from '~/shared/cores/asyncWrapper.core';
import { verifyUser } from '~/shared/middlewares/verifyUser.middleware';
import candidateProfileController from '../controllers/candidate-profile.controller';
import { candidatePermissionCheck } from '~/shared/middlewares/candidatePermissionCheck.middleware';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.post('/', asyncWrapper(verifyUser), asyncWrapper(candidateProfileController.create));
candidateProfileRoutes.get('/', asyncWrapper(verifyUser), asyncWrapper(candidateProfileController.getAll));
candidateProfileRoutes.get(
  '/:id',
  asyncWrapper(verifyUser),
  asyncWrapper(candidatePermissionCheck),
  asyncWrapper(candidateProfileController.getSingleCandidate)
);
candidateProfileRoutes.patch(
  '/:id',
  asyncWrapper(verifyUser),
  candidatePermissionCheck,
  asyncWrapper(candidateProfileController.update)
);
candidateProfileRoutes.delete(
  '/:id',
  asyncWrapper(verifyUser),
  candidatePermissionCheck,
  asyncWrapper(candidateProfileController.delete)
);

export default candidateProfileRoutes;
