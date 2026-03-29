import z from 'zod';

export const attributesSchema = z.object({
  count: z.union([z.string().transform((val) => parseInt(val, 10)), z.number()]).optional(),
  next: z.string().optional(),
  previous: z.string().optional(),
});
