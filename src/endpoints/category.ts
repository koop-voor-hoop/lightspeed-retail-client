import { requestJson } from '../api';
import { categoriesResponseSchema, categoryResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  CategoriesResponse,
  CategoryMutation,
  CategoryResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<'Parent', 'categoryID' | 'timeStamp' | 'leftNode' | 'rightNode'>;

type CategoryId = { categoryID: `${number}` | number };

/** Lists categories with optional pagination, sorting, and relation-loading parameters. */
export const getCategories = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<CategoriesResponse> => {
  return requestJson(
    `Account/${accountID}/Category.json`,
    {
      accessToken,
      params,
    },
    categoriesResponseSchema,
  );
};

/** Retrieves a single category by ID. */
export const getCategory = async ({
  accessToken,
  accountID,
  categoryID,
}: AccessToken & AccountId & CategoryId): Promise<CategoryResponse> => {
  return requestJson(
    `Account/${accountID}/Category/${categoryID}.json`,
    {
      accessToken,
    },
    categoryResponseSchema,
  );
};

/** Creates a category. */
export const createCategory = async ({
  accessToken,
  accountID,
  ...category
}: AccessToken & AccountId & CategoryMutation): Promise<CategoryResponse> => {
  return requestJson(
    `Account/${accountID}/Category.json`,
    {
      method: 'POST',
      accessToken,
      payload: category,
    },
    categoryResponseSchema,
  );
};

/** Updates an existing category by ID. */
export const updateCategory = async ({
  accessToken,
  accountID,
  categoryID,
  ...category
}: AccessToken & AccountId & CategoryId & CategoryMutation): Promise<CategoryResponse> => {
  return requestJson(
    `Account/${accountID}/Category/${categoryID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: category,
    },
    categoryResponseSchema,
  );
};

/** Archives a category by ID. */
export const deleteCategory = async ({
  accessToken,
  accountID,
  categoryID,
}: AccessToken & AccountId & CategoryId): Promise<CategoryResponse> => {
  return requestJson(
    `Account/${accountID}/Category/${categoryID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    categoryResponseSchema,
  );
};
