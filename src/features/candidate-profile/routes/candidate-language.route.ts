import express from 'express';
import candidateLanguageController from '../controllers/candidate-language.controller';

const candidateLanguageRoutes = express.Router();

candidateLanguageRoutes.get('/');

export default candidateLanguageRoutes;
