import z from 'zod';
import { attributesSchema, booleanLikeSchema, integerLikeSchema, oneOrMany } from '.';

export const inventoryCountSchema = z.object({
  inventoryCountID: integerLikeSchema,
  name: z.string(),
  timeStamp: z.string().optional(),
  archived: booleanLikeSchema.optional(),
  shopID: integerLikeSchema,
});

export const inventoryCountResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryCount: inventoryCountSchema,
});

const inventoryCountsCollectionSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  oneOrMany(inventoryCountSchema).optional().catch(undefined),
);

export const inventoryCountsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryCount: inventoryCountsCollectionSchema,
});

export const inventoryCountMutationSchema = z.object({
  name: z.string().optional(),
  shopID: integerLikeSchema,
});
