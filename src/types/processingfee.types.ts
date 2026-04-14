import type z from 'zod';
import type {
  processingFeeResponseSchema,
  processingFeeSchema,
  processingFeesResponseSchema,
} from '../schemas';

export type ProcessingFee = z.infer<typeof processingFeeSchema>;
export type ProcessingFeeResponse = z.infer<typeof processingFeeResponseSchema>;
export type ProcessingFeesResponse = z.infer<typeof processingFeesResponseSchema>;
