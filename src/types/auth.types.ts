import type z from 'zod';
import type { tokenSchema } from '../schemas';

export type Token = z.infer<typeof tokenSchema>;
