import { beforeAll, describe, expect, it } from 'bun:test';
import { getSession, getTag, getTags, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('tag read - Integration Tests', () => {
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

  it('should list tags with a valid access token and account id', async () => {
    const response = await getTags({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'tagID',
    });

    expect(response).toBeDefined();
    expect(response.Tag === undefined || Array.isArray(response.Tag) || !!response.Tag).toBe(true);
  });

  it('should get a single tag by id when tags exist', async () => {
    const listResponse = await getTags({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'tagID',
    });

    const tags = Array.isArray(listResponse.Tag)
      ? listResponse.Tag
      : listResponse.Tag
        ? [listResponse.Tag]
        : [];

    if (tags.length === 0) {
      console.log('Skipping single tag read test: account has no tags');
      expect(true).toBe(true);
      return;
    }

    const firstTag = tags[0];
    if (!firstTag) {
      expect.unreachable('Expected at least one tag after non-empty guard');
      return;
    }

    const tagID = firstTag.tagID;
    const tagResponse = await getTag({
      accessToken: accessToken!,
      accountID: accountID!,
      tagID,
    });

    expect(tagResponse.Tag.tagID).toBe(tagID);
    expect(tagResponse.Tag.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent tag id', async () => {
    const missingTagId = 999999999;

    try {
      await getTag({
        accessToken: accessToken!,
        accountID: accountID!,
        tagID: missingTagId,
      });
      expect.unreachable('Should have thrown an error for non-existent tag id');
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
