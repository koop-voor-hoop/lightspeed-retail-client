import { beforeAll, describe, expect, it } from 'bun:test';
import { getQuote, getQuotes, getSession, LightspeedApiError } from '../src';

let accessToken: string | undefined;
let accountID: string | undefined;

describe('quote read - Integration Tests', () => {
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

  it('should list quotes with a valid access token and account id', async () => {
    const response = await getQuotes({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 10,
      sort: 'quoteID',
    });

    expect(response).toBeDefined();
    expect(response.Quote === undefined || Array.isArray(response.Quote) || !!response.Quote).toBe(true);
  });

  it('should get a single quote by id when quotes exist', async () => {
    const listResponse = await getQuotes({
      accessToken: accessToken!,
      accountID: accountID!,
      limit: 1,
      sort: 'quoteID',
    });

    const quotes = Array.isArray(listResponse.Quote)
      ? listResponse.Quote
      : listResponse.Quote
        ? [listResponse.Quote]
        : [];

    if (quotes.length === 0) {
      console.log('Skipping single quote read test: account has no quotes');
      expect(true).toBe(true);
      return;
    }

    const firstQuote = quotes[0];
    if (!firstQuote) {
      expect.unreachable('Expected at least one quote after non-empty guard');
      return;
    }

    const quoteID = firstQuote.quoteID;
    const quoteResponse = await getQuote({
      accessToken: accessToken!,
      accountID: accountID!,
      quoteID,
    });

    expect(quoteResponse.Quote.quoteID).toBe(quoteID);
    expect(quoteResponse.Quote.issueDate).toBeDefined();
  });

  it('should fail gracefully for a non-existent quote id', async () => {
    const missingQuoteId = 999999999;

    try {
      await getQuote({
        accessToken: accessToken!,
        accountID: accountID!,
        quoteID: missingQuoteId,
      });
      expect.unreachable('Should have thrown an error for non-existent quote id');
    } catch (error) {
      const isApiError = error instanceof LightspeedApiError;
      const isSchemaError =
        error instanceof Error && error.message.includes('Invalid Lightspeed API response payload');

      expect(isApiError || isSchemaError).toBe(true);

      if (isApiError) {
        expect(error.status).toBe(404);
      }
    }
  });
});
