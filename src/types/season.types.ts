import type z from 'zod';
import type {
  seasonMutationSchema,
  seasonResponseSchema,
  seasonSchema,
  seasonsResponseSchema,
} from '../schemas';

export type Season = z.infer<typeof seasonSchema>;
export type SeasonResponse = z.infer<typeof seasonResponseSchema>;
export type SeasonsResponse = z.infer<typeof seasonsResponseSchema>;
export type SeasonMutation = z.infer<typeof seasonMutationSchema>;
