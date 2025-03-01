import { z } from 'zod';

const createUserValidationSchema = z.object({
  name: z.string({ required_error: 'name is required' }).nonempty(),
  email: z.string({ required_error: 'email is required' }),
});
const updateUserValidationSchema = z.object({
  role: z.string({ required_error: 'role is required' }).nonempty(),
});

const userValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};

export default userValidations;
