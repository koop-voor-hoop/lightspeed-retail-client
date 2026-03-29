import { beforeAll, describe, expect, it } from 'bun:test';
import { getSession, getTaxClass, getTaxClasses, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('tax class read - Integration Tests', () => {
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

  it('should list tax classes with a valid access token and account id', async () => {
    const response = await getTaxClasses({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'taxClassID',
    });

    expect(response).toBeDefined();
    expect(response.TaxClass === undefined || Array.isArray(response.TaxClass) || !!response.TaxClass).toBe(
      true,
    );
  });

  it('should get a single tax class by id when tax classes exist', async () => {
    const listResponse = await getTaxClasses({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'taxClassID',
    });

    const taxClasses = Array.isArray(listResponse.TaxClass)
      ? listResponse.TaxClass
      : listResponse.TaxClass
        ? [listResponse.TaxClass]
        : [];

    if (taxClasses.length === 0) {
      console.log('Skipping single tax class read test: account has no tax classes');
      expect(true).toBe(true);
      return;
    }

    const firstTaxClass = taxClasses[0];
    if (!firstTaxClass) {
      expect.unreachable('Expected at least one tax class after non-empty guard');
      return;
    }

    const taxClassID = firstTaxClass.taxClassID;
    const taxClassResponse = await getTaxClass({
      accessToken: accessToken!,
      accountID: accountID!,
      taxClassID,
    });

    expect(taxClassResponse.TaxClass.taxClassID).toBe(taxClassID);
    expect(taxClassResponse.TaxClass.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent tax class id', async () => {
    const missingTaxClassID = 999999999;

    try {
      await getTaxClass({
        accessToken: accessToken!,
        accountID: accountID!,
        taxClassID: missingTaxClassID,
      });
      expect.unreachable('Should have thrown an error for non-existent tax class id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
