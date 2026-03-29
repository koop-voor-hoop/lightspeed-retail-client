import z from 'zod';

export const lightspeedErrorSchema = z.object({
  error: z.string().optional(),
  error_description: z.string().optional(),
  hint: z.string().optional(),
});
