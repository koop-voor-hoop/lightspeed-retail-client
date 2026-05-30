import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { booleanLikeSchema, integerLikeSchema, oneOrMany } from './helper.schema';

export const registerSchema = z.object({
  registerID: integerLikeSchema,
  name: z.string().optional(),
  open: booleanLikeSchema.optional(),
  openTime: z.string().optional(),
  archived: booleanLikeSchema.optional(),
  tipEnabled: booleanLikeSchema.optional(),
  openEmployeeID: integerLikeSchema.optional(),
  shopID: integerLikeSchema.optional(),
  ccTerminalID: integerLikeSchema.optional(),
});

export const registerResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Register: registerSchema,
});

export const registersResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Register: oneOrMany(registerSchema).optional(),
});
