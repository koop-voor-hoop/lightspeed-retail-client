import type z from 'zod';
import type { lightspeedErrorSchema } from '../schemas';

export type LightspeedError = z.infer<typeof lightspeedErrorSchema>;
