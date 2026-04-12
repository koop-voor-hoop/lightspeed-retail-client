import z from 'zod';
import { attributesSchema, booleanLikeSchema, integerLikeSchema, oneOrMany } from '.';

export const itemAttributeSetSchema = z.object({
  itemAttributeSetID: integerLikeSchema,
  name: z.string(),
  attributeName1: z.string().optional(),
  attributeName2: z.string().optional(),
  attributeName3: z.string().optional(),
  system: booleanLikeSchema.optional(),
  archived: booleanLikeSchema.optional(),
});

export const itemAttributeSetResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ItemAttributeSet: itemAttributeSetSchema,
});

export const itemAttributeSetsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ItemAttributeSet: oneOrMany(itemAttributeSetSchema).optional(),
});
