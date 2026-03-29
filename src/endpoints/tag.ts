import { requestJson } from '../api';
import { tagResponseSchema, tagsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  TagMutation,
  TagResponse,
  TagsResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'tagID' | 'name'>;

type TagId = { tagID: `${number}` | number };

/** Lists tags with optional pagination and sorting parameters. */
export const getTags = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<TagsResponse> => {
  return requestJson(
    `Account/${accountID}/Tag.json`,
    {
      accessToken,
      params,
    },
    tagsResponseSchema,
  );
};

/** Retrieves a single tag by ID. */
export const getTag = async ({
  accessToken,
  accountID,
  tagID,
}: AccessToken & AccountId & TagId): Promise<TagResponse> => {
  return requestJson(
    `Account/${accountID}/Tag/${tagID}.json`,
    {
      accessToken,
    },
    tagResponseSchema,
  );
};

/** Creates a tag. */
export const createTag = async ({
  accessToken,
  accountID,
  ...tag
}: AccessToken & AccountId & TagMutation): Promise<TagResponse> => {
  return requestJson(
    `Account/${accountID}/Tag.json`,
    {
      method: 'POST',
      accessToken,
      payload: tag,
    },
    tagResponseSchema,
  );
};

/** Updates an existing tag by ID. */
export const updateTag = async ({
  accessToken,
  accountID,
  tagID,
  ...tag
}: AccessToken & AccountId & TagId & TagMutation): Promise<TagResponse> => {
  return requestJson(
    `Account/${accountID}/Tag/${tagID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: tag,
    },
    tagResponseSchema,
  );
};

/** Deletes a tag by ID. */
export const deleteTag = async ({
  accessToken,
  accountID,
  tagID,
}: AccessToken & AccountId & TagId): Promise<TagResponse> => {
  return requestJson(
    `Account/${accountID}/Tag/${tagID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    tagResponseSchema,
  );
};
