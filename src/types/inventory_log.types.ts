import type z from 'zod';
import type { inventoryLogResponseSchema, inventoryLogSchema, inventoryLogsResponseSchema } from '../schemas';

export type InventoryLog = z.infer<typeof inventoryLogSchema>;
export type InventoryLogResponse = z.infer<typeof inventoryLogResponseSchema>;
export type InventoryLogsResponse = z.infer<typeof inventoryLogsResponseSchema>;
