import { z } from 'zod';

const commentValidationSchema = z.object({
  comment: z.string({ required_error: 'comment is required' }).nonempty(),
});

const commentValidations = {
  commentValidationSchema,
};

export default commentValidations;
