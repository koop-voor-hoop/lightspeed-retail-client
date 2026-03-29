import type z from 'zod';
import type {
  employeeHoursDeleteResponseSchema,
  employeeHoursMutationSchema,
  employeeHoursResponseSchema,
  employeeHoursSchema,
  employeesHoursResponseSchema,
} from '../schemas';

export type EmployeeHours = z.infer<typeof employeeHoursSchema>;
export type EmployeeHoursResponse = z.infer<typeof employeeHoursResponseSchema>;
export type EmployeesHoursResponse = z.infer<typeof employeesHoursResponseSchema>;
export type EmployeeHoursMutation = z.infer<typeof employeeHoursMutationSchema>;
export type EmployeeHoursDeleteResponse = z.infer<typeof employeeHoursDeleteResponseSchema>;
