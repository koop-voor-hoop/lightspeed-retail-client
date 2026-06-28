import type z from 'zod';
import type {
  itemMatricesResponseSchema,
  itemMatrixMutationSchema,
  itemMatrixResponseSchema,
  itemMatrixSchema,
} from '../schemas';

export type ItemMatrix = z.infer<typeof itemMatrixSchema>;
export type ItemMatrixResponse = z.infer<typeof itemMatrixResponseSchema>;
export type ItemMatricesResponse = z.infer<typeof itemMatricesResponseSchema>;
export type ItemMatrixMutation = z.infer<typeof itemMatrixMutationSchema>;
