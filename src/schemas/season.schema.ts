import z from 'zod';
import { attributesSchema, integerLikeSchema, oneOrMany } from '.';

export const seasonSchema = z.object({
  seasonID: integerLikeSchema,
  name: z.string(),
});

export const seasonResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Season: seasonSchema,
});

export const seasonsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Season: oneOrMany(seasonSchema).optional(),
});

export const seasonMutationSchema = z.object({
  name: z.string().optional(),
});
