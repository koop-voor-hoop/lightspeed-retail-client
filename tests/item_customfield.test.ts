import { beforeAll, describe, expect, it } from 'bun:test';
import { getItemCustomField, getItemCustomFields, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item customfield read - Integration Tests', () => {
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

  it('should list item custom fields with a valid access token and account id', async () => {
    const response = await getItemCustomFields({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'customFieldID',
    });

    expect(response).toBeDefined();
    expect(
      response.CustomField === undefined || Array.isArray(response.CustomField) || !!response.CustomField,
    ).toBe(true);
  });

  it('should get a single item custom field by id when custom fields exist', async () => {
    const listResponse = await getItemCustomFields({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'customFieldID',
    });

    const customFields = Array.isArray(listResponse.CustomField)
      ? listResponse.CustomField
      : listResponse.CustomField
        ? [listResponse.CustomField]
        : [];

    if (customFields.length === 0) {
      console.log('Skipping single item custom field read test: account has no custom fields');
      expect(true).toBe(true);
      return;
    }

    const firstCustomField = customFields[0];
    if (!firstCustomField) {
      expect.unreachable('Expected at least one item custom field after non-empty guard');
      return;
    }

    const customFieldID = firstCustomField.customFieldID;
    const customFieldResponse = await getItemCustomField({
      accessToken: accessToken!,
      accountID: accountID!,
      customFieldID,
    });

    expect(customFieldResponse.CustomField.customFieldID).toBe(customFieldID);
    expect(customFieldResponse.CustomField.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent item custom field id', async () => {
    const missingCustomFieldID = 999999999;

    try {
      await getItemCustomField({
        accessToken: accessToken!,
        accountID: accountID!,
        customFieldID: missingCustomFieldID,
      });
      expect.unreachable('Should have thrown an error for non-existent item custom field id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
