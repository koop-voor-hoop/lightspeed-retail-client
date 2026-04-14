import type z from 'zod';
import type {
  industriesResponseSchema,
  industryMutationSchema,
  industryResponseSchema,
  industrySchema,
} from '../schemas';

export type Industry = z.infer<typeof industrySchema>;
export type IndustryResponse = z.infer<typeof industryResponseSchema>;
export type IndustriesResponse = z.infer<typeof industriesResponseSchema>;
export type IndustryMutation = z.infer<typeof industryMutationSchema>;
