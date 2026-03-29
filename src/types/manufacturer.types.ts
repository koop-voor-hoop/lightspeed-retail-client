import type z from 'zod';
import type {
  manufacturerMutationSchema,
  manufacturerResponseSchema,
  manufacturerSchema,
  manufacturersResponseSchema,
} from '../schemas';

export type Manufacturer = z.infer<typeof manufacturerSchema>;
export type ManufacturerResponse = z.infer<typeof manufacturerResponseSchema>;
export type ManufacturersResponse = z.infer<typeof manufacturersResponseSchema>;
export type ManufacturerMutation = z.infer<typeof manufacturerMutationSchema>;
