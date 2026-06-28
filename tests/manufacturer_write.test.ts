import { beforeAll, describe, expect, it } from 'bun:test';
import { createManufacturer, getSession, updateManufacturer } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('manufacturer write - Integration Tests', () => {
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

  // Manufacturer has no delete endpoint, so this intentionally leaves a `zz-test-…`
  // record behind for manual cleanup.
  it('should create and update a manufacturer', async () => {
    const name = `zz-test-manufacturer-${Date.now()}`;

    const created = await createManufacturer({ accessToken: accessToken!, accountID: accountID!, name });
    const manufacturerID = created.Manufacturer.manufacturerID;
    expect(manufacturerID).toBeDefined();
    expect(created.Manufacturer.name).toBe(name);

    const updated = await updateManufacturer({
      accessToken: accessToken!,
      accountID: accountID!,
      manufacturerID,
      name: `${name}-upd`,
    });
    expect(updated.Manufacturer.name).toBe(`${name}-upd`);
  }, 30000);
});
