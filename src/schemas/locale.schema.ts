import z from 'zod';
import { attributesSchema, booleanLikeSchema, numberLikeSchema, oneOrMany } from '.';

export const currencyDenominationSchema = z.object({
  name: z.string(),
  value: numberLikeSchema,
  significant: booleanLikeSchema,
});

export const localeCodeSchema = z.object({
  name: z.string(),
  value: z.string(),
});

export const localeSchema = z.object({
  name: z.string(),
  country: z.string(),
  countryCode: z.string(),
  states: z.string(),
  currencySymbol: z.string(),
  currencyCode: z.string(),
  currencyPrecision: numberLikeSchema,
  cashRoundingPrecision: numberLikeSchema.optional(),
  includeTaxOnLabels: booleanLikeSchema.optional(),
  languageTag: z.string(),
  dateFormat: z.string(),
  datetimeFormat: z.string().optional(),
  CurrencyDenominations: z
    .object({
      CurrencyDenomination: oneOrMany(currencyDenominationSchema),
    })
    .optional(),
  LocaleCodes: z
    .object({
      LocaleCode: oneOrMany(localeCodeSchema),
    })
    .optional(),
  defaultLocaleCode: z.string().optional(),
  taxName1: z.string().optional(),
  taxName2: z.string().optional(),
});

export const localeResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Locale: localeSchema,
});

export const localesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Locale: oneOrMany(localeSchema).optional(),
});
