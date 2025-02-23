import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema, ValidationError } from 'joi';

function formatErrorMessage(error: ValidationError) {
  return error.details.map((item) => item.message);
}

export function ValidationSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: 'Validation Error',
        error: formatErrorMessage(error)
      });
      return;
    }
    next();
  };
}
