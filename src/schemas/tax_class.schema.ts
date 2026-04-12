import z from 'zod';
import { attributesSchema, integerLikeSchema, oneOrMany } from '.';

export const taxClassSchema = z.object({
  taxClassID: integerLikeSchema,
  name: z.string(),
  timeStamp: z.string().optional(),
});

export const taxClassResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  TaxClass: taxClassSchema,
});

export const taxClassesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  TaxClass: oneOrMany(taxClassSchema).optional(),
});

export const taxClassMutationSchema = z.object({
  name: z.string().optional(),
});
