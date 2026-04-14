import type z from 'zod';
import type {
  priceLevelMutationSchema,
  priceLevelResponseSchema,
  priceLevelSchema,
  priceLevelsResponseSchema,
} from '../schemas';

export type PriceLevel = z.infer<typeof priceLevelSchema>;
export type PriceLevelResponse = z.infer<typeof priceLevelResponseSchema>;
export type PriceLevelsResponse = z.infer<typeof priceLevelsResponseSchema>;
export type PriceLevelMutation = z.infer<typeof priceLevelMutationSchema>;
