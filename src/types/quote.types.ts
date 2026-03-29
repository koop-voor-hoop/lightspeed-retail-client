import type z from 'zod';
import type { quoteMutationSchema, quoteResponseSchema, quoteSchema, quotesResponseSchema } from '../schemas';

export type Quote = z.infer<typeof quoteSchema>;
export type QuoteResponse = z.infer<typeof quoteResponseSchema>;
export type QuotesResponse = z.infer<typeof quotesResponseSchema>;
export type QuoteMutation = z.infer<typeof quoteMutationSchema>;
