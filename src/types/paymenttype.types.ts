import type z from 'zod';
import type {
  paymentTypeMutationSchema,
  paymentTypeResponseSchema,
  paymentTypeSchema,
  paymentTypesResponseSchema,
} from '../schemas';

export type PaymentType = z.infer<typeof paymentTypeSchema>;
export type PaymentTypeResponse = z.infer<typeof paymentTypeResponseSchema>;
export type PaymentTypesResponse = z.infer<typeof paymentTypesResponseSchema>;
export type PaymentTypeMutation = z.infer<typeof paymentTypeMutationSchema>;
