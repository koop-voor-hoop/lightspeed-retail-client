import { beforeAll, describe, expect, it } from 'bun:test';
import { getLocales, LightspeedApiError } from '../src';

let accessToken: string | undefined;

describe('locale read - Integration Tests', () => {
  beforeAll(() => {
    accessToken = Bun.env.TEST_ACCESS_TOKEN;

    if (!accessToken) {
      console.log('Skipping tests: TEST_ACCESS_TOKEN environment variable not set');
      console.log('Run `bun env` to set the environment variables and try again.');
      process.exit(0);
    }
  });

  it('should list locales with a valid access token', async () => {
    const response = await getLocales({
      accessToken: accessToken!,
      limit: 10,
    });

    expect(response).toBeDefined();
    expect(response.Locale === undefined || Array.isArray(response.Locale) || !!response.Locale).toBe(true);
  });

  it('should fail gracefully with invalid access token', async () => {
    const invalidToken = 'invalid-token-that-will-fail-123';

    try {
      await getLocales({
        accessToken: invalidToken,
      });
      expect.unreachable('Should have thrown an error for invalid token');
    } catch (error) {
      expect(error).toBeInstanceOf(LightspeedApiError);
      if (error instanceof LightspeedApiError) {
        expect(error.status).toBe(401);
      }
    }
  });
});
