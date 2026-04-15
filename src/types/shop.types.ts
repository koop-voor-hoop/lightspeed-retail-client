import type z from 'zod';
import type { shopMutationSchema, shopResponseSchema, shopSchema, shopsResponseSchema } from '../schemas';

export type Shop = z.infer<typeof shopSchema>;
export type ShopResponse = z.infer<typeof shopResponseSchema>;
export type ShopsResponse = z.infer<typeof shopsResponseSchema>;
export type ShopMutation = z.infer<typeof shopMutationSchema>;
