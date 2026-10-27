import type z from 'zod';
import type {
  tagMutationSchema,
  tagResponseSchema,
  tagSchema,
  tagsMutationSchema,
  tagsResponseSchema,
  tagsSchema,
} from '../schemas';

export type Tag = z.infer<typeof tagSchema>;
export type TagResponse = z.infer<typeof tagResponseSchema>;
export type TagsResponse = z.infer<typeof tagsResponseSchema>;
export type TagMutation = z.infer<typeof tagMutationSchema>;
export type Tags = z.infer<typeof tagsSchema>;
export type TagsMutation = z.infer<typeof tagsMutationSchema>;
