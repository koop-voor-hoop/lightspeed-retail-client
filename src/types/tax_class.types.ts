import type z from 'zod';
import type {
  taxClassesResponseSchema,
  taxClassMutationSchema,
  taxClassResponseSchema,
  taxClassSchema,
} from '../schemas';

export type TaxClass = z.infer<typeof taxClassSchema>;
export type TaxClassResponse = z.infer<typeof taxClassResponseSchema>;
export type TaxClassesResponse = z.infer<typeof taxClassesResponseSchema>;
export type TaxClassMutation = z.infer<typeof taxClassMutationSchema>;
