import prisma from '~/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BadRequestException } from '~/shared/cores/error.core';
import { generateToken } from '~/shared/helpers/jwt.helper';

class AuthService {
  public async createAuth(requestBody: any) {
    const { email, password, name } = requestBody;

    const hashPassword = await bcrypt.hash(password, 10);

    const data = {
      email,
      password: hashPassword,
      name
    };

    const user = await prisma.user.create({
      data
    });

    const accessToken = generateToken(user);

    return accessToken;
  }

  public async Signin(requestBody: any) {
    const { email, password } = requestBody;

    //check email exists
    const user = await this.getUserByEmail(email);
    if (!user) {
      throw new BadRequestException(`${email} doesnt exists `);
    }
    //compare password

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new BadRequestException('Invalid Password');
    }

    const accessToken = generateToken(user);
    return accessToken;
  }

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }
}

export default new AuthService();
