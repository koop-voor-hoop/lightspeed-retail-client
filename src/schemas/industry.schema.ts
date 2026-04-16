import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { booleanLikeSchema, integerLikeSchema, oneOrMany } from './helper.schema';

export const industrySchema = z.object({
  industryID: integerLikeSchema,
  name: z.string(),
  enabled: booleanLikeSchema.optional(),
  catalogIndustryID: integerLikeSchema.optional(),
});

export const industryResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Industry: industrySchema,
});

export const industriesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Industry: oneOrMany(industrySchema).optional(),
});

export const industryMutationSchema = z.object({
  enabled: booleanLikeSchema.optional(),
});
