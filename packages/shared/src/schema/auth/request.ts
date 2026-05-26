import { z } from 'zod';

export const signupRequestSchema = z.object({
  email: z.email('Enter valid email'),
  password: z
    .string('Password cannot be empty')
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[a-z]/, 'Must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Must contain at least one number'),
  company: z.string().min(2).optional(),
  name: z
    .string('Name cannot be empty')
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name cannot exceed 50 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name contains invalid characters'),
});

export const loginRequestSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type SignupRequest = z.infer<typeof signupRequestSchema>;
export type LoginRequest = z.infer<typeof loginRequestSchema>;
