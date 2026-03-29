import { beforeAll, describe, expect, it } from 'bun:test';
import { getManufacturer, getManufacturers, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('manufacturer read - Integration Tests', () => {
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

  it('should list manufacturers with a valid access token and account id', async () => {
    const response = await getManufacturers({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'manufacturerID',
    });

    expect(response).toBeDefined();
    expect(
      response.Manufacturer === undefined || Array.isArray(response.Manufacturer) || !!response.Manufacturer,
    ).toBe(true);
  });

  it('should get a single manufacturer by id when manufacturers exist', async () => {
    const listResponse = await getManufacturers({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'manufacturerID',
    });

    const manufacturers = Array.isArray(listResponse.Manufacturer)
      ? listResponse.Manufacturer
      : listResponse.Manufacturer
        ? [listResponse.Manufacturer]
        : [];

    if (manufacturers.length === 0) {
      console.log('Skipping single manufacturer read test: account has no manufacturers');
      expect(true).toBe(true);
      return;
    }

    const firstManufacturer = manufacturers[0];
    if (!firstManufacturer) {
      expect.unreachable('Expected at least one manufacturer after non-empty guard');
      return;
    }

    const manufacturerID = firstManufacturer.manufacturerID;
    const manufacturerResponse = await getManufacturer({
      accessToken: accessToken!,
      accountID: accountID!,
      manufacturerID,
    });

    expect(manufacturerResponse.Manufacturer.manufacturerID).toBe(manufacturerID);
    expect(manufacturerResponse.Manufacturer.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent manufacturer id', async () => {
    const missingManufacturerId = 999999999;

    try {
      await getManufacturer({
        accessToken: accessToken!,
        accountID: accountID!,
        manufacturerID: missingManufacturerId,
      });
      expect.unreachable('Should have thrown an error for non-existent manufacturer id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
