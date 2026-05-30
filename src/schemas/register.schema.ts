import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { booleanLikeSchema, integerLikeSchema, oneOrMany } from './helper.schema';

const optionalIntegerLikeSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  integerLikeSchema.optional(),
);

export const registerSchema = z.object({
  registerID: integerLikeSchema,
  name: z.string().optional(),
  open: booleanLikeSchema.optional(),
  openTime: z.string().optional(),
  archived: booleanLikeSchema.optional(),
  tipEnabled: booleanLikeSchema.optional(),
  openEmployeeID: optionalIntegerLikeSchema,
  shopID: optionalIntegerLikeSchema,
  ccTerminalID: optionalIntegerLikeSchema,
});

export const registerResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Register: registerSchema,
});

export const registersResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Register: oneOrMany(registerSchema).optional(),
});
