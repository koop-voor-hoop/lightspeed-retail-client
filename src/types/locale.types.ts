import type z from 'zod';
import type {
  currencyDenominationSchema,
  localeCodeSchema,
  localeResponseSchema,
  localeSchema,
  localesResponseSchema,
} from '../schemas';

export type CurrencyDenomination = z.infer<typeof currencyDenominationSchema>;
export type LocaleCode = z.infer<typeof localeCodeSchema>;
export type Locale = z.infer<typeof localeSchema>;
export type LocaleResponse = z.infer<typeof localeResponseSchema>;
export type LocalesResponse = z.infer<typeof localesResponseSchema>;
