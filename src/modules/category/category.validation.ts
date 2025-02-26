import { z } from 'zod';

const createCategoryValidationSchema = z.object({
  name: z
    .string({ required_error: 'name is required' })
    .nonempty('name cannot be empty'),
});

const categoryValidations = {
  createCategoryValidationSchema,
};

export default categoryValidations;
