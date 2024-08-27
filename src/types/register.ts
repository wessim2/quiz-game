import { z } from "zod";

export const RegisterInputSchema = z
    .object({
      email: z.string().min(1, 'Required').email('Invalid email'),
      password: z.string().min(4, 'Required'),
      confirmPassword: z.string().min(4),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: 'custom',
          message: 'The passwords did not match',
          path: ['confirmPassword'],
        });
      }
    });

  export type registerSchema = z.infer<typeof RegisterInputSchema>;
