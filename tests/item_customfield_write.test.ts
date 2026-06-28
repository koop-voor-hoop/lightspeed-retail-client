import { beforeAll, describe, expect, it } from 'bun:test';
import { createItemCustomField, deleteItemCustomField, getSession, updateItemCustomField } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item custom field write - Integration Tests', () => {
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

  it('should create, update, and delete an item custom field', async () => {
    const name = `zz-test-cf-${Date.now()}`;

    const created = await createItemCustomField({
      accessToken: accessToken!,
      accountID: accountID!,
      type: 'string',
      name,
    });
    const customFieldID = created.CustomField.customFieldID;

    try {
      expect(customFieldID).toBeDefined();
      expect(created.CustomField.name).toBe(name);

      const updated = await updateItemCustomField({
        accessToken: accessToken!,
        accountID: accountID!,
        customFieldID,
        name: `${name}-upd`,
      });
      expect(updated.CustomField.name).toBe(`${name}-upd`);
    } finally {
      await deleteItemCustomField({ accessToken: accessToken!, accountID: accountID!, customFieldID });
    }
  }, 30000);
});
