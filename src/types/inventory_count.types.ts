import type z from 'zod';
import type {
  inventoryCountMutationSchema,
  inventoryCountResponseSchema,
  inventoryCountSchema,
  inventoryCountsResponseSchema,
} from '../schemas';

export type InventoryCount = z.infer<typeof inventoryCountSchema>;
export type InventoryCountResponse = z.infer<typeof inventoryCountResponseSchema>;
export type InventoryCountsResponse = z.infer<typeof inventoryCountsResponseSchema>;
export type InventoryCountMutation = z.infer<typeof inventoryCountMutationSchema>;
