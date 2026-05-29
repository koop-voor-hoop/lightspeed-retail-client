import z from 'zod';
import { attributesSchema, booleanLikeSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from '.';

export const inventoryLogSchema = z.object({
  inventoryLogID: integerLikeSchema,
  qohChange: integerLikeSchema.optional(),
  costChange: numberLikeSchema.optional(),
  createTime: z.string().optional(),
  automated: booleanLikeSchema.optional(),
  reason: z.string().optional(),
  causedNegative: booleanLikeSchema.optional(),
  employeeID: integerLikeSchema.optional(),
  itemID: integerLikeSchema.optional(),
  shopID: integerLikeSchema.optional(),
  orderID: integerLikeSchema.optional(),
  transferID: integerLikeSchema.optional(),
  saleID: integerLikeSchema.optional(),
  inventoryCountID: integerLikeSchema.optional(),
  customerID: integerLikeSchema.optional(),
  vendorReturnID: integerLikeSchema.optional(),
  itemImportID: integerLikeSchema.optional(),
});

export const inventoryLogResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryLog: inventoryLogSchema,
});

const inventoryLogsCollectionSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  oneOrMany(inventoryLogSchema).optional().catch(undefined),
);

export const inventoryLogsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  InventoryLog: inventoryLogsCollectionSchema,
});
