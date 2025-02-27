import { Router } from 'express';
import articleValidations from './article.validation';
import validateRequest from '../../app/middleware/validateRequest';
import articleControllers from './article.controller';

const router = Router();

router.post(
  '/create-article',
  validateRequest(articleValidations.createArticleValidationSchema),
  articleControllers.createArticles,
);

router.get('/all-articles', articleControllers.getArticles);

router.get('/single-article/:id', articleControllers.getSingleArticle);

router.put(
  '/update-article/:id',
  validateRequest(articleValidations.updateArticleValidationSchema),
  articleControllers.updateArticle,
);
router.delete('/:id', articleControllers.deleteArticle);

export const articleRoutes = router;
