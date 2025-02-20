/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { TGenericResponse } from '../interface/error';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const errorResponse: TGenericResponse = {
    statusCode: 404,
    message: 'Api is not found',
    errorSources: [
      {
        path: req.originalUrl,
        message: 'Api is not found',
      },
    ],
  };
  res.status(errorResponse.statusCode).json({
    errorResponse,
  });
};

export default notFound;
