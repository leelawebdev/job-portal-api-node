import { NextFunction, Request, Response } from 'express';
import candidateProfileService from '../services/candidate-profile.service';
import { StatusCodes } from 'http-status-codes';

class CandidateProfile {
  public async create(req: Request, res: Response, next: NextFunction) {
    const candidateProfile = await candidateProfileService.create(req.body, req.currentUser);
    res.status(StatusCodes.CREATED).json({
      message: 'Candidate Profile Created Successfully',
      data: candidateProfile
    });
  }
}

export default new CandidateProfile();
