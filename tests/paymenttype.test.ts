import { beforeAll, describe, expect, it } from 'bun:test';
import { getPaymentType, getPaymentTypes, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('payment type read - Integration Tests', () => {
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

  it('should list payment types with a valid access token and account id', async () => {
    const response = await getPaymentTypes({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'paymentTypeID',
    });

    expect(response).toBeDefined();
    expect(
      response.PaymentType === undefined || Array.isArray(response.PaymentType) || !!response.PaymentType,
    ).toBe(true);
  });

  it('should get a single payment type by id when payment types exist', async () => {
    const listResponse = await getPaymentTypes({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'paymentTypeID',
    });

    const paymentTypes = Array.isArray(listResponse.PaymentType)
      ? listResponse.PaymentType
      : listResponse.PaymentType
        ? [listResponse.PaymentType]
        : [];

    if (paymentTypes.length === 0) {
      console.log('Skipping single payment type read test: account has no payment types');
      expect(true).toBe(true);
      return;
    }

    const firstPaymentType = paymentTypes[0];
    if (!firstPaymentType) {
      expect.unreachable('Expected at least one payment type after non-empty guard');
      return;
    }

    const paymentTypeID = firstPaymentType.paymentTypeID;
    const paymentTypeResponse = await getPaymentType({
      accessToken: accessToken!,
      accountID: accountID!,
      paymentTypeID,
    });

    expect(paymentTypeResponse.PaymentType.paymentTypeID).toBe(paymentTypeID);
    expect(paymentTypeResponse.PaymentType.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent payment type id', async () => {
    const missingPaymentTypeId = 999999999;

    try {
      await getPaymentType({
        accessToken: accessToken!,
        accountID: accountID!,
        paymentTypeID: missingPaymentTypeId,
      });
      expect.unreachable('Should have thrown an error for non-existent payment type id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
