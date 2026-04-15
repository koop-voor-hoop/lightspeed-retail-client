import z from 'zod';
import {
  attributesSchema,
  booleanLikeSchema,
  integerLikeSchema,
  numberLikeSchema,
  oneOrMany,
  unknownRelationSchema,
} from '.';

const optionalIntegerLikeSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  integerLikeSchema.optional(),
);

const optionalNumberLikeSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  numberLikeSchema.optional(),
);

const optionalBooleanLikeSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  booleanLikeSchema.optional(),
);

const optionalUnknownRelationSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  unknownRelationSchema.optional(),
);

const optionalUnknownSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  z.any().optional(),
);

export const shopSchema = z.object({
  shopID: integerLikeSchema,
  name: z.string(),
  serviceRate: optionalNumberLikeSchema,
  timeZone: z.string().optional(),
  taxLabor: optionalBooleanLikeSchema,
  labelTitle: z.string().optional(),
  labelMsrp: optionalBooleanLikeSchema,
  archived: optionalBooleanLikeSchema,
  timeStamp: z.string().optional(),
  companyRegistrationNumber: z.string().optional(),
  vatNumber: z.string().optional(),
  zebraBrowserPrint: optionalBooleanLikeSchema,
  contactID: optionalIntegerLikeSchema,
  taxCategoryID: optionalIntegerLikeSchema,
  receiptSetupID: optionalIntegerLikeSchema,
  ccGatewayID: optionalIntegerLikeSchema,
  gatewayConfigID: optionalIntegerLikeSchema,
  priceLevelID: optionalIntegerLikeSchema,
  Contact: optionalUnknownRelationSchema,
  ReceiptSetup: optionalUnknownRelationSchema,
  TaxCategory: optionalUnknownRelationSchema,
  ShelfLocations: optionalUnknownSchema,
  Registers: optionalUnknownSchema,
  CCGateway: optionalUnknownRelationSchema,
  PriceLevel: optionalUnknownRelationSchema,
});

export const shopResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Shop: shopSchema,
});

const shopsCollectionSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  oneOrMany(shopSchema).optional().catch(undefined),
);

export const shopsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Shop: shopsCollectionSchema,
});

export const shopMutationSchema = z.object({
  name: z.string().optional(),
  serviceRate: numberLikeSchema.optional(),
  timeZone: z.string().optional(),
  taxLabor: booleanLikeSchema.optional(),
  labelTitle: z.string().optional(),
  labelMsrp: booleanLikeSchema.optional(),
  contactID: integerLikeSchema.optional(),
  taxCategoryID: integerLikeSchema.optional(),
  receiptSetupID: integerLikeSchema.optional(),
  ccGatewayID: integerLikeSchema.optional(),
  priceLevelID: integerLikeSchema.optional(),
  companyRegistrationNumber: z.string().optional(),
  vatNumber: z.string().optional(),
  zebraBrowserPrint: booleanLikeSchema.optional(),
});
