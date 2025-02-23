import { StatusCodes } from 'http-status-codes';

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;

  constructor(message: string) {
    super(message);
  }
}

export class BadRequestException extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  status: string = 'error';
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundException extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;
  status = 'error';
  constructor(message: string) {
    super(message);
  }
}

export class UnAuthorizedException extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  status = 'error';
  constructor(message: string) {
    super(message);
  }
}

export class ForbiddenException extends CustomError {
  statusCode = StatusCodes.FORBIDDEN;
  status = 'error';
  constructor(message: string) {
    super(message);
  }
}

export class InternalServerError extends CustomError {
  statusCode = StatusCodes.FORBIDDEN;
  status = 'error';
  constructor(message: string) {
    super(message);
  }
}
