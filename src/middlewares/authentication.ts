import { NextFunction, Request, Response } from 'express';
import { HttpException, UNAUTHORIZED } from '../core';
import { JsonWebToken } from '../lib/JsonWebToken';
import { IAuthToken } from '../types/auth';

export function authenticate(req: Request, _: Response, next: NextFunction) {
  const token = req.token;

  if (!token) {
    return next(
      new HttpException(UNAUTHORIZED, { message: 'a token is needed' }),
    );
  }
  const decoded_token = JsonWebToken.decode(token) as IAuthToken;
  if (decoded_token) {
    // const user = await UserModel.findById(decoded_token.id);
    // if (user && JsonWebToken.verify(token, user.password)) {
    //   (req as IAuthRequest).currentUser = user;
    //   return next();
    // }
  }

  return next(new HttpException(UNAUTHORIZED, { message: 'invalid token' }));
}
