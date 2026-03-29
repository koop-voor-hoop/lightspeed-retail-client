import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { booleanLikeSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from './helper.schema';

export const itemCustomFieldTypeSchema = z.enum([
  'string',
  'text',
  'url',
  'email',
  'datetime',
  'date',
  'boolean',
  'integer',
  'float',
  'single_choice',
  'multi_choice',
]);

export const itemCustomFieldChoiceSchema = z
  .object({
    customFieldChoiceID: integerLikeSchema.optional(),
    value: z.string().optional(),
    name: z.string().optional(),
    canBeDeleted: booleanLikeSchema.optional(),
    customFieldID: integerLikeSchema.optional(),
    timeStamp: z.string().optional(),
  })
  .passthrough();

export const itemCustomFieldValueSchema = z
  .object({
    customFieldValueID: integerLikeSchema.optional(),
    value: z
      .union([
        z.string(),
        numberLikeSchema,
        booleanLikeSchema,
        itemCustomFieldChoiceSchema,
        oneOrMany(itemCustomFieldChoiceSchema),
        z.null(),
      ])
      .optional(),
    name: z.string().optional(),
    type: itemCustomFieldTypeSchema.optional(),
    deleted: booleanLikeSchema.optional(),
    customFieldID: integerLikeSchema.optional(),
    timeStamp: z.string().optional(),
  })
  .passthrough();

export const itemCustomFieldSchema = z
  .object({
    customFieldID: integerLikeSchema,
    type: itemCustomFieldTypeSchema,
    name: z.string(),
    uom: z.string().optional(),
    decimalPrecision: integerLikeSchema.optional(),
    archived: booleanLikeSchema.optional(),
    default: z.unknown().optional(),
  })
  .passthrough();

export const itemCustomFieldResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  CustomField: itemCustomFieldSchema,
});

export const itemCustomFieldsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  CustomField: oneOrMany(itemCustomFieldSchema).optional(),
});

export const itemCustomFieldMutationSchema = z.object({
  type: itemCustomFieldTypeSchema.optional(),
  name: z.string().optional(),
  uom: z.string().optional(),
  decimalPrecision: integerLikeSchema.optional(),
  archived: booleanLikeSchema.optional(),
  default: z.unknown().optional(),
});
