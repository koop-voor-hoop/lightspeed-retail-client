import { beforeAll, describe, expect, it } from 'bun:test';
import { getPriceLevel, getPriceLevels, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('price level read - Integration Tests', () => {
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

  it('should list price levels with a valid access token and account id', async () => {
    const response = await getPriceLevels({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'name',
    });

    expect(response).toBeDefined();
    expect(
      response.PriceLevel === undefined || Array.isArray(response.PriceLevel) || !!response.PriceLevel,
    ).toBe(true);
  });

  it('should get a single price level by id when price levels exist', async () => {
    const listResponse = await getPriceLevels({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'name',
    });

    const priceLevels = Array.isArray(listResponse.PriceLevel)
      ? listResponse.PriceLevel
      : listResponse.PriceLevel
        ? [listResponse.PriceLevel]
        : [];

    if (priceLevels.length === 0) {
      console.log('Skipping single price level read test: account has no price levels');
      expect(true).toBe(true);
      return;
    }

    const firstPriceLevel = priceLevels[0];
    if (!firstPriceLevel) {
      expect.unreachable('Expected at least one price level after non-empty guard');
      return;
    }

    const priceLevelID = firstPriceLevel.priceLevelID;
    const priceLevelResponse = await getPriceLevel({
      accessToken: accessToken!,
      accountID: accountID!,
      priceLevelID,
    });

    expect(priceLevelResponse.PriceLevel.priceLevelID).toBe(priceLevelID);
    expect(priceLevelResponse.PriceLevel.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent price level id', async () => {
    const missingPriceLevelID = 999999999;

    try {
      await getPriceLevel({
        accessToken: accessToken!,
        accountID: accountID!,
        priceLevelID: missingPriceLevelID,
      });
      expect.unreachable('Should have thrown an error for non-existent price level id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
