import type z from 'zod';
import type {
  itemImageMutationSchema,
  itemImageResponseSchema,
  itemImageSchema,
  itemImagesResponseSchema,
} from '../schemas';

export type ItemImage = z.infer<typeof itemImageSchema>;
export type ItemImageResponse = z.infer<typeof itemImageResponseSchema>;
export type ItemImagesResponse = z.infer<typeof itemImagesResponseSchema>;
export type ItemImageMutation = z.infer<typeof itemImageMutationSchema>;
