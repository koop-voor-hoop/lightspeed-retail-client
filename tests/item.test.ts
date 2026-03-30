import { beforeAll, describe, expect, it } from 'bun:test';
import { getItem, getItems, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item read - Integration Tests', () => {
  const itemRelations = [
    'TaxClass',
    'ItemAttributes',
    'ItemAttributes.ItemAttributeSet',
    'Manufacturer',
    'Note',
    'Images',
    'ItemShops',
    'ItemVendorNums',
    'ItemComponents',
    'ItemECommerce',
    'TagRelations',
    'TagRelations.Tag',
    'CustomFieldValues',
    'CustomFieldValues.value',
    'ItemPrices',
  ] as const;

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

  it('should list items with a valid access token and account id', async () => {
    const response = await getItems({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemID',
    });

    expect(response).toBeDefined();
    expect(response.Item === undefined || Array.isArray(response.Item) || !!response.Item).toBe(true);
  });

  it('should support loading Category relation', async () => {
    const response = await getItems({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemID',
      load_relations: ['Category'],
    });

    expect(response).toBeDefined();
  });

  for (const relation of itemRelations) {
    it(`should support loading ${relation} relation`, async () => {
      const response = await getItems({
        accessToken: accessToken!,
        accountID: accountID!,
        limit: 10,
        sort: 'itemID',
        load_relations: [relation],
      });

      expect(response).toBeDefined();
      expect(response.Item === undefined || Array.isArray(response.Item) || !!response.Item).toBe(true);
    });
  }

  it('should support loading multiple item relations in one request', async () => {
    const response = await getItems({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemID',
      load_relations: ['Category', 'TaxClass', 'ItemShops', 'ItemPrices', 'Images'],
    });

    expect(response).toBeDefined();
  });

  it('should support loading nested item relations in one request', async () => {
    const response = await getItems({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemID',
      load_relations: ['ItemAttributes.ItemAttributeSet', 'TagRelations.Tag', 'CustomFieldValues.value'],
    });

    expect(response).toBeDefined();
  });

  it('should get a single item by id when items exist', async () => {
    const listResponse = await getItems({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'itemID',
    });

    const items = Array.isArray(listResponse.Item)
      ? listResponse.Item
      : listResponse.Item
        ? [listResponse.Item]
        : [];

    if (items.length === 0) {
      console.log('Skipping single item read test: account has no items');
      expect(true).toBe(true);
      return;
    }

    const firstItem = items[0];
    if (!firstItem) {
      expect.unreachable('Expected at least one item after non-empty guard');
      return;
    }

    const itemID = firstItem.itemID;
    const itemResponse = await getItem({
      accessToken: accessToken!,
      accountID: accountID!,
      itemID,
    });

    expect(itemResponse.Item.itemID).toBe(itemID);
  });

  it('should fail gracefully for a non-existent item id', async () => {
    const missingItemId = 999999999;

    try {
      await getItem({
        accessToken: accessToken!,
        accountID: accountID!,
        itemID: missingItemId,
      });
      expect.unreachable('Should have thrown an error for non-existent item id');
    } catch (error) {
      const isApiError = error instanceof LightspeedApiError;
      const isSchemaError =
        error instanceof Error && error.message.includes('Invalid Lightspeed API response payload');

      expect(isApiError || isSchemaError).toBe(true);

      if (isApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
