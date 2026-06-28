import { beforeAll, describe, expect, it } from 'bun:test';
import { createTaxClass, deleteTaxClass, getSession, updateTaxClass } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('tax class write - Integration Tests', () => {
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

  it('should create, update, and delete a tax class', async () => {
    const name = `zz-test-taxclass-${Date.now()}`;

    const created = await createTaxClass({ accessToken: accessToken!, accountID: accountID!, name });
    const taxClassID = created.TaxClass.taxClassID;

    try {
      expect(taxClassID).toBeDefined();
      expect(created.TaxClass.name).toBe(name);

      const updated = await updateTaxClass({
        accessToken: accessToken!,
        accountID: accountID!,
        taxClassID,
        name: `${name}-upd`,
      });
      expect(updated.TaxClass.name).toBe(`${name}-upd`);
    } finally {
      await deleteTaxClass({ accessToken: accessToken!, accountID: accountID!, taxClassID });
    }
  }, 30000);
});
