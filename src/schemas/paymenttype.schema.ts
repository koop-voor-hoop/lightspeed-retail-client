import z from 'zod';
import { attributesSchema, booleanLikeSchema, integerLikeSchema, oneOrMany } from '.';

export const paymentTypeSchema = z.object({
  paymentTypeID: integerLikeSchema,
  name: z.string(),
  requireCustomer: booleanLikeSchema.optional(),
  archived: booleanLikeSchema.optional(),
  internalReserved: booleanLikeSchema.optional(),
  type: z.string().optional(),
  refundAsPaymentTypeID: integerLikeSchema.optional(),
  timeStamp: z.string().optional(),
});

export const paymentTypeResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  PaymentType: paymentTypeSchema,
});

export const paymentTypesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  PaymentType: oneOrMany(paymentTypeSchema).optional(),
});

export const paymentTypeMutationSchema = z.object({
  name: z.string().optional(),
  requireCustomer: booleanLikeSchema.optional(),
  internalReserved: booleanLikeSchema.optional(),
  type: z.string().optional(),
  refundAsPaymentTypeID: integerLikeSchema.optional(),
});
