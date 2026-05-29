import z from 'zod';
import { attributesSchema, integerLikeSchema, oneOrMany } from '.';

export const inventoryCountItemSchema = z.object({
  inventoryCountItemID: integerLikeSchema,
  qty: integerLikeSchema,
  timeStamp: z.string().optional(),
  inventoryCountID: integerLikeSchema,
  itemID: integerLikeSchema,
  employeeID: integerLikeSchema,
});

export const inventoryCountItemResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryCountItem: inventoryCountItemSchema,
});

const inventoryCountItemsCollectionSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  oneOrMany(inventoryCountItemSchema).optional().catch(undefined),
);

export const inventoryCountItemsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryCountItem: inventoryCountItemsCollectionSchema,
});

export const inventoryCountItemMutationSchema = z.object({
  qty: integerLikeSchema,
  inventoryCountID: integerLikeSchema,
  itemID: integerLikeSchema,
  employeeID: integerLikeSchema,
});
