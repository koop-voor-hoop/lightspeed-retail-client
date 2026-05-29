import z from 'zod';
import { attributesSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from '.';

export const inventoryCountReconcileSchema = z.object({
  inventoryCountReconcileID: integerLikeSchema,
  createTime: z.string().optional(),
  costChange: numberLikeSchema.optional(),
  qohChange: integerLikeSchema.optional(),
  inventoryCountID: integerLikeSchema,
  itemID: integerLikeSchema.optional(),
});

export const inventoryCountReconcileResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryCountReconcile: oneOrMany(inventoryCountReconcileSchema),
});

const inventoryCountReconcilesCollectionSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  oneOrMany(inventoryCountReconcileSchema).optional().catch(undefined),
);

export const inventoryCountReconcilesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryCountReconcile: inventoryCountReconcilesCollectionSchema,
});

export const inventoryCountReconcileMutationSchema = z.object({
  inventoryCountID: integerLikeSchema,
  itemID: integerLikeSchema.optional(),
});
