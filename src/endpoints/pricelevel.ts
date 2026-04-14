import { requestJson } from '../api';
import { priceLevelResponseSchema, priceLevelsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  PriceLevelMutation,
  PriceLevelResponse,
  PriceLevelsResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'priceLevelID' | 'orderLineID' | 'name'>;

type PriceLevelId = { priceLevelID: `${number}` | number };

/** Lists price levels with optional pagination and sorting parameters. */
export const getPriceLevels = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<PriceLevelsResponse> => {
  return requestJson(
    `Account/${accountID}/PriceLevel.json`,
    {
      accessToken,
      params,
    },
    priceLevelsResponseSchema,
  );
};

/** Retrieves a single price level by ID. */
export const getPriceLevel = async ({
  accessToken,
  accountID,
  priceLevelID,
}: AccessToken & AccountId & PriceLevelId): Promise<PriceLevelResponse> => {
  return requestJson(
    `Account/${accountID}/PriceLevel/${priceLevelID}.json`,
    {
      accessToken,
    },
    priceLevelResponseSchema,
  );
};

/** Updates an existing price level by ID. */
export const updatePriceLevel = async ({
  accessToken,
  accountID,
  priceLevelID,
  ...priceLevel
}: AccessToken & AccountId & PriceLevelId & PriceLevelMutation): Promise<PriceLevelResponse> => {
  return requestJson(
    `Account/${accountID}/PriceLevel/${priceLevelID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: priceLevel,
    },
    priceLevelResponseSchema,
  );
};
