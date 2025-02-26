import { Router } from 'express';
import categoryValidations from './category.validation';
import validateRequest from '../../app/middleware/validateRequest';

const router = Router();

router.post(
  '/create-category',
  validateRequest(categoryValidations.createCategoryValidationSchema),
);

export const categoryRoutes = router;
