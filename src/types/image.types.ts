import type z from 'zod';
import type { imageMutationSchema, imageResponseSchema, imageSchema, imagesResponseSchema } from '../schemas';

export type Image = z.infer<typeof imageSchema>;
export type ImageResponse = z.infer<typeof imageResponseSchema>;
export type ImagesResponse = z.infer<typeof imagesResponseSchema>;
export type ImageMutation = z.infer<typeof imageMutationSchema>;
