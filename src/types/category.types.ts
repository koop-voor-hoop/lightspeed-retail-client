import type z from 'zod';
import type {
  categoriesResponseSchema,
  categoryMutationSchema,
  categoryParentSchema,
  categoryResponseSchema,
  categorySchema,
} from '../schemas';

export type Category = z.infer<typeof categorySchema>;
export type CategoryParent = z.infer<typeof categoryParentSchema>;
export type CategoryResponse = z.infer<typeof categoryResponseSchema>;
export type CategoriesResponse = z.infer<typeof categoriesResponseSchema>;
export type CategoryMutation = z.infer<typeof categoryMutationSchema>;
