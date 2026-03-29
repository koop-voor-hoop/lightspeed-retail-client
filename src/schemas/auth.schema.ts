import z from 'zod';

export const tokenSchema = z.object({
  token_type: z.string().min(1),
  expires_in: z.number().int().positive(),
  access_token: z.string().min(1),
  refresh_token: z.string().min(1),
});
