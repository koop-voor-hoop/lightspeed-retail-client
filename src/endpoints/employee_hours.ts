import { requestJson } from '../api';
import {
  employeeHoursDeleteResponseSchema,
  employeeHoursResponseSchema,
  employeesHoursResponseSchema,
} from '../schemas';
import type {
  AccessToken,
  AccountId,
  EmployeeHoursDeleteResponse,
  EmployeeHoursMutation,
  EmployeeHoursResponse,
  EmployeesHoursResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, 'employeeHoursID'>;

type EmployeeHoursId = { employeeHoursID: `${number}` | number };

/** Lists employee hours entries with optional pagination and sorting. */
export const getEmployeeHoursEntries = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<EmployeesHoursResponse> => {
  return requestJson(
    `Account/${accountID}/EmployeeHours.json`,
    {
      accessToken,
      params,
    },
    employeesHoursResponseSchema,
  );
};

/** Retrieves a single employee hours entry by ID. */
export const getEmployeeHours = async ({
  accessToken,
  accountID,
  employeeHoursID,
}: AccessToken & AccountId & EmployeeHoursId): Promise<EmployeeHoursResponse> => {
  return requestJson(
    `Account/${accountID}/EmployeeHours/${employeeHoursID}.json`,
    {
      accessToken,
    },
    employeeHoursResponseSchema,
  );
};

/** Creates a new employee hours entry. */
export const createEmployeeHours = async ({
  accessToken,
  accountID,
  ...employeeHours
}: AccessToken & AccountId & EmployeeHoursMutation): Promise<EmployeeHoursResponse> => {
  return requestJson(
    `Account/${accountID}/EmployeeHours.json`,
    {
      method: 'POST',
      accessToken,
      payload: employeeHours,
    },
    employeeHoursResponseSchema,
  );
};

/** Updates an existing employee hours entry by ID. */
export const updateEmployeeHours = async ({
  accessToken,
  accountID,
  employeeHoursID,
  ...employeeHours
}: AccessToken & AccountId & EmployeeHoursId & EmployeeHoursMutation): Promise<EmployeeHoursResponse> => {
  return requestJson(
    `Account/${accountID}/EmployeeHours/${employeeHoursID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: employeeHours,
    },
    employeeHoursResponseSchema,
  );
};

/** Permanently deletes an employee hours entry by ID. */
export const deleteEmployeeHours = async ({
  accessToken,
  accountID,
  employeeHoursID,
}: AccessToken & AccountId & EmployeeHoursId): Promise<EmployeeHoursDeleteResponse> => {
  return requestJson(
    `Account/${accountID}/EmployeeHours/${employeeHoursID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    employeeHoursDeleteResponseSchema,
  );
};
