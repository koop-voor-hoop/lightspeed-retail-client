import { requestJson } from '../api';
import { quoteResponseSchema, quotesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  QuoteMutation,
  QuoteResponse,
  QuotesResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'quoteID'>;

type QuoteId = { quoteID: `${number}` | number };

/** Lists quotes with optional pagination and sorting parameters. */
export const getQuotes = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<QuotesResponse> => {
  return requestJson(
    `Account/${accountID}/Quote.json`,
    {
      accessToken,
      params,
    },
    quotesResponseSchema,
  );
};

/** Retrieves a single quote by ID. */
export const getQuote = async ({
  accessToken,
  accountID,
  quoteID,
}: AccessToken & AccountId & QuoteId): Promise<QuoteResponse> => {
  return requestJson(
    `Account/${accountID}/Quote/${quoteID}.json`,
    {
      accessToken,
    },
    quoteResponseSchema,
  );
};

/** Creates a quote. */
export const createQuote = async ({
  accessToken,
  accountID,
  ...quote
}: AccessToken & AccountId & QuoteMutation): Promise<QuoteResponse> => {
  return requestJson(
    `Account/${accountID}/Quote.json`,
    {
      method: 'POST',
      accessToken,
      payload: quote,
    },
    quoteResponseSchema,
  );
};

/** Updates an existing quote by ID. */
export const updateQuote = async ({
  accessToken,
  accountID,
  quoteID,
  ...quote
}: AccessToken & AccountId & QuoteId & QuoteMutation): Promise<QuoteResponse> => {
  return requestJson(
    `Account/${accountID}/Quote/${quoteID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: quote,
    },
    quoteResponseSchema,
  );
};

/** Archives a quote by ID. */
export const deleteQuote = async ({
  accessToken,
  accountID,
  quoteID,
}: AccessToken & AccountId & QuoteId): Promise<QuoteResponse> => {
  return requestJson(
    `Account/${accountID}/Quote/${quoteID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    quoteResponseSchema,
  );
};
