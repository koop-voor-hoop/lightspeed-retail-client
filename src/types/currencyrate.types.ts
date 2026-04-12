import type z from 'zod';
import type {
  currencyRateMutationSchema,
  currencyRateResponseSchema,
  currencyRateSchema,
  currencyRatesResponseSchema,
} from '../schemas';

export type CurrencyRate = z.infer<typeof currencyRateSchema>;
export type CurrencyRateResponse = z.infer<typeof currencyRateResponseSchema>;
export type CurrencyRatesResponse = z.infer<typeof currencyRatesResponseSchema>;
export type CurrencyRateMutation = z.infer<typeof currencyRateMutationSchema>;
