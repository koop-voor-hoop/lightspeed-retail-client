import { requestJson } from '../api';
import { shopResponseSchema, shopsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  ShopMutation,
  ShopResponse,
  ShopsResponse,
} from '../types';

type EndpointParams = PaginationParams<
  'Contact' | 'ReceiptSetup' | 'TaxCategory' | 'ShelfLocations' | 'Registers' | 'CCGateway' | 'PriceLevel',
  'shopID' | 'timeStamp'
>;

type ShopId = { shopID: `${number}` | number };

/** Lists shops with optional pagination and relation-loading parameters. */
export const getShops = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ShopsResponse> => {
  return requestJson(
    `Account/${accountID}/Shop.json`,
    {
      accessToken,
      params,
    },
    shopsResponseSchema,
  );
};

/** Retrieves a single shop by ID. */
export const getShop = async ({
  accessToken,
  accountID,
  shopID,
}: AccessToken & AccountId & ShopId): Promise<ShopResponse> => {
  return requestJson(
    `Account/${accountID}/Shop/${shopID}.json`,
    {
      accessToken,
    },
    shopResponseSchema,
  );
};

/** Creates a shop. */
export const createShop = async ({
  accessToken,
  accountID,
  ...shop
}: AccessToken & AccountId & ShopMutation): Promise<ShopResponse> => {
  return requestJson(
    `Account/${accountID}/Shop.json`,
    {
      method: 'POST',
      accessToken,
      payload: shop,
    },
    shopResponseSchema,
  );
};

/** Updates an existing shop by ID. */
export const updateShop = async ({
  accessToken,
  accountID,
  shopID,
  ...shop
}: AccessToken & AccountId & ShopId & ShopMutation): Promise<ShopResponse> => {
  return requestJson(
    `Account/${accountID}/Shop/${shopID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: shop,
    },
    shopResponseSchema,
  );
};
