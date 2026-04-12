import z from 'zod';
import { attributesSchema, booleanLikeSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from '.';

export const discountSchema = z.object({
  discountID: integerLikeSchema,
  name: z.string(),
  discountAmount: numberLikeSchema,
  discountPercent: numberLikeSchema,
  requireCustomer: booleanLikeSchema,
  archived: booleanLikeSchema.optional(),
  timeStamp: z.string().optional(),
});

export const discountResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Discount: discountSchema,
});

export const discountsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Discount: oneOrMany(discountSchema).optional(),
});

export const discountMutationSchema = z.object({
  name: z.string().optional(),
  discountAmount: numberLikeSchema.optional(),
  discountPercent: numberLikeSchema.optional(),
  requireCustomer: booleanLikeSchema.optional(),
});
