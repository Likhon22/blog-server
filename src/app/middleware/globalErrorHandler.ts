/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';
import config from '../config';
import handleZodError from '../error/handleZodError';
import { TErrorSources } from '../interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';
  let errorSources: TErrorSources = [
    {
      message: err.message,
      path: '',
    },
  ];
  if (err.name === 'ZodError') {
    const simpliFiedError = handleZodError(err);
    statusCode = simpliFiedError.statusCode;
    message = simpliFiedError.message;
    errorSources = simpliFiedError.errorSources;
  }
  res.status(statusCode).json({
    message: message,
    errorSources: errorSources,
    err,
    stack:
      config.node_env === 'development' && err.stack ? err.stack : undefined,
  });
};

export default globalErrorHandler;
