import { ZodError, ZodIssue } from 'zod';
import { TErrorSources, TGenericResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenericResponse => {
  const statusCode = 400;
  const message = 'Validation error: ';
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      message: issue.message,
      path: issue?.path[issue.path.length - 1],
    };
  });
  return {
    statusCode,
    message,
    errorSources,
  };
};
export default handleZodError;
