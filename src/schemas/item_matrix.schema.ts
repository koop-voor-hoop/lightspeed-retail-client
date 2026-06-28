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
import { itemImagesSchema, itemPricesSchema, itemSchema } from './item.schema';
import { itemAttributeSetSchema } from './item_attribute_set.schema';
import { manufacturerSchema } from './manufacturer.schema';
import { taxClassSchema } from './tax_class.schema';

export const itemMatrixItemsSchema = z.object({
  Item: oneOrMany(itemSchema).optional(),
});

export const itemMatrixMutationSchema = z.object({
  description: z.string().optional(),
  itemAttributeSetID: integerLikeSchema.optional(),
  tax: booleanLikeSchema.optional(),
  defaultCost: numberLikeSchema.optional(),
  itemType: z
    .enum(['default', 'non_inventory', 'serialized', 'box', 'serialized_assembly', 'assembly'])
    .optional(),
  serialized: booleanLikeSchema.optional(),
  modelYear: integerLikeSchema.optional(),
  categoryID: integerLikeSchema.optional(),
  taxClassID: integerLikeSchema.optional(),
  departmentID: integerLikeSchema.optional(),
  manufacturerID: integerLikeSchema.optional(),
  seasonID: integerLikeSchema.optional(),
  defaultVendorID: integerLikeSchema.optional(),
  Prices: itemPricesSchema.optional(),
});

export const itemMatrixSchema = z.object({
  itemMatrixID: integerLikeSchema,
  description: z.string().optional(),
  tax: booleanLikeSchema.optional(),
  defaultCost: numberLikeSchema.optional(),
  itemType: z.string().optional(),
  serialized: booleanLikeSchema.optional(),
  modelYear: integerLikeSchema.optional(),
  archived: booleanLikeSchema.optional(),
  itemAttributeSetID: integerLikeSchema.optional(),
  categoryID: integerLikeSchema.optional(),
  taxClassID: integerLikeSchema.optional(),
  departmentID: integerLikeSchema.optional(),
  manufacturerID: integerLikeSchema.optional(),
  seasonID: integerLikeSchema.optional(),
  defaultVendorID: integerLikeSchema.optional(),
  timeStamp: z.string().optional(),
  createTime: z.string().optional(),
  attribute1Values: oneOrMany(z.string()).optional(),
  attribute2Values: oneOrMany(z.string()).optional(),
  attribute3Values: oneOrMany(z.string()).optional(),
  Prices: itemPricesSchema.optional(),
  Category: categorySchema.optional(),
  TaxClass: taxClassSchema.optional(),
  Department: unknownRelationSchema.optional(),
  Manufacturer: manufacturerSchema.optional(),
  Season: unknownRelationSchema.optional(),
  ItemAttributeSet: itemAttributeSetSchema.optional(),
  Items: itemMatrixItemsSchema.optional(),
  Images: itemImagesSchema.optional(),
  CustomFieldValues: unknownRelationSchema.optional(),
  TagRelations: unknownRelationSchema.optional(),
});

export const itemMatrixResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ItemMatrix: itemMatrixSchema,
});

export const itemMatricesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ItemMatrix: oneOrMany(itemMatrixSchema).optional(),
});
