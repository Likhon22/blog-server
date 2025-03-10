import { Response } from 'express';

type TMeta = {
  totalDocuments: number;
  totalPages: number;
  page: number;
  limit: number;
};
type TResponse<T> = {
  statusCode: number;
  message: string;
  success: boolean;
  data: T;
  meta?: TMeta;
};
const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
    meta: data.meta,
  });
};

export default sendResponse;
