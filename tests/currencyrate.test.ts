import { beforeAll, describe, expect, it } from 'bun:test';
import { getCurrencyRate, getCurrencyRates, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('currency rate read - Integration Tests', () => {
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

  it('should list currency rates with a valid access token and account id', async () => {
    const response = await getCurrencyRates({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
    });

    expect(response).toBeDefined();
    expect(
      response.CurrencyRate === undefined || Array.isArray(response.CurrencyRate) || !!response.CurrencyRate,
    ).toBe(true);
  });

  it('should get a single currency rate by id when currency rates exist', async () => {
    const listResponse = await getCurrencyRates({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
    });

    const currencyRates = Array.isArray(listResponse.CurrencyRate)
      ? listResponse.CurrencyRate
      : listResponse.CurrencyRate
        ? [listResponse.CurrencyRate]
        : [];

    if (currencyRates.length === 0) {
      console.log('Skipping single currency rate read test: account has no currency rates');
      expect(true).toBe(true);
      return;
    }

    const firstCurrencyRate = currencyRates[0];
    if (!firstCurrencyRate) {
      expect.unreachable('Expected at least one currency rate after non-empty guard');
      return;
    }

    const currencyRateID = firstCurrencyRate.currencyRateID;
    const currencyRateResponse = await getCurrencyRate({
      accessToken: accessToken!,
      accountID: accountID!,
      currencyRateID,
    });

    expect(currencyRateResponse.CurrencyRate.currencyRateID).toBe(currencyRateID);
    expect(currencyRateResponse.CurrencyRate.currencyCode).toBeDefined();
  });

  it('should fail gracefully for a non-existent currency rate id', async () => {
    const missingCurrencyRateID = 999999999;

    try {
      await getCurrencyRate({
        accessToken: accessToken!,
        accountID: accountID!,
        currencyRateID: missingCurrencyRateID,
      });
      expect.unreachable('Should have thrown an error for non-existent currency rate id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
