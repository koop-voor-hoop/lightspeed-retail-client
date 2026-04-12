import z from 'zod';
import { attributesSchema, integerLikeSchema, oneOrMany, unknownRelationSchema } from '.';

export const itemImageSchema = z.object({
  imageID: integerLikeSchema,
  description: z.string().optional(),
  filename: z.string().optional(),
  ordering: integerLikeSchema.optional(),
  publicID: z.string().optional(),
  baseImageURL: z.string().optional(),
  size: integerLikeSchema.optional(),
  createTime: z.string().optional(),
  timeStamp: z.string().optional(),
  itemID: integerLikeSchema.optional(),
  itemMatrixID: integerLikeSchema.optional(),
  Item: unknownRelationSchema.optional(),
  ItemMatrix: unknownRelationSchema.optional(),
});

export const itemImageResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Image: itemImageSchema,
});

export const itemImagesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Image: oneOrMany(itemImageSchema).optional(),
});

export const itemImageMutationSchema = z.object({
  description: z.string().optional(),
  ordering: integerLikeSchema.optional(),
  itemID: integerLikeSchema.optional(),
  itemMatrixID: integerLikeSchema.optional(),
});
