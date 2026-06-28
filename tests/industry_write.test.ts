import { beforeAll, describe, expect, it } from 'bun:test';
import { getIndustries, getSession, updateIndustry } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('industry write - Integration Tests', () => {
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

  // Industry has no create/delete; exercise update idempotently by re-setting `enabled`
  // to its current value so no account state actually changes.
  it('should update an industry without changing its values', async () => {
    const list = await getIndustries({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'industryID',
    });
    const industries = Array.isArray(list.Industry) ? list.Industry : list.Industry ? [list.Industry] : [];

    if (industries.length === 0 || industries[0]!.enabled === undefined) {
      console.log('Skipping industry update test: no industry with an `enabled` value');
      expect(true).toBe(true);
      return;
    }

    const industry = industries[0]!;
    const updated = await updateIndustry({
      accessToken: accessToken!,
      accountID: accountID!,
      industryID: industry.industryID,
      enabled: industry.enabled,
    });
    expect(updated.Industry.industryID).toBe(industry.industryID);
  }, 30000);
});
