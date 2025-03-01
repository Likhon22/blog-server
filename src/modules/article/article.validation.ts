import { z } from 'zod';

const additionalImageValidationSchema = z.object({
  position: z.number({ required_error: 'position is required' }).int(),
  url: z.string({ required_error: 'url is required' }).nonempty(),
  caption: z.string({ required_error: 'caption is required' }).nonempty(),
});

const createArticleValidationSchema = z.object({
  title: z.string({ required_error: 'title is required' }).nonempty(),
  category: z
    .string({ required_error: 'category is required' })
    .nonempty('category cannot be empty'),
  post: z.string({ required_error: 'post is required' }).nonempty(),
  bannerImg: z.string({ required_error: 'bannerImg is required' }).nonempty(),
  additionalImages: z.array(additionalImageValidationSchema).optional(),
});
const updateArticleValidationSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  post: z.string().optional(),
  bannerImg: z.string().optional(),
  featured: z.boolean().optional(),
  additionalImages: z.array(additionalImageValidationSchema).optional(),
});
const articleValidations = {
  createArticleValidationSchema,
  updateArticleValidationSchema,
};

export default articleValidations;
