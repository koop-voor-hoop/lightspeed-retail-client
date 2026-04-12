import z from 'zod';
import { attributesSchema, integerLikeSchema, oneOrMany } from '.';

export const categoryParentSchema = z.object({
  categoryID: integerLikeSchema,
  name: z.string(),
  nodeDepth: integerLikeSchema.optional(),
  fullPathName: z.string().optional(),
  leftNode: integerLikeSchema.optional(),
  rightNode: integerLikeSchema.optional(),
  createTime: z.string().optional(),
  timeStamp: z.string().optional(),
  parentID: integerLikeSchema.optional(),
});

export const categorySchema = z.object({
  categoryID: integerLikeSchema,
  name: z.string(),
  nodeDepth: integerLikeSchema.optional(),
  fullPathName: z.string().optional(),
  leftNode: integerLikeSchema.optional(),
  rightNode: integerLikeSchema.optional(),
  createTime: z.string().optional(),
  timeStamp: z.string().optional(),
  parentID: integerLikeSchema.optional(),
  Parent: categoryParentSchema.optional(),
});

export const categoryResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Category: categorySchema,
});

export const categoriesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Category: oneOrMany(categorySchema).optional(),
});

export const categoryMutationSchema = z.object({
  name: z.string().optional(),
  fullPathName: z.string().optional(),
  parentID: integerLikeSchema.optional(),
});
