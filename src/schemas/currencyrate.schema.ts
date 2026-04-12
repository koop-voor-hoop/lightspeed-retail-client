import z from 'zod';
import { attributesSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from '.';

export const currencyRateSchema = z.object({
  currencyRateID: integerLikeSchema,
  currencyCode: z.string(),
  rate: numberLikeSchema,
  createTime: z.string().optional(),
  timeStamp: z.string().optional(),
});

export const currencyRateResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  CurrencyRate: currencyRateSchema,
});

export const currencyRatesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  CurrencyRate: oneOrMany(currencyRateSchema).optional(),
});

export const currencyRateMutationSchema = z.object({
  currencyCode: z.string().optional(),
  rate: numberLikeSchema.optional(),
});
