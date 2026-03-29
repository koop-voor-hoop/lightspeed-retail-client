import { requestJson } from '../api';
import { itemShopResponseSchema, itemShopsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ItemShopMutation,
  ItemShopResponse,
  ItemShopsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, 'itemShopID' | 'timeStamp'>;

type ItemShopId = { itemShopID: `${number}` | number };

/** Lists item-shop inventory records with optional sorting and pagination. */
export const getItemShops = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ItemShopsResponse> => {
  return requestJson(
    `Account/${accountID}/ItemShop.json`,
    {
      accessToken,
      params,
    },
    itemShopsResponseSchema,
  );
};

/** Retrieves a single item-shop record by item shop ID. */
export const getItemShop = async ({
  accessToken,
  accountID,
  itemShopID,
}: AccessToken & AccountId & ItemShopId): Promise<ItemShopResponse> => {
  return requestJson(
    `Account/${accountID}/ItemShop/${itemShopID}.json`,
    {
      accessToken,
    },
    itemShopResponseSchema,
  );
};

/** Updates reorder settings for an item-shop record. */
export const updateItemShop = async ({
  accessToken,
  accountID,
  itemShopID,
  ...itemShop
}: AccessToken & AccountId & ItemShopId & ItemShopMutation): Promise<ItemShopResponse> => {
  return requestJson(
    `Account/${accountID}/ItemShop/${itemShopID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: itemShop,
    },
    itemShopResponseSchema,
  );
};
