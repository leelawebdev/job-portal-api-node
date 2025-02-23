import { User } from '@prisma/client';
import prisma from '~/prisma';
import { BadRequestException } from '~/shared/cores/error.core';

class UserService {
  async getAllUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async createUser(request: any) {
    const { name, email, password } = request;
    const userData = {
      name,
      email,
      password,
      role: 'CANDIDATE',
      status: true
    };

    return await prisma.user.create({
      data: userData as User
    });
  }
}

export default new UserService();
