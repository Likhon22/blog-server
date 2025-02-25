import { z } from 'zod';

const createArticleValidationSchema = z.object({
  title: z.string({ required_error: 'title is required' }).nonempty(),
  category: z
    .string({ required_error: 'category is required' })
    .nonempty('category cannot be empty'),
  post: z.string({ required_error: 'post is required' }).nonempty(),
});
const updateArticleValidationSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  post: z.string().optional(),
});
const articleValidations = {
  createArticleValidationSchema,
  updateArticleValidationSchema,
};

export default articleValidations;
