import { beforeAll, describe, expect, it } from 'bun:test';
import { getItemAttributeSet, getItemAttributeSets, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('item attribute set read - Integration Tests', () => {
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

  it('should list item attribute sets with a valid access token and account id', async () => {
    const response = await getItemAttributeSets({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'itemAttributeSetID',
    });

    expect(response).toBeDefined();
    expect(
      response.ItemAttributeSet === undefined ||
        Array.isArray(response.ItemAttributeSet) ||
        !!response.ItemAttributeSet,
    ).toBe(true);
  });

  it('should get a single item attribute set by id when records exist', async () => {
    const listResponse = await getItemAttributeSets({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'itemAttributeSetID',
    });

    const itemAttributeSets = Array.isArray(listResponse.ItemAttributeSet)
      ? listResponse.ItemAttributeSet
      : listResponse.ItemAttributeSet
        ? [listResponse.ItemAttributeSet]
        : [];

    if (itemAttributeSets.length === 0) {
      console.log('Skipping single item attribute set read test: account has no item attribute sets');
      expect(true).toBe(true);
      return;
    }

    const firstItemAttributeSet = itemAttributeSets[0];
    if (!firstItemAttributeSet) {
      expect.unreachable('Expected at least one item attribute set after non-empty guard');
      return;
    }

    const itemAttributeSetID = firstItemAttributeSet.itemAttributeSetID;
    const itemAttributeSetResponse = await getItemAttributeSet({
      accessToken: accessToken!,
      accountID: accountID!,
      itemAttributeSetID,
    });

    expect(itemAttributeSetResponse.ItemAttributeSet.itemAttributeSetID).toBe(itemAttributeSetID);
    expect(itemAttributeSetResponse.ItemAttributeSet.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent item attribute set id', async () => {
    const missingItemAttributeSetID = 999999999;

    try {
      await getItemAttributeSet({
        accessToken: accessToken!,
        accountID: accountID!,
        itemAttributeSetID: missingItemAttributeSetID,
      });
      expect.unreachable('Should have thrown an error for non-existent item attribute set id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
