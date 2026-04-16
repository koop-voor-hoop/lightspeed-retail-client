import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { integerLikeSchema, oneOrMany } from './helper.schema';

export const manufacturerSchema = z.object({
  manufacturerID: integerLikeSchema,
  name: z.string(),
  createTime: z.string().optional(),
  timeStamp: z.string().optional(),
});

export const manufacturerResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Manufacturer: manufacturerSchema,
});

export const manufacturersResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Manufacturer: oneOrMany(manufacturerSchema).optional(),
});

export const manufacturerMutationSchema = z.object({
  name: z.string().optional(),
});
