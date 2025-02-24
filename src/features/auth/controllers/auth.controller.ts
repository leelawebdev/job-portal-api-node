import { NextFunction, Request, Response } from 'express';
import authService from '../services/auth.service';
import { StatusCodes } from 'http-status-codes';
import { sendTokenToCookie } from '~/shared/helpers/cookie.helper';

class AuthController {
  public async Signup(req: Request, res: Response) {
    const accessToken = await authService.createAuth(req.body);

    sendTokenToCookie(res, accessToken);

    res.status(StatusCodes.CREATED).json({
      message: 'User Created Successfully',
      data: accessToken
    });
  }
  public async Signin(req: Request, res: Response) {
    const accessToken = await authService.Signin(req.body);
    sendTokenToCookie(res, accessToken);

    res.status(StatusCodes.OK).json({
      message: 'Successfully signedIn'
    });
  }

  getCurrentUser(req: Request, res: Response) {
    res.status(StatusCodes.OK).json({
      message: 'Get current user details',
      data: req.currentUser
    });
  }

  logout(req: Request, res: Response) {
    res.clearCookie('accessToken');
    res.status(StatusCodes.OK).json({
      message: 'logout successfully'
    });
  }
}

export default new AuthController();
