import { ErrorRequestHandler } from 'express';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';
  let errorSources = [
    {
      message: err.message,
      path: '',
    },
  ];
  res.status(statusCode).json({
    message: message,
    errorSources: errorSources,
    err,
    stack:
      config.node_env === 'development' && err.stack ? err.stack : undefined,
  });
};

export default globalErrorHandler;
