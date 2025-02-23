import { NextFunction, Request, Response } from 'express';
import userService from '../services/user.service';
import { StatusCodes } from 'http-status-codes';

class UserController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    const allUsers = await userService.getAllUsers();
    res.status(StatusCodes.OK).json({
      message: 'users details',
      data: allUsers
    });
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const newUser = await userService.createUser(req.body);

    res.status(StatusCodes.CREATED).json({
      message: 'user created',
      data: newUser
    });
  }
}

export default new UserController();
