import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../cores/error.core';
import jwt from 'jsonwebtoken';

export async function verifyUser(req: Request, res: Response, next: NextFunction) {
  if (!req?.cookies?.accessToken) {
    next(new BadRequestException('Please Login Again'));
  }

  try {
    const token = req.cookies.accessToken;
    const decoded = await jwt.verify(token, process.env.SECRET_KEY!);
    const { name, email, id, role } = decoded as UserPayload;

    req.currentUser = { name, email, id, role };
    next();
  } catch (e) {
    next(new BadRequestException('Please Login Again'));
  }
}
