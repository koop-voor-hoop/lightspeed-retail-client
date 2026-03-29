import type z from 'zod';
import type {
  vendorMutationSchema,
  vendorPurchasingCurrencySchema,
  vendorResponseSchema,
  vendorSchema,
  vendorsResponseSchema,
} from '../schemas';

export type VendorPurchasingCurrency = z.infer<typeof vendorPurchasingCurrencySchema>;
export type Vendor = z.infer<typeof vendorSchema>;
export type VendorResponse = z.infer<typeof vendorResponseSchema>;
export type VendorsResponse = z.infer<typeof vendorsResponseSchema>;
export type VendorMutation = z.infer<typeof vendorMutationSchema>;
