import { requestJson } from '../api';
import { itemAttributeSetResponseSchema, itemAttributeSetsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ItemAttributeSetMutation,
  ItemAttributeSetResponse,
  ItemAttributeSetsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, 'itemAttributeSetID'>;

type ItemAttributeSetId = { itemAttributeSetID: `${number}` | number };

/** Lists item attribute sets with optional pagination and sorting parameters. */
export const getItemAttributeSets = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ItemAttributeSetsResponse> => {
  return requestJson(
    `Account/${accountID}/ItemAttributeSet.json`,
    {
      accessToken,
      params,
    },
    itemAttributeSetsResponseSchema,
  );
};

/** Creates an item attribute set. `name` is required. */
export const createItemAttributeSet = async ({
  accessToken,
  accountID,
  ...itemAttributeSet
}: AccessToken & AccountId & ItemAttributeSetMutation): Promise<ItemAttributeSetResponse> => {
  return requestJson(
    `Account/${accountID}/ItemAttributeSet.json`,
    {
      method: 'POST',
      accessToken,
      payload: itemAttributeSet,
    },
    itemAttributeSetResponseSchema,
  );
};

/** Retrieves a single item attribute set by ID. */
export const getItemAttributeSet = async ({
  accessToken,
  accountID,
  itemAttributeSetID,
}: AccessToken & AccountId & ItemAttributeSetId): Promise<ItemAttributeSetResponse> => {
  return requestJson(
    `Account/${accountID}/ItemAttributeSet/${itemAttributeSetID}.json`,
    {
      accessToken,
    },
    itemAttributeSetResponseSchema,
  );
};
