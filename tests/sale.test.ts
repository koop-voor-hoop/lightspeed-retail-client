import { beforeAll, describe, expect, it } from 'bun:test';
import {
  createSale,
  getItems,
  getPaymentTypes,
  getRegisters,
  getSale,
  getSession,
  getShops,
  LightspeedApiError,
  updateSale,
} from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('sale - Integration Tests', () => {
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

  it('should create, complete, and read a sale', async () => {
    const shopsResponse = await getShops({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'shopID',
    });

    const shops = Array.isArray(shopsResponse.Shop)
      ? shopsResponse.Shop
      : shopsResponse.Shop
        ? [shopsResponse.Shop]
        : [];

    if (shops.length === 0) {
      console.log('Skipping sale test: account has no shops');
      expect(true).toBe(true);
      return;
    }

    const shop = shops[0]!;
    const shopID = shop.shopID;

    const registersResponse = await getRegisters({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 50,
      sort: 'registerID',
    });

    const registers = Array.isArray(registersResponse.Register)
      ? registersResponse.Register
      : registersResponse.Register
        ? [registersResponse.Register]
        : [];

    const register = registers.find((r) => Number(r.shopID) === Number(shopID));
    if (!register) {
      console.log('Skipping sale test: no register found for shop');
      expect(true).toBe(true);
      return;
    }

    const itemsResponse = await getItems({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'itemID',
      archived: 'false',
    });

    const items = Array.isArray(itemsResponse.Item)
      ? itemsResponse.Item
      : itemsResponse.Item
        ? [itemsResponse.Item]
        : [];

    if (items.length === 0) {
      console.log('Skipping sale test: account has no items');
      expect(true).toBe(true);
      return;
    }

    const item = items[0]!;

    const paymentTypesResponse = await getPaymentTypes({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 20,
      sort: 'paymentTypeID',
    });

    const paymentTypes = Array.isArray(paymentTypesResponse.PaymentType)
      ? paymentTypesResponse.PaymentType
      : paymentTypesResponse.PaymentType
        ? [paymentTypesResponse.PaymentType]
        : [];

    if (paymentTypes.length === 0) {
      console.log('Skipping sale test: account has no payment types');
      expect(true).toBe(true);
      return;
    }

    const cashPaymentType = paymentTypes.find((pt) => pt.name?.toLowerCase() === 'cash') ?? paymentTypes[0]!;

    const session = await getSession(accessToken!);
    const employeeID = session.employeeID;

    const createResponse = await createSale({
      accessToken: accessToken!,
      accountID: accountID!,
      employeeID: Number(employeeID),
      registerID: Number(register.registerID),
      shopID: Number(shopID),
      customerID: 0,
      completed: false,
      SaleLines: {
        SaleLine: {
          itemID: Number(item.itemID),
          unitQuantity: 1,
        },
      },
    });

    const saleID = createResponse.Sale.saleID;
    expect(saleID).toBeDefined();

    const saleResponse = await getSale({
      accessToken: accessToken!,
      accountID: accountID!,
      saleID,
    });

    const total = Number(saleResponse.Sale.calcTotal ?? saleResponse.Sale.total ?? 0);
    expect(total).toBeGreaterThanOrEqual(0);

    const completeResponse = await updateSale({
      accessToken: accessToken!,
      accountID: accountID!,
      saleID,
      completed: true,
      SalePayments: {
        SalePayment: {
          amount: total,
          paymentTypeID: Number(cashPaymentType.paymentTypeID),
        },
      },
    });

    expect(completeResponse.Sale.completed).toBe(true);
    expect(Number(completeResponse.Sale.calcPayments ?? 0)).toBe(total);
  });

  it('should fail gracefully for a non-existent sale id', async () => {
    const missingSaleId = 999999999;

    try {
      await getSale({
        accessToken: accessToken!,
        accountID: accountID!,
        saleID: missingSaleId,
      });
      expect.unreachable('Should have thrown an error for non-existent sale id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
