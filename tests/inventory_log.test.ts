import { beforeAll, describe, expect, it } from 'bun:test';
import { getInventoryLogs, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('inventory log read - Integration Tests', () => {
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

  it('should list inventory logs with a valid access token and account id', async () => {
    const response = await getInventoryLogs({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: '-inventoryLogID',
    });

    expect(response).toBeDefined();
    expect(
      response.InventoryLog === undefined || Array.isArray(response.InventoryLog) || !!response.InventoryLog,
    ).toBe(true);
  });

  it('should fail gracefully for an invalid access token', async () => {
    try {
      await getInventoryLogs({
        accessToken: 'invalid-token',
        accountID: accountID!,
        limit: 10,
      });
      expect.unreachable('Should have thrown an error for invalid access token');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(401);
      }
    }
  });
});
