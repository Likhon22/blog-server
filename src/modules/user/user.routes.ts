import { Router } from 'express';
import userControllers from './user.controller';
import validateRequest from '../../app/middleware/validateRequest';
import userValidations from './user.validation';

const routes = Router();
routes.post(
  '/create-user',
  validateRequest(userValidations.createUserValidationSchema),
  userControllers.createUser,
);

export const userRoutes = routes;
