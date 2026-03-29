import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { booleanLikeSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from './helper.schema';
import { itemShopSchema } from './item_shop.schema';

export const itemPriceSchema = z
  .object({
    amount: numberLikeSchema.optional(),
    useTypeID: integerLikeSchema.optional(),
    useType: z.string().optional(),
  })
  .passthrough();

export const itemPricesSchema = z
  .object({
    ItemPrice: oneOrMany(itemPriceSchema).optional(),
  })
  .passthrough();

export const itemShopsSchema = z
  .object({
    ItemShop: oneOrMany(itemShopSchema).optional(),
  })
  .passthrough();

export const itemSchema = z
  .object({
    itemID: integerLikeSchema,
    systemSku: integerLikeSchema.optional(),
    defaultCost: numberLikeSchema.optional(),
    avgCost: numberLikeSchema.optional(),
    tax: booleanLikeSchema.optional(),
    archived: booleanLikeSchema.optional(),
    discountable: booleanLikeSchema.optional(),
    itemType: z.string().optional(),
    serialized: booleanLikeSchema.optional(),
    description: z.string().optional(),
    modelYear: integerLikeSchema.optional(),
    upc: z.string().optional(),
    ean: z.string().optional(),
    customSku: z.string().optional(),
    manufacturerSku: z.string().optional(),
    timeStamp: z.string().optional(),
    createTime: z.string().optional(),
    publishToEcom: booleanLikeSchema.optional(),
    categoryID: integerLikeSchema.optional(),
    taxClassID: integerLikeSchema.optional(),
    departmentID: integerLikeSchema.optional(),
    itemMatrixID: integerLikeSchema.optional(),
    manufacturerID: integerLikeSchema.optional(),
    seasonID: integerLikeSchema.optional(),
    defaultVendorID: integerLikeSchema.optional(),
    Category: z.record(z.string(), z.unknown()).optional(),
    TaxClass: z.record(z.string(), z.unknown()).optional(),
    Department: z.record(z.string(), z.unknown()).optional(),
    ItemAttributes: z.record(z.string(), z.unknown()).optional(),
    Manufacturer: z.record(z.string(), z.unknown()).optional(),
    Note: z.record(z.string(), z.unknown()).optional(),
    Season: z.record(z.string(), z.unknown()).optional(),
    ItemShops: itemShopsSchema.optional(),
    ItemComponents: z.record(z.string(), z.unknown()).optional(),
    ItemVendorNums: z.record(z.string(), z.unknown()).optional(),
    ItemECommerce: z.record(z.string(), z.unknown()).optional(),
    TagRelations: z.record(z.string(), z.unknown()).optional(),
    CustomFieldValues: z.record(z.string(), z.unknown()).optional(),
    ItemPrices: z.record(z.string(), z.unknown()).optional(),
    Prices: itemPricesSchema.optional(),
    Images: z.record(z.string(), z.unknown()).optional(),
  })
  .passthrough();

export const itemResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Item: itemSchema,
});

export const itemsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Item: oneOrMany(itemSchema).optional(),
});

export const itemMutationSchema = z.object({
  defaultCost: numberLikeSchema.optional(),
  tax: booleanLikeSchema.optional(),
  discountable: booleanLikeSchema.optional(),
  itemType: z
    .enum(['default', 'non_inventory', 'serialized', 'box', 'serialized_assembly', 'assembly'])
    .optional(),
  archived: booleanLikeSchema.optional(),
  serialized: booleanLikeSchema.optional(),
  description: z.string().optional(),
  modelYear: integerLikeSchema.optional(),
  upc: z.string().optional(),
  ean: z.string().optional(),
  customSku: z.string().optional(),
  manufacturerSku: z.string().optional(),
  publishToEcom: booleanLikeSchema.optional(),
  categoryID: integerLikeSchema.optional(),
  taxClassID: integerLikeSchema.optional(),
  departmentID: integerLikeSchema.optional(),
  itemMatrixID: integerLikeSchema.optional(),
  manufacturerID: integerLikeSchema.optional(),
  seasonID: integerLikeSchema.optional(),
  defaultVendorID: integerLikeSchema.optional(),
  Prices: itemPricesSchema.optional(),
  ItemShops: itemShopsSchema.optional(),
  Category: z.record(z.string(), z.unknown()).optional(),
  TaxClass: z.record(z.string(), z.unknown()).optional(),
  ItemAttributes: z.record(z.string(), z.unknown()).optional(),
  Manufacturer: z.record(z.string(), z.unknown()).optional(),
  Note: z.record(z.string(), z.unknown()).optional(),
  ItemComponents: z.record(z.string(), z.unknown()).optional(),
  ItemVendorNums: z.record(z.string(), z.unknown()).optional(),
  CustomFieldValues: z.record(z.string(), z.unknown()).optional(),
});
