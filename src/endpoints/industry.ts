import { requestJson } from '../api';
import { industriesResponseSchema, industryResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  IndustriesResponse,
  IndustryMutation,
  IndustryResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, 'industryID'>;

type IndustryId = { industryID: `${number}` | number };

/** Lists industries available for the account. */
export const getIndustries = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<IndustriesResponse> => {
  return requestJson(
    `Account/${accountID}/Industry.json`,
    {
      accessToken,
      params,
    },
    industriesResponseSchema,
  );
};

/** Retrieves a single industry by ID. */
export const getIndustry = async ({
  accessToken,
  accountID,
  industryID,
}: AccessToken & AccountId & IndustryId): Promise<IndustryResponse> => {
  return requestJson(
    `Account/${accountID}/Industry/${industryID}.json`,
    {
      accessToken,
    },
    industryResponseSchema,
  );
};

/** Updates an industry by ID. */
export const updateIndustry = async ({
  accessToken,
  accountID,
  industryID,
  ...industry
}: AccessToken & AccountId & IndustryId & IndustryMutation): Promise<IndustryResponse> => {
  return requestJson(
    `Account/${accountID}/Industry/${industryID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: industry,
    },
    industryResponseSchema,
  );
};
