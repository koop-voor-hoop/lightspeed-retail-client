import { beforeAll, describe, expect, it } from 'bun:test';
import { createDiscount, deleteDiscount, getSession, updateDiscount } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('discount write - Integration Tests', () => {
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

  it('should create, update, and delete a discount', async () => {
    const name = `zz-test-discount-${Date.now()}`;

    const created = await createDiscount({
      accessToken: accessToken!,
      accountID: accountID!,
      name,
      discountAmount: 0,
      discountPercent: 10,
      requireCustomer: false,
    });
    const discountID = created.Discount.discountID;

    try {
      expect(discountID).toBeDefined();
      expect(created.Discount.name).toBe(name);

      const updated = await updateDiscount({
        accessToken: accessToken!,
        accountID: accountID!,
        discountID,
        name: `${name}-upd`,
      });
      expect(updated.Discount.name).toBe(`${name}-upd`);
    } finally {
      await deleteDiscount({ accessToken: accessToken!, accountID: accountID!, discountID });
    }
  }, 30000);
});
