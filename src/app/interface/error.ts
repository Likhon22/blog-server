export type TErrorSources = {
  message: string;
  path: string | number;
}[];

export type TGenericResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
