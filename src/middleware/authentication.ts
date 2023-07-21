import { NextFunction, Request, Response, type RequestHandler } from 'express';
import { HttpException, UNAUTHORIZED } from '../core';
import { JsonWebToken } from '../lib/JsonWebToken';
import { adminService, studentService } from '../modules';
import { IAuthRequest, IAuthToken } from '../types/auth';
import { UserRole } from './roles';

const authenticate = (async (req: Request, _: Response, next: NextFunction) => {
  const token = req.token;

  if (!token) {
    return next(
      new HttpException(UNAUTHORIZED, { message: 'a token is needed' }),
    );
  }
  const decoded_token = JsonWebToken.decode(token) as IAuthToken;
  if (decoded_token) {
    const user =
      decoded_token.role === UserRole.STUDENT
        ? await studentService.findOne({ id: decoded_token.id })
        : await adminService.findOne({ id: decoded_token.id });

    if (user && JsonWebToken.verify(token)) {
      (req as IAuthRequest).currentUser = user;
      (req as IAuthRequest).userRole = decoded_token.role;
      return next();
    }
  }

  return next(new HttpException(UNAUTHORIZED, { message: 'invalid token' }));
}) as RequestHandler;

export { authenticate };
