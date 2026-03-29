import type z from 'zod';
import type {
  itemMutationSchema,
  itemPriceSchema,
  itemPricesSchema,
  itemResponseSchema,
  itemSchema,
  itemShopsSchema,
  itemsResponseSchema,
} from '../schemas';

export type ItemPrice = z.infer<typeof itemPriceSchema>;
export type ItemPrices = z.infer<typeof itemPricesSchema>;
export type ItemShops = z.infer<typeof itemShopsSchema>;
export type Item = z.infer<typeof itemSchema>;
export type ItemResponse = z.infer<typeof itemResponseSchema>;
export type ItemsResponse = z.infer<typeof itemsResponseSchema>;
export type ItemMutation = z.infer<typeof itemMutationSchema>;
