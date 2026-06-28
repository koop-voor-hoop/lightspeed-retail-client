import { beforeAll, describe, expect, it } from 'bun:test';
import { getPriceLevels, getSession, updatePriceLevel } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('price level write - Integration Tests', () => {
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

  // Price level has no create/delete; exercise update idempotently by re-setting `name`
  // to its current value so no account state actually changes.
  it('should update a price level without changing its values', async () => {
    const list = await getPriceLevels({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'priceLevelID',
    });
    const levels = Array.isArray(list.PriceLevel)
      ? list.PriceLevel
      : list.PriceLevel
        ? [list.PriceLevel]
        : [];

    if (levels.length === 0) {
      console.log('Skipping price level update test: account has no price levels');
      expect(true).toBe(true);
      return;
    }

    const level = levels[0]!;
    const updated = await updatePriceLevel({
      accessToken: accessToken!,
      accountID: accountID!,
      priceLevelID: level.priceLevelID,
      name: level.name,
    });
    expect(updated.PriceLevel.name).toBe(level.name);
  }, 30000);
});
