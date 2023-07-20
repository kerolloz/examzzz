export type HttpExceptionStatus = 400 | 401 | 403 | 404 | 422 | 500;

export type ExceptionDetails = {
  message?: string;
  errors?: unknown;
};

export default class HttpException extends Error {
  status: HttpExceptionStatus;
  errors?: unknown;
  constructor(
    status: HttpExceptionStatus,
    { message, errors }: ExceptionDetails = {},
  ) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}
