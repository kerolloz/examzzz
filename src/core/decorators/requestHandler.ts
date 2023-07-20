import { NextFunction, Request, Response } from 'express';
import { EndpointHandler, SuccessfulResponse } from './types';

export function requestHandler(handler: EndpointHandler) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    let response: SuccessfulResponse;
    try {
      response = await handler(req, res);
    } catch (err: unknown) {
      return next(err);
    }

    if (res.headersSent) {
      return;
    }

    if (response === null || response === undefined) {
      return res.status(204).send();
    }

    // content
    let content = typeof response === 'string' ? response : response.content;
    if (typeof content === 'string') {
      content = { message: content }; // convert string to obj
    } else {
      content = content || {}; // always return obj
    }

    // status
    let status = 200;
    if (typeof response != 'string' && response.status) {
      ({ status } = response);
    } else if (content == undefined) {
      status = 204;
    }

    return res.status(status).json(content);
  };
}
