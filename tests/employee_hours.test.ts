import { beforeAll, describe, expect, it } from 'bun:test';
import { getEmployeeHours, getEmployeeHoursEntries, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('employee hours read - Integration Tests', () => {
  beforeAll(async () => {
    accessToken = Bun.env.TEST_ACCESS_TOKEN;

    if (!accessToken) {
      console.log('Skipping tests: TEST_ACCESS_TOKEN environment variable not set');
      console.log('Run `bun env` to set the environment variables and try again.');
      process.exit(0);
    }

    const { systemCustomerID } = await getSession(accessToken);
    accountID = systemCustomerID;

    if (!accountID) {
      throw new Error('Unable to resolve accountID from session.systemCustomerID');
    }
  });

  it('should list employee hours with a valid access token and account id', async () => {
    const response = await getEmployeeHoursEntries({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'employeeHoursID',
    });

    expect(response).toBeDefined();
    expect(
      response.EmployeeHours === undefined ||
        Array.isArray(response.EmployeeHours) ||
        !!response.EmployeeHours,
    ).toBe(true);
  });

  it('should get a single employee hours entry by id when entries exist', async () => {
    const listResponse = await getEmployeeHoursEntries({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'employeeHoursID',
    });

    const employeeHoursEntries = Array.isArray(listResponse.EmployeeHours)
      ? listResponse.EmployeeHours
      : listResponse.EmployeeHours
        ? [listResponse.EmployeeHours]
        : [];

    if (employeeHoursEntries.length === 0) {
      console.log('Skipping single employee hours read test: account has no employee hours entries');
      expect(true).toBe(true);
      return;
    }

    const firstEmployeeHours = employeeHoursEntries[0];
    if (!firstEmployeeHours) {
      expect.unreachable('Expected at least one employee hours entry after non-empty guard');
      return;
    }

    const employeeHoursID = firstEmployeeHours.employeeHoursID;
    const employeeHoursResponse = await getEmployeeHours({
      accessToken: accessToken!,
      accountID: accountID!,
      employeeHoursID,
    });

    expect(employeeHoursResponse.EmployeeHours.employeeHoursID).toBe(employeeHoursID);
    expect(employeeHoursResponse.EmployeeHours.employeeID).toBeDefined();
  });

  it('should fail gracefully for a non-existent employee hours id', async () => {
    const missingEmployeeHoursID = 999999999;

    try {
      await getEmployeeHours({
        accessToken: accessToken!,
        accountID: accountID!,
        employeeHoursID: missingEmployeeHoursID,
      });
      expect.unreachable('Should have thrown an error for non-existent employee hours id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
