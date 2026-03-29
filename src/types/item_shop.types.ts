import type z from 'zod';
import type {
  itemShopMutationSchema,
  itemShopResponseSchema,
  itemShopSchema,
  itemShopsResponseSchema,
} from '../schemas';

export type ItemShop = z.infer<typeof itemShopSchema>;
export type ItemShopResponse = z.infer<typeof itemShopResponseSchema>;
export type ItemShopsResponse = z.infer<typeof itemShopsResponseSchema>;
export type ItemShopMutation = z.infer<typeof itemShopMutationSchema>;
