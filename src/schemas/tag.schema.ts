import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { integerLikeSchema, oneOrMany } from './helper.schema';

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

/** Tags on an Item or ItemMatrix, returned when `Tags` or `TagRelations.Tag` is loaded. Names come back lowercased; a single tag is normalized to a one-item array. */
export const tagsSchema = z.object({
  tag: oneOrMany(z.string()).optional(),
});

/** Replaces the record's whole tag list; an empty list clears it. A plain string array is rejected with 400. */
export const tagsMutationSchema = z.object({
  tag: z.array(z.object({ name: z.string() })),
});
