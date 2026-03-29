import { beforeAll, describe, expect, it } from 'bun:test';
import { getDiscount, getDiscounts, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('discount read - Integration Tests', () => {
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

  it('should list discounts with a valid access token and account id', async () => {
    const response = await getDiscounts({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'discountID',
    });

    expect(response).toBeDefined();
    expect(response.Discount === undefined || Array.isArray(response.Discount) || !!response.Discount).toBe(
      true,
    );
  });

  it('should get a single discount by id when discounts exist', async () => {
    const listResponse = await getDiscounts({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'discountID',
    });

    const discounts = Array.isArray(listResponse.Discount)
      ? listResponse.Discount
      : listResponse.Discount
        ? [listResponse.Discount]
        : [];

    if (discounts.length === 0) {
      console.log('Skipping single discount read test: account has no discounts');
      expect(true).toBe(true);
      return;
    }

    const firstDiscount = discounts[0];
    if (!firstDiscount) {
      expect.unreachable('Expected at least one discount after non-empty guard');
      return;
    }

    const discountID = firstDiscount.discountID;
    const discountResponse = await getDiscount({
      accessToken: accessToken!,
      accountID: accountID!,
      discountID,
    });

    expect(discountResponse.Discount.discountID).toBe(discountID);
    expect(discountResponse.Discount.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent discount id', async () => {
    const missingDiscountId = 999999999;

    try {
      await getDiscount({
        accessToken: accessToken!,
        accountID: accountID!,
        discountID: missingDiscountId,
      });
      expect.unreachable('Should have thrown an error for non-existent discount id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
