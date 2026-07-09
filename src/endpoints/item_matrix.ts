import { requestJson } from '../api';
import { itemMatricesResponseSchema, itemMatrixResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  FilterParams,
  ItemMatricesResponse,
  ItemMatrixMutation,
  ItemMatrixResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<
  | 'Items'
  | 'Images'
  | 'ItemAttributeSet'
  | 'Category'
  | 'TaxClass'
  | 'Department'
  | 'Manufacturer'
  | 'Season'
  | 'TagRelations'
  | 'TagRelations.Tag',
  'itemMatrixID' | 'timeStamp' | 'description'
> &
  FilterParams<'itemMatrixID' | 'description' | 'itemAttributeSetID' | 'categoryID' | 'manufacturerID'>;

export type ItemMatrixListParams = EndpointParams;

type RelationParams = Pick<EndpointParams, 'load_relations'>;

type ItemMatrixId = { itemMatrixID: `${number}` | number };

type ItemMatrixCreate = ItemMatrixMutation &
  Required<Pick<ItemMatrixMutation, 'description' | 'itemAttributeSetID'>>;

/** Lists item matrices with optional relation loading, sorting, and pagination. */
export const getItemMatrices = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ItemMatricesResponse> => {
  return requestJson(
    `Account/${accountID}/ItemMatrix.json`,
    {
      accessToken,
      params,
    },
    itemMatricesResponseSchema,
  );
};

/** Retrieves a single item matrix by ID with optional relations. */
export const getItemMatrix = async ({
  accessToken,
  accountID,
  itemMatrixID,
  ...params
}: AccessToken & AccountId & ItemMatrixId & RelationParams): Promise<ItemMatrixResponse> => {
  return requestJson(
    `Account/${accountID}/ItemMatrix/${itemMatrixID}.json`,
    {
      accessToken,
      params,
    },
    itemMatrixResponseSchema,
  );
};

/** Creates an item matrix. `description` and `itemAttributeSetID` are required. */
export const createItemMatrix = async ({
  accessToken,
  accountID,
  ...itemMatrix
}: AccessToken & AccountId & ItemMatrixCreate): Promise<ItemMatrixResponse> => {
  return requestJson(
    `Account/${accountID}/ItemMatrix.json`,
    {
      method: 'POST',
      accessToken,
      payload: itemMatrix,
    },
    itemMatrixResponseSchema,
  );
};

/** Updates an existing item matrix by ID. */
export const updateItemMatrix = async ({
  accessToken,
  accountID,
  itemMatrixID,
  ...itemMatrix
}: AccessToken & AccountId & ItemMatrixId & ItemMatrixMutation): Promise<ItemMatrixResponse> => {
  return requestJson(
    `Account/${accountID}/ItemMatrix/${itemMatrixID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: itemMatrix,
    },
    itemMatrixResponseSchema,
  );
};

/** Archives an item matrix by ID. All items in the matrix are also archived. */
export const deleteItemMatrix = async ({
  accessToken,
  accountID,
  itemMatrixID,
}: AccessToken & AccountId & ItemMatrixId): Promise<ItemMatrixResponse> => {
  return requestJson(
    `Account/${accountID}/ItemMatrix/${itemMatrixID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    itemMatrixResponseSchema,
  );
};
