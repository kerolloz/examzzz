import { NextFunction, Request, Response } from 'express';
import { FORBIDDEN, HttpException } from '../core';
import { IAuthRequest } from '../types/auth';
import { UserRole } from './roles';

export function authorize(...roles: UserRole[]) {
  return (req: Request, _: Response, next: NextFunction) => {
    const { userRole } = req as IAuthRequest;

    if (roles.find((role) => role === userRole)) {
      return next();
    }

    return next(
      new HttpException(FORBIDDEN, { message: 'you are not allowed' }),
    );
  };
}
