import { beforeAll, describe, expect, it } from 'bun:test';
import { createCategory, deleteCategory, getSession, updateCategory } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('category write - Integration Tests', () => {
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

  it('should create, update, and delete a category', async () => {
    const name = `zz-test-category-${Date.now()}`;

    const created = await createCategory({ accessToken: accessToken!, accountID: accountID!, name });
    const categoryID = created.Category.categoryID;

    try {
      expect(categoryID).toBeDefined();
      expect(created.Category.name).toBe(name);

      const updated = await updateCategory({
        accessToken: accessToken!,
        accountID: accountID!,
        categoryID,
        name: `${name}-upd`,
      });
      expect(updated.Category.name).toBe(`${name}-upd`);
    } finally {
      await deleteCategory({ accessToken: accessToken!, accountID: accountID!, categoryID });
    }
  }, 30000);
});
