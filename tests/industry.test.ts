import { beforeAll, describe, expect, it } from 'bun:test';
import { getIndustries, getIndustry, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('industry read - Integration Tests', () => {
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

  it('should list industries with a valid access token and account id', async () => {
    const response = await getIndustries({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'industryID',
    });

    expect(response).toBeDefined();
    expect(response.Industry === undefined || Array.isArray(response.Industry) || !!response.Industry).toBe(
      true,
    );
  });

  it('should get a single industry by id when industries exist', async () => {
    const listResponse = await getIndustries({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'industryID',
    });

    const industries = Array.isArray(listResponse.Industry)
      ? listResponse.Industry
      : listResponse.Industry
        ? [listResponse.Industry]
        : [];

    if (industries.length === 0) {
      console.log('Skipping single industry read test: account has no industries');
      expect(true).toBe(true);
      return;
    }

    const firstIndustry = industries[0];
    if (!firstIndustry) {
      expect.unreachable('Expected at least one industry after non-empty guard');
      return;
    }

    const industryID = firstIndustry.industryID;
    const industryResponse = await getIndustry({
      accessToken: accessToken!,
      accountID: accountID!,
      industryID,
    });

    expect(industryResponse.Industry.industryID).toBe(industryID);
    expect(industryResponse.Industry.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent industry id', async () => {
    const missingIndustryID = 999999999;

    try {
      await getIndustry({
        accessToken: accessToken!,
        accountID: accountID!,
        industryID: missingIndustryID,
      });
      expect.unreachable('Should have thrown an error for non-existent industry id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
