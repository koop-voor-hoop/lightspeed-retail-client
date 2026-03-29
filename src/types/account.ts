import type z from 'zod';
import type {
  accountCurrencySchema,
  accountMutationSchema,
  accountPurchasingCurrencySchema,
  accountResponseSchema,
  accountsResponseSchema,
} from '../schemas';

export type AccountCurrency = z.infer<typeof accountCurrencySchema>;
export type AccountPurchasingCurrency = z.infer<typeof accountPurchasingCurrencySchema>;
export type Account = z.infer<typeof accountResponseSchema>;
export type AccountResponse = z.infer<typeof accountResponseSchema>;
export type AccountsResponse = z.infer<typeof accountsResponseSchema>;
export type AccountMutation = z.infer<typeof accountMutationSchema>;
