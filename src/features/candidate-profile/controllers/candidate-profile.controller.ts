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

  public async getAll(req: Request, res: Response, next: NextFunction) {
    const candidates = await candidateProfileService.getAllCandidates();
    res.status(StatusCodes.OK).json({
      message: 'Candidate Profiles Got Successfully',
      data: candidates
    });
  }

  public async getSingleCandidate(req: Request, res: Response, next: NextFunction) {
    const candidate = await candidateProfileService.getSingleCandidate(+req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'Single Candidate Profile',
      data: candidate
    });
  }

  public async update(req: Request, res: Response, next: NextFunction) {
    console.log('dsdsdd');
    const candidate = await candidateProfileService.update(+req.params.id, req.body);
    console.log('kjkjkjk');
    res.status(StatusCodes.OK).json({
      message: 'profile update successfully',
      data: candidate
    });
  }
}

export default new CandidateProfile();
