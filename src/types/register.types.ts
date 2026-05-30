import type z from 'zod';
import type {
  registerResponseSchema,
  registerSchema,
  registersResponseSchema,
} from '../schemas/register.schema';

export type Register = z.infer<typeof registerSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
export type RegistersResponse = z.infer<typeof registersResponseSchema>;
