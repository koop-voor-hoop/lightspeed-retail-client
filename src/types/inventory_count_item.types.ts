import type z from 'zod';
import type {
  inventoryCountItemMutationSchema,
  inventoryCountItemResponseSchema,
  inventoryCountItemSchema,
  inventoryCountItemsResponseSchema,
} from '../schemas';

export type InventoryCountItem = z.infer<typeof inventoryCountItemSchema>;
export type InventoryCountItemResponse = z.infer<typeof inventoryCountItemResponseSchema>;
export type InventoryCountItemsResponse = z.infer<typeof inventoryCountItemsResponseSchema>;
export type InventoryCountItemMutation = z.infer<typeof inventoryCountItemMutationSchema>;
