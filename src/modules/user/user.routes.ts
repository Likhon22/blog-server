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
routes.post('/login', userControllers.loginUser);
routes.get('/all-users', userControllers.getUsers);
routes.get('/:email', userControllers.getSingleUser);
routes.patch(
  '/update-role/:userId',
  validateRequest(userValidations.updateUserValidationSchema),
  userControllers.updateUser,
);
export const userRoutes = routes;
