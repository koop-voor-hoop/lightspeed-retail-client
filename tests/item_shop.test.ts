import { beforeAll, describe, expect, it } from 'bun:test';
import { getItemShop, getItemShops, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item shop read - Integration Tests', () => {
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

  it('should list item shops with a valid access token and account id', async () => {
    const response = await getItemShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemShopID',
    });

    expect(response).toBeDefined();
    expect(response.ItemShop === undefined || Array.isArray(response.ItemShop) || !!response.ItemShop).toBe(
      true,
    );
  });

  it('should get a single item shop by id when item shops exist', async () => {
    const listResponse = await getItemShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'itemShopID',
    });

    const itemShops = Array.isArray(listResponse.ItemShop)
      ? listResponse.ItemShop
      : listResponse.ItemShop
        ? [listResponse.ItemShop]
        : [];

    if (itemShops.length === 0) {
      console.log('Skipping single item shop read test: account has no item shops');
      expect(true).toBe(true);
      return;
    }

    const firstItemShop = itemShops[0];
    if (!firstItemShop) {
      expect.unreachable('Expected at least one item shop after non-empty guard');
      return;
    }

    const itemShopID = firstItemShop.itemShopID;
    const itemShopResponse = await getItemShop({
      accessToken: accessToken!,
      accountID: accountID!,
      itemShopID,
    });

    expect(itemShopResponse.ItemShop.itemShopID).toBe(itemShopID);
    expect(itemShopResponse.ItemShop.itemID).toBeDefined();
  });

  it('should fail gracefully for a non-existent item shop id', async () => {
    const missingItemShopID = 999999999;

    try {
      await getItemShop({
        accessToken: accessToken!,
        accountID: accountID!,
        itemShopID: missingItemShopID,
      });
      expect.unreachable('Should have thrown an error for non-existent item shop id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
