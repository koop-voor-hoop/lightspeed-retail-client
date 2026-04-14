import { requestJson } from '../api';
import { seasonResponseSchema, seasonsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  SeasonMutation,
  SeasonResponse,
  SeasonsResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'seasonID'>;

type SeasonId = { seasonID: `${number}` | number };

/** Lists seasons for the account. */
export const getSeasons = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<SeasonsResponse> => {
  return requestJson(
    `Account/${accountID}/Season.json`,
    {
      accessToken,
      params,
    },
    seasonsResponseSchema,
  );
};

/** Retrieves a single season by ID. */
export const getSeason = async ({
  accessToken,
  accountID,
  seasonID,
}: AccessToken & AccountId & SeasonId): Promise<SeasonResponse> => {
  return requestJson(
    `Account/${accountID}/Season/${seasonID}.json`,
    {
      accessToken,
    },
    seasonResponseSchema,
  );
};

/** Creates a season. */
export const createSeason = async ({
  accessToken,
  accountID,
  ...season
}: AccessToken & AccountId & SeasonMutation): Promise<SeasonResponse> => {
  return requestJson(
    `Account/${accountID}/Season.json`,
    {
      method: 'POST',
      accessToken,
      payload: season,
    },
    seasonResponseSchema,
  );
};

/** Updates an existing season by ID. */
export const updateSeason = async ({
  accessToken,
  accountID,
  seasonID,
  ...season
}: AccessToken & AccountId & SeasonId & SeasonMutation): Promise<SeasonResponse> => {
  return requestJson(
    `Account/${accountID}/Season/${seasonID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: season,
    },
    seasonResponseSchema,
  );
};

/** Deletes a season by ID. */
export const deleteSeason = async ({
  accessToken,
  accountID,
  seasonID,
}: AccessToken & AccountId & SeasonId): Promise<SeasonResponse> => {
  return requestJson(
    `Account/${accountID}/Season/${seasonID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    seasonResponseSchema,
  );
};
