import z from 'zod';
import { attributesSchema } from './attributes.schema';
import {
  booleanLikeSchema,
  integerLikeSchema,
  numberLikeSchema,
  oneOrMany,
  unknownRelationSchema,
} from './helper.schema';

const optionalUnknownRelationSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  unknownRelationSchema.optional(),
);

const optionalIntegerLikeSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  integerLikeSchema.optional(),
);

const optionalNumberLikeSchema = z.preprocess(
  (value) => (value === '' ? undefined : value),
  numberLikeSchema.optional(),
);

export const creditAccountSchema = z.object({
  creditAccountID: integerLikeSchema,
  name: z.string(),
  code: z.string().optional(),
  creditLimit: optionalNumberLikeSchema,
  description: z.string().optional(),
  giftCard: booleanLikeSchema.optional(),
  archived: booleanLikeSchema.optional(),
  timeStamp: z.string().optional(),
  customerID: optionalIntegerLikeSchema,
  balance: optionalNumberLikeSchema,
  Contact: optionalUnknownRelationSchema,
  WithdrawalPayments: optionalUnknownRelationSchema,
});

export const creditAccountResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  CreditAccount: creditAccountSchema,
});

export const creditAccountsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  CreditAccount: oneOrMany(creditAccountSchema).optional(),
});

export const creditAccountMutationSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),
  customerID: integerLikeSchema.optional(),
  description: z.string().optional(),
});
