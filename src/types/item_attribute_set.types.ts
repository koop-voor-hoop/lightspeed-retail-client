import type z from 'zod';
import type {
  itemAttributeSetResponseSchema,
  itemAttributeSetSchema,
  itemAttributeSetsResponseSchema,
} from '../schemas';

export type ItemAttributeSet = z.infer<typeof itemAttributeSetSchema>;
export type ItemAttributeSetResponse = z.infer<typeof itemAttributeSetResponseSchema>;
export type ItemAttributeSetsResponse = z.infer<typeof itemAttributeSetsResponseSchema>;
