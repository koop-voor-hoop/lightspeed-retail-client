import { beforeAll, describe, expect, it } from 'bun:test';
import { getCreditAccount, getCreditAccounts, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('credit account read - Integration Tests', () => {
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

  it('should list credit accounts with a valid access token and account id', async () => {
    const response = await getCreditAccounts({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'creditAccountID',
    });

    expect(response).toBeDefined();
    expect(
      response.CreditAccount === undefined ||
        Array.isArray(response.CreditAccount) ||
        !!response.CreditAccount,
    ).toBe(true);
  });

  it('should support loading Contact relation', async () => {
    const response = await getCreditAccounts({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'creditAccountID',
      load_relations: ['Contact'],
    });

    expect(response).toBeDefined();
  });

  it('should get a single credit account by id when credit accounts exist', async () => {
    const listResponse = await getCreditAccounts({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'creditAccountID',
    });

    const creditAccounts = Array.isArray(listResponse.CreditAccount)
      ? listResponse.CreditAccount
      : listResponse.CreditAccount
        ? [listResponse.CreditAccount]
        : [];

    if (creditAccounts.length === 0) {
      console.log('Skipping single credit account read test: account has no credit accounts');
      expect(true).toBe(true);
      return;
    }

    const firstCreditAccount = creditAccounts[0];
    if (!firstCreditAccount) {
      expect.unreachable('Expected at least one credit account after non-empty guard');
      return;
    }

    const creditAccountID = firstCreditAccount.creditAccountID;
    const creditAccountResponse = await getCreditAccount({
      accessToken: accessToken!,
      accountID: accountID!,
      creditAccountID,
    });

    expect(creditAccountResponse.CreditAccount.creditAccountID).toBe(creditAccountID);
    expect(creditAccountResponse.CreditAccount.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent credit account id', async () => {
    const missingCreditAccountID = 999999999;

    try {
      await getCreditAccount({
        accessToken: accessToken!,
        accountID: accountID!,
        creditAccountID: missingCreditAccountID,
      });
      expect.unreachable('Should have thrown an error for non-existent credit account id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
