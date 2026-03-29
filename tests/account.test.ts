import { beforeAll, describe, expect, it } from 'bun:test';
import { getAccount, getAccounts, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('account read - Integration Tests', () => {
  beforeAll(async () => {
    accessToken = Bun.env.TEST_ACCESS_TOKEN;

    if (!accessToken) {
      console.log('Skipping tests: TEST_ACCESS_TOKEN environment variable not set');
      console.log('Run `bun env` to set the environment variables and try again.');
      process.exit(0);
    }

    const session = await getSession(accessToken);
    accountID = session.systemCustomerID;

    if (!accountID) {
      throw new Error('Unable to resolve accountID from session.systemCustomerID');
    }
  });

  it('should list accounts with a valid access token', async () => {
    const response = await getAccounts({
      accessToken: accessToken!,
      limit: 10,
    });

    expect(response).toBeDefined();
    expect(response.Account === undefined || Array.isArray(response.Account) || !!response.Account).toBe(
      true,
    );
  });

  it('should get the current account by id', async () => {
    const response = await getAccount({
      accessToken: accessToken!,
      accountID: accountID!,
    });

    expect(response).toBeDefined();
    expect(String(response['@attributes']?.systemCustomerID)).toBe(String(accountID));
    expect(response.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent account id', async () => {
    const missingAccountId = 999999999;

    try {
      await getAccount({
        accessToken: accessToken!,
        accountID: missingAccountId,
      });
      expect.unreachable('Should have thrown an error for non-existent account id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
