import z from 'zod';
import { attributesSchema, integerLikeSchema, oneOrMany } from '.';

export const tagSchema = z.object({
  tagID: integerLikeSchema,
  name: z.string(),
});

export const tagResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Tag: tagSchema,
});

export const tagsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Tag: oneOrMany(tagSchema).optional(),
});

export const tagMutationSchema = z.object({
  name: z.string().optional(),
});
