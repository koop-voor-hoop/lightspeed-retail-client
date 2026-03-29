import { beforeAll, describe, expect, it } from 'bun:test';
import { getCategories, getCategory, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('category read - Integration Tests', () => {
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

  it('should list categories with a valid access token and account id', async () => {
    const response = await getCategories({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'categoryID',
    });

    expect(response).toBeDefined();
    expect(response.Category === undefined || Array.isArray(response.Category) || !!response.Category).toBe(
      true,
    );
  });

  it('should support loading Parent relation', async () => {
    const response = await getCategories({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'categoryID',
      load_relations: ['Parent'],
    });

    expect(response).toBeDefined();
  });

  it('should get a single category by id when categories exist', async () => {
    const listResponse = await getCategories({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'categoryID',
    });

    const categories = Array.isArray(listResponse.Category)
      ? listResponse.Category
      : listResponse.Category
        ? [listResponse.Category]
        : [];

    if (categories.length === 0) {
      console.log('Skipping single category read test: account has no categories');
      expect(true).toBe(true);
      return;
    }

    const firstCategory = categories[0];
    if (!firstCategory) {
      expect.unreachable('Expected at least one category after non-empty guard');
      return;
    }

    const categoryID = firstCategory.categoryID;
    const categoryResponse = await getCategory({
      accessToken: accessToken!,
      accountID: accountID!,
      categoryID,
    });

    expect(categoryResponse.Category.categoryID).toBe(categoryID);
    expect(categoryResponse.Category.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent category id', async () => {
    const missingCategoryId = 999999999;

    try {
      await getCategory({
        accessToken: accessToken!,
        accountID: accountID!,
        categoryID: missingCategoryId,
      });
      expect.unreachable('Should have thrown an error for non-existent category id');
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
