import { beforeAll, describe, expect, it } from 'bun:test';
import { createSeason, deleteSeason, getSession, updateSeason } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('season write - Integration Tests', () => {
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

  it('should create, update, and delete a season', async () => {
    const name = `zz-test-season-${Date.now()}`;

    const created = await createSeason({ accessToken: accessToken!, accountID: accountID!, name });
    const seasonID = created.Season.seasonID;

    try {
      expect(seasonID).toBeDefined();
      expect(created.Season.name).toBe(name);

      const updated = await updateSeason({
        accessToken: accessToken!,
        accountID: accountID!,
        seasonID,
        name: `${name}-upd`,
      });
      expect(updated.Season.name).toBe(`${name}-upd`);
    } finally {
      await deleteSeason({ accessToken: accessToken!, accountID: accountID!, seasonID });
    }
  }, 30000);
});
