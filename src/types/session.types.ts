import type z from 'zod';
import type { employeeSchema, rightsSchema, sessionSchema } from '../schemas';

export type Employee = z.infer<typeof employeeSchema>;
export type Rights = z.infer<typeof rightsSchema>;
export type Session = z.infer<typeof sessionSchema>;
