import { Router } from 'express';
import { userRoutes } from '../../modules/user/user.routes';
import { articleRoutes } from '../../modules/article/article.routes';
import { categoryRoutes } from '../../modules/category/category.routes';

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
  {
    path: '/articles',
    routes: articleRoutes,
  },
  {
    path: '/categories',
    routes: categoryRoutes,
  },
];

moduleRoutes.forEach((route) => {
  routes.use(route.path, route.routes);
});

export default routes;
