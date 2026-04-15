import z from 'zod';
import {
  attributesSchema,
  booleanLikeSchema,
  integerLikeSchema,
  numberLikeSchema,
  oneOrMany,
  unknownRelationSchema,
} from '.';

export const vendorPurchasingCurrencySchema = z.object({
  code: z.string(),
  symbol: z.string(),
  rate: numberLikeSchema,
});

export const vendorSchema = z.object({
  vendorID: integerLikeSchema,
  name: z.string(),
  archived: booleanLikeSchema.optional(),
  accountNumber: z.string().optional(),
  priceLevel: z.string().optional(),
  updatePrice: booleanLikeSchema.optional(),
  updateCost: booleanLikeSchema.optional(),
  updateDescription: booleanLikeSchema.optional(),
  shareSellThrough: booleanLikeSchema.optional(),
  timeStamp: z.string().optional(),
  b2bSellerUID: z.string().optional(),
  Contact: unknownRelationSchema.optional(),
  Reps: z.any().optional(),
  purchasingCurrency: vendorPurchasingCurrencySchema.optional(),
});

export const vendorResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Vendor: vendorSchema,
});

export const vendorsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Vendor: oneOrMany(vendorSchema).optional(),
});

export const vendorMutationSchema = z.object({
  name: z.string().optional(),
  accountNumber: z.string().optional(),
  priceLevel: z.string().optional(),
  updatePrice: booleanLikeSchema.optional(),
  updateCost: booleanLikeSchema.optional(),
  updateDescription: booleanLikeSchema.optional(),
  shareSellThrough: booleanLikeSchema.optional(),
  b2bSellerUID: z.string().optional(),
  Contact: unknownRelationSchema.optional(),
  Reps: z.any().optional(),
});
