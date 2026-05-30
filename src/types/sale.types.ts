import type z from 'zod';
import type {
  saleMutationSchema,
  saleResponseSchema,
  saleSchema,
  salesResponseSchema,
} from '../schemas/sale.schema';

export type Sale = z.infer<typeof saleSchema>;
export type SaleResponse = z.infer<typeof saleResponseSchema>;
export type SalesResponse = z.infer<typeof salesResponseSchema>;
export type SaleMutation = z.infer<typeof saleMutationSchema>;
