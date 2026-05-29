import type z from 'zod';
import type {
  itemShopInItemMutationSchema,
  itemShopMutationSchema,
  itemShopResponseSchema,
  itemShopSchema,
  itemShopsInItemMutationSchema,
  itemShopsResponseSchema,
} from '../schemas';

export type ItemShop = z.infer<typeof itemShopSchema>;
export type ItemShopResponse = z.infer<typeof itemShopResponseSchema>;
export type ItemShopsResponse = z.infer<typeof itemShopsResponseSchema>;
export type ItemShopMutation = z.infer<typeof itemShopMutationSchema>;
export type ItemShopInItemMutation = z.infer<typeof itemShopInItemMutationSchema>;
export type ItemShopsInItemMutation = z.infer<typeof itemShopsInItemMutationSchema>;
