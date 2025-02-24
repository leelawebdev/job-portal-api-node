import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export function generateToken(user: User) {
  const accessToken = jwt.sign(user, process.env.SECRET_KEY!, {
    expiresIn: '1d'
  });
  return accessToken;
}
