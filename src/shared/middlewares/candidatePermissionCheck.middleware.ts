import { NextFunction, Request, Response } from 'express';
import prisma from '~/prisma';
import { ForbiddenException } from '../cores/error.core';

export async function candidatePermissionCheck(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.currentUser.id;
    const userRole = req.currentUser.role;
    const candidateId = +req.params.id;

    const candidate = await prisma.candidateProfile.findUnique({
      where: { id: candidateId }
    });

    if (userRole === 'ADMIN' || userRole === 'RECRUITER' || userId === candidate?.userId) {
      return next();
    }

    return next(new ForbiddenException('you dont have permission to access'));
  } catch (error) {
    next(error);
  }
}
