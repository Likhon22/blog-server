import { z } from 'zod';

const createArticleValidationSchema = z.object({
  category: z
    .string({ required_error: 'category is required' })
    .nonempty('category cannot be empty'),
  post: z.string({ required_error: 'post is required' }).nonempty(),
});

const articleValidations = {
  createArticleValidationSchema,
};

export default articleValidations;
