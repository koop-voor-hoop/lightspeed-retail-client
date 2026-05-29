import type z from 'zod';
import type {
  inventoryCountReconcileMutationSchema,
  inventoryCountReconcileResponseSchema,
  inventoryCountReconcileSchema,
  inventoryCountReconcilesResponseSchema,
} from '../schemas';

export type InventoryCountReconcile = z.infer<typeof inventoryCountReconcileSchema>;
export type InventoryCountReconcileResponse = z.infer<typeof inventoryCountReconcileResponseSchema>;
export type InventoryCountReconcilesResponse = z.infer<typeof inventoryCountReconcilesResponseSchema>;
export type InventoryCountReconcileMutation = z.infer<typeof inventoryCountReconcileMutationSchema>;
