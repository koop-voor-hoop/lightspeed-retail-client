import type z from 'zod';
import type {
  creditAccountMutationSchema,
  creditAccountResponseSchema,
  creditAccountSchema,
  creditAccountsResponseSchema,
} from '../schemas';

export type CreditAccount = z.infer<typeof creditAccountSchema>;
export type CreditAccountResponse = z.infer<typeof creditAccountResponseSchema>;
export type CreditAccountsResponse = z.infer<typeof creditAccountsResponseSchema>;
export type CreditAccountMutation = z.infer<typeof creditAccountMutationSchema>;
