import type z from 'zod';
import type { tagMutationSchema, tagResponseSchema, tagSchema, tagsResponseSchema } from '../schemas';

export type Tag = z.infer<typeof tagSchema>;
export type TagResponse = z.infer<typeof tagResponseSchema>;
export type TagsResponse = z.infer<typeof tagsResponseSchema>;
export type TagMutation = z.infer<typeof tagMutationSchema>;
