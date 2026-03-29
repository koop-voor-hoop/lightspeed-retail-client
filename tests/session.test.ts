import { beforeEach, describe, expect, it } from 'bun:test';
import { getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;

describe('getSession - Integration Tests', () => {
  beforeEach(() => {
    accessToken = Bun.env.TEST_ACCESS_TOKEN;
    if (!accessToken) {
      console.log('Skipping tests: TEST_ACCESS_TOKEN environment variable not set');
      console.log('Run `bun env` to set the environment variables and try again.');
      process.exit(0);
    }
  });

  it('should successfully get session with valid access token from environment', async () => {
    const session = await getSession(accessToken!);

    expect(session.employeeID).toBeDefined();
    expect(session.systemCustomerID).toBeDefined();
    expect(session.Employee).toBeDefined();
    expect(session.Rights).toBeDefined();
  });

  it('should fail gracefully with invalid access token', async () => {
    const invalidToken = 'invalid-token-that-will-fail-123';

    try {
      await getSession(invalidToken);
      expect.unreachable('Should have thrown an error for invalid token');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(401);
      }
    }
  });
});
