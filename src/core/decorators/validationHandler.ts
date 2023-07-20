import { NextFunction, Request, RequestHandler, Response } from 'express';
import { BAD_REQUEST, HttpException, NOT_FOUND } from '../exceptions';
import { IValidationRules } from './types';

export function validationHandler({
  params,
  query,
  body,
}: IValidationRules): RequestHandler {
  return (req: Request, _: Response, next: NextFunction): void => {
    if (params) {
      const paramsResult = params.safeParse(req.params);
      if (!paramsResult.success) {
        return next(
          new HttpException(NOT_FOUND, {
            message: 'invalid params',
            errors: paramsResult.error.issues,
          }),
        );
      }
      req.params = paramsResult.data;
    }

    if (query) {
      const queryResult = query.safeParse(req.query);
      if (!queryResult.success) {
        return next(
          new HttpException(BAD_REQUEST, {
            message: 'invalid query',
            errors: queryResult.error.issues,
          }),
        );
      }
      req.query = queryResult.data;
    }

    if (body) {
      const bodyResult = body.safeParse(req.body);
      if (!bodyResult.success) {
        return next(
          new HttpException(BAD_REQUEST, {
            message: 'invalid body',
            errors: bodyResult.error.issues,
          }),
        );
      }
      req.body = bodyResult.data;
    }

    next();
  };
}
