import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { categorySchema } from './category.schema';
import {
  booleanLikeSchema,
  integerLikeSchema,
  numberLikeSchema,
  oneOrMany,
  unknownRelationSchema,
} from './helper.schema';
import { itemAttributeSetSchema } from './item_attribute_set.schema';
import { itemCustomFieldValueSchema } from './item_customfield.schema';
import { itemImageSchema } from './item_image.schema';
import { itemShopSchema } from './item_shop.schema';
import { manufacturerSchema } from './manufacturer.schema';
import { tagSchema } from './tag.schema';
import { taxClassSchema } from './tax_class.schema';

export const itemPriceSchema = z.object({
  amount: numberLikeSchema.optional(),
  useTypeID: integerLikeSchema.optional(),
  useType: z.string().optional(),
});

export const itemPricesSchema = z.object({
  ItemPrice: oneOrMany(itemPriceSchema).optional(),
});

export const itemShopsSchema = z.object({
  ItemShop: oneOrMany(itemShopSchema).optional(),
});

export const itemAttributesSchema = z.object({
  attribute1: z.string().optional(),
  attribute2: z.string().optional(),
  attribute3: z.string().optional(),
  itemAttributeSetID: integerLikeSchema.optional(),
  ItemAttributeSet: itemAttributeSetSchema.optional(),
});

export const itemNoteSchema = z.object({
  note: z.string().optional(),
  isPublic: booleanLikeSchema.optional(),
  timeStamp: z.string().optional(),
});

export const itemComponentSchema = z.object({
  itemComponentID: integerLikeSchema.optional(),
  quantity: integerLikeSchema.optional(),
  componentGroup: integerLikeSchema.optional(),
  assemblyItemID: integerLikeSchema.optional(),
  componentItemID: integerLikeSchema.optional(),
});

export const itemComponentsSchema = z.object({
  ItemComponent: oneOrMany(itemComponentSchema).optional(),
});

export const itemVendorNumSchema = z.object({
  itemVendorNumID: integerLikeSchema.optional(),
  value: z.string().optional(),
  itemID: integerLikeSchema.optional(),
  vendorID: integerLikeSchema.optional(),
  timeStamp: z.string().optional(),
  cost: numberLikeSchema.optional(),
});

export const itemVendorNumsSchema = z.object({
  ItemVendorNum: oneOrMany(itemVendorNumSchema).optional(),
});

export const itemECommerceSchema = z.object({
  itemECommerceID: integerLikeSchema.optional(),
  longDescription: z.string().optional(),
  shortDescription: z.string().optional(),
  weight: numberLikeSchema.optional(),
  width: numberLikeSchema.optional(),
  height: numberLikeSchema.optional(),
  length: numberLikeSchema.optional(),
  listOnStore: booleanLikeSchema.optional(),
});

export const itemECommercesSchema = z.object({
  ItemECommerce: oneOrMany(itemECommerceSchema).optional(),
});

export const itemTagRelationSchema = z.object({
  tagID: integerLikeSchema.optional(),
  Tag: tagSchema.optional(),
});

export const itemTagRelationsSchema = z.object({
  TagRelation: oneOrMany(itemTagRelationSchema).optional(),
});

export const itemCustomFieldValuesSchema = z.object({
  CustomFieldValue: oneOrMany(itemCustomFieldValueSchema).optional(),
});

export const itemImagesSchema = z.object({
  Image: oneOrMany(itemImageSchema).optional(),
});

export const itemShelfLocationsSchema = z.object({
  ItemShelfLocation: oneOrMany(unknownRelationSchema).optional(),
});

export const itemSchema = z.object({
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
  Category: categorySchema.optional(),
  TaxClass: taxClassSchema.optional(),
  Department: unknownRelationSchema.optional(),
  ItemAttributes: itemAttributesSchema.optional(),
  Manufacturer: manufacturerSchema.optional(),
  Note: itemNoteSchema.optional(),
  Season: unknownRelationSchema.optional(),
  ItemShops: itemShopsSchema.optional(),
  ItemComponents: itemComponentsSchema.optional(),
  ItemVendorNums: itemVendorNumsSchema.optional(),
  ItemECommerce: itemECommercesSchema.optional(),
  TagRelations: itemTagRelationsSchema.optional(),
  CustomFieldValues: itemCustomFieldValuesSchema.optional(),
  ItemPrices: itemPricesSchema.optional(),
  Prices: itemPricesSchema.optional(),
  Images: itemImagesSchema.optional(),
  ItemShelfLocations: itemShelfLocationsSchema.optional(),
});

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
  Category: categorySchema.optional(),
  TaxClass: taxClassSchema.optional(),
  ItemAttributes: itemAttributesSchema.optional(),
  Manufacturer: manufacturerSchema.optional(),
  Note: itemNoteSchema.optional(),
  ItemComponents: itemComponentsSchema.optional(),
  ItemVendorNums: itemVendorNumsSchema.optional(),
  CustomFieldValues: itemCustomFieldValuesSchema.optional(),
});
