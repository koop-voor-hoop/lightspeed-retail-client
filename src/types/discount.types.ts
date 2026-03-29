import type z from 'zod';
import type {
  discountMutationSchema,
  discountResponseSchema,
  discountSchema,
  discountsResponseSchema,
} from '../schemas';

export type Discount = z.infer<typeof discountSchema>;
export type DiscountResponse = z.infer<typeof discountResponseSchema>;
export type DiscountsResponse = z.infer<typeof discountsResponseSchema>;
export type DiscountMutation = z.infer<typeof discountMutationSchema>;
