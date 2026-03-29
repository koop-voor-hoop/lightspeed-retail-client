import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { booleanLikeSchema, integerLikeSchema, oneOrMany } from './helper.schema';

export const quoteSchema = z.object({
  quoteID: integerLikeSchema,
  issueDate: z.string(),
  notes: z.string(),
  archived: booleanLikeSchema,
  employeeID: integerLikeSchema,
  saleID: integerLikeSchema,
});

export const quoteResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Quote: quoteSchema,
});

export const quotesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Quote: oneOrMany(quoteSchema).optional(),
});

export const quoteMutationSchema = z.object({
  issueDate: z.string().optional(),
  notes: z.string().optional(),
  archived: booleanLikeSchema.optional(),
  employeeID: integerLikeSchema.optional(),
  saleID: integerLikeSchema.optional(),
});
