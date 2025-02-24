import { z } from 'zod';

const createUserValidationSchema = z.object({
  name: z.string({ required_error: 'name is required' }).nonempty(),
  email: z.string({ required_error: 'email is required' }),
});

const userValidations = {
  createUserValidationSchema,
};

export default userValidations;
