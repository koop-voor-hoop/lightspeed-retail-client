import z from 'zod';
import { attributesSchema } from './attributes.schema';
import { integerLikeSchema, oneOrMany } from './helper.schema';

export const employeeHoursSchema = z.object({
  employeeHoursID: integerLikeSchema,
  checkIn: z.string().optional(),
  checkOut: z.string().nullable().optional(),
  employeeID: integerLikeSchema,
  shopID: integerLikeSchema,
});

export const employeeHoursResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  EmployeeHours: employeeHoursSchema,
});

export const employeesHoursResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  EmployeeHours: oneOrMany(employeeHoursSchema).optional(),
});

export const employeeHoursMutationSchema = z.object({
  checkIn: z.string().optional(),
  checkOut: z.string().nullable().optional(),
  employeeID: integerLikeSchema.optional(),
  shopID: integerLikeSchema.optional(),
});

export const employeeHoursDeleteResponseSchema = z.object({
  name: z.string(),
  primaryID: integerLikeSchema,
});
