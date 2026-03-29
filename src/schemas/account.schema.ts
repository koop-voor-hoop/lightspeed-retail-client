import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { integerLikeSchema, numberLikeSchema, oneOrMany } from './helper.schema';

export const accountCurrencySchema = z.object({
  code: z.string(),
  symbol: z.string(),
});

export const accountPurchasingCurrencySchema = z.object({
  code: z.string(),
  symbol: z.string(),
  rate: numberLikeSchema,
});

export const accountListSchema = z.object({
  accountID: integerLikeSchema,
  name: z.string(),
  link: z
    .object({
      '@attributes': z
        .object({
          href: z.string(),
        })
        .optional(),
    })
    .optional(),
});

export const accountResponseSchema = z.object({
  '@attributes': z
    .object({
      systemCustomerID: z.string().optional(),
    })
    .optional(),
  status: z.string(),
  name: z.string(),
  employeeCount: integerLikeSchema,
  employeeLimit: integerLikeSchema,
  uniqueSubscriptionIdentifier: z.string(),
  defaultCurrency: accountCurrencySchema,
  purchasingCurrencies: z
    .object({
      purchasingCurrency: oneOrMany(accountPurchasingCurrencySchema),
    })
    .optional(),
  accountID: integerLikeSchema.optional(),
});

export const accountsResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Account: oneOrMany(accountListSchema).optional(),
});

export const accountMutationSchema = z.object({
  status: z.string().optional(),
  name: z.string().optional(),
  defaultCurrency: accountCurrencySchema.optional(),
  purchasingCurrencies: z
    .object({
      purchasingCurrency: oneOrMany(accountPurchasingCurrencySchema),
    })
    .optional(),
});
