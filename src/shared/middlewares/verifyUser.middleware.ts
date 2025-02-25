import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../cores/error.core';
import jwt from 'jsonwebtoken';

export async function verifyUser(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req?.cookies?.accessToken) {
      throw new BadRequestException('Please Login Again');
    }
    const token = req.cookies.accessToken;
    const decoded = await jwt.verify(token, process.env.SECRET_KEY!);
    const { name, email, id, role } = decoded as UserPayload;

    req.currentUser = { name, email, id, role };
    next();
  } catch (e) {
    throw new BadRequestException('Please Login Again');
  }
}
