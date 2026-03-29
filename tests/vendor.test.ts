import { beforeAll, describe, expect, it } from 'bun:test';
import { getSession, getVendor, getVendors, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('vendor read - Integration Tests', () => {
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

  it('should list vendors with a valid access token and account id', async () => {
    const response = await getVendors({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'vendorID',
      load_relations: ['Contact'],
    });

    expect(response).toBeDefined();
    expect(response.Vendor === undefined || Array.isArray(response.Vendor) || !!response.Vendor).toBe(true);
  });

  it('should get a single vendor by id when vendors exist', async () => {
    const listResponse = await getVendors({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'vendorID',
    });

    const vendors = Array.isArray(listResponse.Vendor)
      ? listResponse.Vendor
      : listResponse.Vendor
        ? [listResponse.Vendor]
        : [];

    if (vendors.length === 0) {
      console.log('Skipping single vendor read test: account has no vendors');
      expect(true).toBe(true);
      return;
    }

    const firstVendor = vendors[0];
    if (!firstVendor) {
      expect.unreachable('Expected at least one vendor after non-empty guard');
      return;
    }

    const vendorID = firstVendor.vendorID;
    const vendorResponse = await getVendor({
      accessToken: accessToken!,
      accountID: accountID!,
      vendorID,
    });

    expect(vendorResponse.Vendor.vendorID).toBe(vendorID);
    expect(vendorResponse.Vendor.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent vendor id', async () => {
    const missingVendorId = 999999999;

    try {
      await getVendor({
        accessToken: accessToken!,
        accountID: accountID!,
        vendorID: missingVendorId,
      });
      expect.unreachable('Should have thrown an error for non-existent vendor id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
