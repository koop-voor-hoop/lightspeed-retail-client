import z from 'zod';
import { attributesSchema, booleanLikeSchema, integerLikeSchema, oneOrMany } from '.';

const optionalCalculationSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.any().optional(),
);

export const priceLevelSchema = z.object({
  priceLevelID: integerLikeSchema,
  name: z.string(),
  archived: booleanLikeSchema.optional(),
  canBeArchived: booleanLikeSchema.optional(),
  type: z.string().optional(),
  Calculation: optionalCalculationSchema,
  timeStamp: z.string().optional(),
});

export const priceLevelResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  PriceLevel: priceLevelSchema,
});

export const priceLevelsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  PriceLevel: oneOrMany(priceLevelSchema).optional(),
});

export const priceLevelMutationSchema = z.object({
  name: z.string().optional(),
  archived: booleanLikeSchema.optional(),
});
