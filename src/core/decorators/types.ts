import { Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export interface ISuccessfulResponse {
  status?: 200 | 201 | 202 | 204;
  content?: unknown;
}

export interface IErrorResponse {
  label: string;
  type: string;
  message: string;
}

export interface IValidationRules {
  params?: AnyZodObject;
  query?: AnyZodObject;
  body?: AnyZodObject;
}

export type SuccessfulResponse = ISuccessfulResponse | string | void;
export type EndpointHandler = (
  req: Request,
  res: Response,
) => Promise<SuccessfulResponse> | SuccessfulResponse;
