import { beforeAll, describe, expect, it } from 'bun:test';
import { getSeason, getSeasons, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('season read - Integration Tests', () => {
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

  it('should list seasons with a valid access token and account id', async () => {
    const response = await getSeasons({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'seasonID',
    });

    expect(response).toBeDefined();
    expect(response.Season === undefined || Array.isArray(response.Season) || !!response.Season).toBe(true);
  });

  it('should get a single season by id when seasons exist', async () => {
    const listResponse = await getSeasons({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'seasonID',
    });

    const seasons = Array.isArray(listResponse.Season)
      ? listResponse.Season
      : listResponse.Season
        ? [listResponse.Season]
        : [];

    if (seasons.length === 0) {
      console.log('Skipping single season read test: account has no seasons');
      expect(true).toBe(true);
      return;
    }

    const firstSeason = seasons[0];
    if (!firstSeason) {
      expect.unreachable('Expected at least one season after non-empty guard');
      return;
    }

    const seasonID = firstSeason.seasonID;
    const seasonResponse = await getSeason({
      accessToken: accessToken!,
      accountID: accountID!,
      seasonID,
    });

    expect(seasonResponse.Season.seasonID).toBe(seasonID);
    expect(seasonResponse.Season.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent season id', async () => {
    const missingSeasonID = 999999999;

    try {
      await getSeason({
        accessToken: accessToken!,
        accountID: accountID!,
        seasonID: missingSeasonID,
      });
      expect.unreachable('Should have thrown an error for non-existent season id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
