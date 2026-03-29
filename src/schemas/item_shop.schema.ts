import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { integerLikeSchema, numberLikeSchema, oneOrMany } from './helper.schema';

export const itemShopSchema = z.object({
  itemShopID: integerLikeSchema,
  qoh: integerLikeSchema.optional(),
  sellable: integerLikeSchema.optional(),
  backorder: integerLikeSchema.optional(),
  componentQoh: integerLikeSchema.optional(),
  componentBackorder: integerLikeSchema.optional(),
  reorderPoint: integerLikeSchema.optional(),
  reorderLevel: integerLikeSchema.optional(),
  timeStamp: z.string().optional(),
  itemID: integerLikeSchema,
  shopID: integerLikeSchema,
  onLayaway: integerLikeSchema.optional(),
  onSpecialOrder: integerLikeSchema.optional(),
  onWorkorder: integerLikeSchema.optional(),
  onTransferOut: integerLikeSchema.optional(),
  onTransferIn: integerLikeSchema.optional(),
  averageCost: numberLikeSchema.optional(),
  totalValueFifo: numberLikeSchema.optional(),
  totalValueAvgCost: numberLikeSchema.optional(),
  totalValueNegativeInventory: numberLikeSchema.optional(),
  lastReceivedCost: numberLikeSchema.optional(),
  lastReceivedLotID: integerLikeSchema.optional(),
  nextFifoLotCost: numberLikeSchema.optional(),
  nextFifoLotID: integerLikeSchema.optional(),
});

export const itemShopResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ItemShop: itemShopSchema,
});

export const itemShopsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ItemShop: oneOrMany(itemShopSchema).optional(),
});

export const itemShopMutationSchema = z.object({
  reorderPoint: integerLikeSchema.optional(),
  reorderLevel: integerLikeSchema.optional(),
});
