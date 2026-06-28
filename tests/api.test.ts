import { beforeAll, describe, expect, it } from 'bun:test';
import { getSession } from '../src';
import { API_BASE_URL, requestJson } from '../src/api';
import { categoriesResponseSchema } from '../src/schemas';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('requestJson - Integration Tests', () => {
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

  it('resolves an absolute URL with array-valued query params', async () => {
    const response = await requestJson(
      `${API_BASE_URL}/Account/${accountID}/Category.json`,
      {
        accessToken: accessToken!,
        params: { limit: 1, load_relations: ['Parent'] },
      },
      categoriesResponseSchema,
    );

    expect(response).toBeDefined();
    expect(response.Category === undefined || Array.isArray(response.Category) || !!response.Category).toBe(
      true,
    );
  });

  it('resolves an absolute URL with no query params', async () => {
    const response = await requestJson(
      `${API_BASE_URL}/Account/${accountID}/Category.json`,
      { accessToken: accessToken! },
      categoriesResponseSchema,
    );

    expect(response).toBeDefined();
  });
});
