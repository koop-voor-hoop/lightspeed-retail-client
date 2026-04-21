import { requestJson } from '../api';
import { itemResponseSchema, itemsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ItemMutation,
  ItemResponse,
  ItemsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<
  | 'Category'
  | 'TaxClass'
  | 'ItemAttributes'
  | 'ItemAttributes.ItemAttributeSet'
  | 'Manufacturer'
  | 'Note'
  | 'Images'
  | 'ItemShops'
  | 'ItemVendorNums'
  | 'ItemComponents'
  | 'ItemECommerce'
  | 'TagRelations'
  | 'TagRelations.Tag'
  | 'CustomFieldValues'
  | 'CustomFieldValues.value'
  | 'ItemPrices',
  'itemID' | 'timeStamp' | 'description'
>;

type RelationParams = Pick<EndpointParams, 'load_relations'>;

type ItemId = { itemID: `${number}` | number };

/** Lists items with optional relation loading, sorting, and pagination. */
export const getItems = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ItemsResponse> => {
  return requestJson(
    `Account/${accountID}/Item.json`,
    {
      accessToken,
      params,
    },
    itemsResponseSchema,
  );
};

/** Retrieves a single item by ID. */
export const getItem = async ({
  accessToken,
  accountID,
  itemID,
  ...params
}: AccessToken & AccountId & ItemId & RelationParams): Promise<ItemResponse> => {
  return requestJson(
    `Account/${accountID}/Item/${itemID}.json`,
    {
      accessToken,
      params,
    },
    itemResponseSchema,
  );
};

/** Creates a new item in the account. */
export const createItem = async ({
  accessToken,
  accountID,
  ...item
}: AccessToken & AccountId & ItemMutation): Promise<ItemResponse> => {
  return requestJson(
    `Account/${accountID}/Item.json`,
    {
      method: 'POST',
      accessToken,
      payload: item,
    },
    itemResponseSchema,
  );
};

/** Updates an existing item by ID. */
export const updateItem = async ({
  accessToken,
  accountID,
  itemID,
  ...item
}: AccessToken & AccountId & ItemId & ItemMutation): Promise<ItemResponse> => {
  return requestJson(
    `Account/${accountID}/Item/${itemID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: item,
    },
    itemResponseSchema,
  );
};

/** Archives an item by ID. */
export const deleteItem = async ({
  accessToken,
  accountID,
  itemID,
}: AccessToken & AccountId & ItemId): Promise<ItemResponse> => {
  return requestJson(
    `Account/${accountID}/Item/${itemID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    itemResponseSchema,
  );
};
