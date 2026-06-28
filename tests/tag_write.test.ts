import { beforeAll, describe, expect, it } from 'bun:test';
import { createTag, deleteTag, getSession, updateTag } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('tag write - Integration Tests', () => {
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

  it('should create, update, and delete a tag', async () => {
    const name = `zz-test-tag-${Date.now()}`;

    const created = await createTag({ accessToken: accessToken!, accountID: accountID!, name });
    const tagID = created.Tag.tagID;

    try {
      expect(tagID).toBeDefined();
      expect(created.Tag.name).toBe(name);

      const updated = await updateTag({
        accessToken: accessToken!,
        accountID: accountID!,
        tagID,
        name: `${name}-upd`,
      });
      expect(updated.Tag.name).toBe(`${name}-upd`);
    } finally {
      await deleteTag({ accessToken: accessToken!, accountID: accountID!, tagID });
    }
  }, 30000);
});
