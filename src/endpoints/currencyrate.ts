import { requestJson } from '../api';
import { currencyRateResponseSchema, currencyRatesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  CurrencyRateMutation,
  CurrencyRateResponse,
  CurrencyRatesResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, never>;

type CurrencyRateId = { currencyRateID: `${number}` | number };

/** Lists currency rates configured for the account. */
export const getCurrencyRates = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<CurrencyRatesResponse> => {
  return requestJson(
    `Account/${accountID}/CurrencyRate.json`,
    {
      accessToken,
      params,
    },
    currencyRatesResponseSchema,
  );
};

/** Retrieves a single currency rate by ID. */
export const getCurrencyRate = async ({
  accessToken,
  accountID,
  currencyRateID,
}: AccessToken & AccountId & CurrencyRateId): Promise<CurrencyRateResponse> => {
  return requestJson(
    `Account/${accountID}/CurrencyRate/${currencyRateID}.json`,
    {
      accessToken,
    },
    currencyRateResponseSchema,
  );
};

/** Creates a currency rate. */
export const createCurrencyRate = async ({
  accessToken,
  accountID,
  ...currencyRate
}: AccessToken & AccountId & CurrencyRateMutation): Promise<CurrencyRateResponse> => {
  return requestJson(
    `Account/${accountID}/CurrencyRate.json`,
    {
      method: 'POST',
      accessToken,
      payload: currencyRate,
    },
    currencyRateResponseSchema,
  );
};

/** Updates an existing currency rate by ID. */
export const updateCurrencyRate = async ({
  accessToken,
  accountID,
  currencyRateID,
  ...currencyRate
}: AccessToken & AccountId & CurrencyRateId & CurrencyRateMutation): Promise<CurrencyRateResponse> => {
  return requestJson(
    `Account/${accountID}/CurrencyRate/${currencyRateID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: currencyRate,
    },
    currencyRateResponseSchema,
  );
};
