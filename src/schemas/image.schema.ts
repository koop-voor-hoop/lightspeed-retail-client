import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { integerLikeSchema, oneOrMany, unknownRelationSchema } from './helper.schema';

export const imageSchema = z.object({
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

export const imageResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Image: imageSchema,
});

export const imagesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Image: oneOrMany(imageSchema).optional(),
});

export const imageMutationSchema = z.object({
  description: z.string().optional(),
  ordering: integerLikeSchema.optional(),
  itemID: integerLikeSchema.optional(),
  itemMatrixID: integerLikeSchema.optional(),
});
