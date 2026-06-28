import { beforeAll, describe, expect, it } from 'bun:test';
import { createVendor, deleteVendor, getSession, updateVendor } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('vendor write - Integration Tests', () => {
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

  it('should create, update, and delete a vendor', async () => {
    const name = `zz-test-vendor-${Date.now()}`;

    const created = await createVendor({ accessToken: accessToken!, accountID: accountID!, name });
    const vendorID = created.Vendor.vendorID;

    try {
      expect(vendorID).toBeDefined();
      expect(created.Vendor.name).toBe(name);

      const updated = await updateVendor({
        accessToken: accessToken!,
        accountID: accountID!,
        vendorID,
        name: `${name}-upd`,
      });
      expect(updated.Vendor.name).toBe(`${name}-upd`);
    } finally {
      await deleteVendor({ accessToken: accessToken!, accountID: accountID!, vendorID });
    }
  }, 30000);
});
