import { beforeAll, describe, expect, it } from 'bun:test';
import { getProcessingFee, getProcessingFees, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('processing fee read - Integration Tests', () => {
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

  it('should list processing fees with a valid access token and account id', async () => {
    const response = await getProcessingFees({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'salePaymentProcessingFeeID',
    });

    expect(response).toBeDefined();
    expect(
      response.ProcessingFee === undefined ||
        Array.isArray(response.ProcessingFee) ||
        !!response.ProcessingFee,
    ).toBe(true);
  });

  it('should support salePaymentID filtering when a processing fee exists', async () => {
    const listResponse = await getProcessingFees({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'salePaymentProcessingFeeID',
    });

    const processingFees = Array.isArray(listResponse.ProcessingFee)
      ? listResponse.ProcessingFee
      : listResponse.ProcessingFee
        ? [listResponse.ProcessingFee]
        : [];

    if (processingFees.length === 0) {
      console.log('Skipping processing fee filter test: account has no processing fees');
      expect(true).toBe(true);
      return;
    }

    const firstProcessingFee = processingFees[0];
    if (!firstProcessingFee?.salePaymentID) {
      console.log('Skipping processing fee filter test: first record missing salePaymentID');
      expect(true).toBe(true);
      return;
    }

    const filtered = await getProcessingFees({
      accessToken: accessToken!,
      accountID: accountID!,
      salePaymentID: firstProcessingFee.salePaymentID,
    });

    expect(filtered).toBeDefined();
  });

  it('should get a single processing fee by id when processing fees exist', async () => {
    const listResponse = await getProcessingFees({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'salePaymentProcessingFeeID',
    });

    const processingFees = Array.isArray(listResponse.ProcessingFee)
      ? listResponse.ProcessingFee
      : listResponse.ProcessingFee
        ? [listResponse.ProcessingFee]
        : [];

    if (processingFees.length === 0) {
      console.log('Skipping single processing fee read test: account has no processing fees');
      expect(true).toBe(true);
      return;
    }

    const firstProcessingFee = processingFees[0];
    if (!firstProcessingFee) {
      expect.unreachable('Expected at least one processing fee after non-empty guard');
      return;
    }

    const processingFeeID = firstProcessingFee.salePaymentProcessingFeeID;
    const processingFeeResponse = await getProcessingFee({
      accessToken: accessToken!,
      accountID: accountID!,
      processingFeeID,
    });

    expect(processingFeeResponse.ProcessingFee.salePaymentProcessingFeeID).toBe(processingFeeID);
  });

  it('should fail gracefully for a non-existent processing fee id', async () => {
    const missingProcessingFeeID = 999999999;

    try {
      await getProcessingFee({
        accessToken: accessToken!,
        accountID: accountID!,
        processingFeeID: missingProcessingFeeID,
      });
      expect.unreachable('Should have thrown an error for non-existent processing fee id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
