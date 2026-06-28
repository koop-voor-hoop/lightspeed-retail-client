import { beforeAll, describe, expect, it } from 'bun:test';
import { createEmployeeHours, deleteEmployeeHours, getSession, getShops, updateEmployeeHours } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;
let employeeID: string | undefined;

describe('employee hours write - Integration Tests', () => {
  beforeAll(async () => {
    accessToken = Bun.env.TEST_ACCESS_TOKEN;

    if (!accessToken) {
      console.log('Skipping tests: TEST_ACCESS_TOKEN environment variable not set');
      console.log('Run `bun env` to set the environment variables and try again.');
      process.exit(0);
    }

    const session = await getSession(accessToken);
    accountID = session.systemCustomerID;
    employeeID = session.employeeID;

    if (!accountID) {
      throw new Error('Unable to resolve accountID from session.systemCustomerID');
    }
  });

  it('should create, update, and delete an employee hours entry', async () => {
    const shopsResponse = await getShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'shopID',
    });
    const shops = Array.isArray(shopsResponse.Shop)
      ? shopsResponse.Shop
      : shopsResponse.Shop
        ? [shopsResponse.Shop]
        : [];

    if (shops.length === 0 || !employeeID) {
      console.log('Skipping employee hours test: no shop or employee available');
      expect(true).toBe(true);
      return;
    }

    const shopID = Number(shops[0]!.shopID);

    // Fixed historical timestamps so the entry is never rejected as a future clock-in.
    const created = await createEmployeeHours({
      accessToken: accessToken!,
      accountID: accountID!,
      employeeID: Number(employeeID),
      shopID,
      checkIn: '2020-01-01T08:00:00+00:00',
    });
    const employeeHoursID = created.EmployeeHours.employeeHoursID;

    try {
      expect(employeeHoursID).toBeDefined();

      const updated = await updateEmployeeHours({
        accessToken: accessToken!,
        accountID: accountID!,
        employeeHoursID,
        checkOut: '2020-01-01T09:00:00+00:00',
      });
      expect(updated.EmployeeHours.employeeHoursID).toBe(employeeHoursID);
    } finally {
      await deleteEmployeeHours({ accessToken: accessToken!, accountID: accountID!, employeeHoursID });
    }
  }, 30000);
});
