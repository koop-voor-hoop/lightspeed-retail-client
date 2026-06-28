import { beforeAll, describe, expect, it } from 'bun:test';
import { getItemShops, getSession, updateItemShop } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item shop write - Integration Tests', () => {
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

  // updateItemShop only writes reorder settings (not qoh); re-set `reorderPoint` to its
  // current value so inventory is untouched.
  it('should update an item shop reorder setting without changing inventory', async () => {
    const list = await getItemShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'itemShopID',
    });
    const itemShops = Array.isArray(list.ItemShop) ? list.ItemShop : list.ItemShop ? [list.ItemShop] : [];

    if (itemShops.length === 0) {
      console.log('Skipping item shop update test: account has no item shops');
      expect(true).toBe(true);
      return;
    }

    const itemShop = itemShops[0]!;
    const reorderPoint = itemShop.reorderPoint ?? 0;
    const updated = await updateItemShop({
      accessToken: accessToken!,
      accountID: accountID!,
      itemShopID: itemShop.itemShopID,
      reorderPoint,
    });
    expect(updated.ItemShop.itemShopID).toBe(itemShop.itemShopID);
  }, 30000);
});
