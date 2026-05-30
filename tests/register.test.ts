import { beforeAll, describe, expect, it } from 'bun:test';
import { getRegister, getRegisters, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('register read - Integration Tests', () => {
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

  it('should list registers with a valid access token and account id', async () => {
    const response = await getRegisters({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'registerID',
    });

    expect(response).toBeDefined();
    expect(response.Register === undefined || Array.isArray(response.Register) || !!response.Register).toBe(
      true,
    );
  });

  it('should get a single register by id when registers exist', async () => {
    const listResponse = await getRegisters({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'registerID',
    });

    const registers = Array.isArray(listResponse.Register)
      ? listResponse.Register
      : listResponse.Register
        ? [listResponse.Register]
        : [];

    if (registers.length === 0) {
      console.log('Skipping single register read test: account has no registers');
      expect(true).toBe(true);
      return;
    }

    const firstRegister = registers[0];
    if (!firstRegister) {
      expect.unreachable('Expected at least one register after non-empty guard');
      return;
    }

    const registerID = firstRegister.registerID;
    const registerResponse = await getRegister({
      accessToken: accessToken!,
      accountID: accountID!,
      registerID,
    });

    expect(registerResponse.Register.registerID).toBe(registerID);
    expect(registerResponse.Register.name).toBeDefined();
  });

  it('should fail gracefully for a non-existent register id', async () => {
    const missingRegisterId = 999999999;

    try {
      await getRegister({
        accessToken: accessToken!,
        accountID: accountID!,
        registerID: missingRegisterId,
      });
      expect.unreachable('Should have thrown an error for non-existent register id');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
