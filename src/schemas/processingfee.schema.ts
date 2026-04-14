import z from 'zod';
import { attributesSchema, integerLikeSchema, numberLikeSchema, oneOrMany } from '.';

export const processingFeeSchema = z.object({
  salePaymentProcessingFeeID: integerLikeSchema,
  salePaymentID: integerLikeSchema.optional(),
  processingFeeRef: z.string().optional(),
  processor: z.string().optional(),
  amount: numberLikeSchema.optional(),
  fixedFee: numberLikeSchema.optional(),
  variableFee: numberLikeSchema.optional(),
  variablePct: numberLikeSchema.optional(),
  variablePercent: numberLikeSchema.optional(),
  interchangeFeesFixedFee: numberLikeSchema.optional(),
  interchangeFeesVariableFee: numberLikeSchema.optional(),
  interchangeFeesVariablePct: numberLikeSchema.optional(),
  interchangeFeesVariablePercent: numberLikeSchema.optional(),
  schemeFeesFixedFee: numberLikeSchema.optional(),
  schemeFeesVariableFee: numberLikeSchema.optional(),
  schemeFeesVariablePct: numberLikeSchema.optional(),
  schemeFeesVariablePercent: numberLikeSchema.optional(),
  processingTime: z.string().optional(),
  createTime: z.string().optional(),
  updateTime: z.string().optional(),
});

export const processingFeeResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ProcessingFee: processingFeeSchema,
});

export const processingFeesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  ProcessingFee: oneOrMany(processingFeeSchema).optional(),
});
