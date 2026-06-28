import { beforeAll, describe, expect, it } from 'bun:test';
import { createPaymentType, deletePaymentType, getSession, updatePaymentType } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('payment type write - Integration Tests', () => {
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

  it('should create, update, and delete a payment type', async () => {
    const name = `zz-test-paytype-${Date.now()}`;

    const created = await createPaymentType({ accessToken: accessToken!, accountID: accountID!, name });
    const paymentTypeID = created.PaymentType.paymentTypeID;

    try {
      expect(paymentTypeID).toBeDefined();
      expect(created.PaymentType.name).toBe(name);

      const updated = await updatePaymentType({
        accessToken: accessToken!,
        accountID: accountID!,
        paymentTypeID,
        name: `${name}-upd`,
      });
      expect(updated.PaymentType.name).toBe(`${name}-upd`);
    } finally {
      await deletePaymentType({ accessToken: accessToken!, accountID: accountID!, paymentTypeID });
    }
  }, 30000);
});
