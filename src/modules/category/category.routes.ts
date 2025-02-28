import { Router } from 'express';
import categoryValidations from './category.validation';
import validateRequest from '../../app/middleware/validateRequest';
import categoryControllers from './category.controller';

const router = Router();

router.post(
  '/create-category',
  validateRequest(categoryValidations.createCategoryValidationSchema),
  categoryControllers.createCategory,
);
router.get('/', categoryControllers.getAllCategories);
router.delete('/:id', categoryControllers.deleteCategory);
export const categoryRoutes = router;
