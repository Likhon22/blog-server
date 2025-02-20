import { Router } from 'express';
import { userRoutes } from '../../modules/user/user.routes';

type TRoute = {
  path: string;
  routes: Router;
};
const routes = Router();
const moduleRoutes: TRoute[] = [
  {
    path: '/users',
    routes: userRoutes,
  },
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.routes);
});

export default routes;
