import { beforeAll, describe, expect, it } from 'bun:test';
import { getSession, getShop, getShops, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('shop read - Integration Tests', () => {
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

  it('should list shops with a valid access token and account id', async () => {
    const response = await getShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'shopID',
    });

    expect(response).toBeDefined();
    expect(response.Shop === undefined || Array.isArray(response.Shop) || !!response.Shop).toBe(true);
  });

  it('should support loading Contact relation', async () => {
    const response = await getShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'shopID',
      load_relations: ['Contact'],
    });

    expect(response).toBeDefined();
  });

  it('should get a single shop by id when shops exist', async () => {
    const listResponse = await getShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'shopID',
    });

    const shops = Array.isArray(listResponse.Shop)
      ? listResponse.Shop
      : listResponse.Shop
        ? [listResponse.Shop]
        : [];

    if (shops.length === 0) {
      console.log('Skipping single shop read test: account has no shops');
      expect(true).toBe(true);
      return;
    }

    const firstShop = shops[0];
    if (!firstShop) {
      expect.unreachable('Expected at least one shop after non-empty guard');
      return;
    }

    const shopID = firstShop.shopID;
    const shopResponse = await getShop({
      accessToken: accessToken!,
      accountID: accountID!,
      shopID,
    });

    expect(shopResponse.Shop.shopID).toBe(shopID);
    expect(shopResponse.Shop.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent shop id', async () => {
    const missingShopID = 999999999;

    try {
      await getShop({
        accessToken: accessToken!,
        accountID: accountID!,
        shopID: missingShopID,
      });
      expect.unreachable('Should have thrown an error for non-existent shop id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
