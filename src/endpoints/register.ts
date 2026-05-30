import { requestJson } from '../api';
import { registerResponseSchema, registersResponseSchema } from '../schemas';
import type { AccessToken, AccountId, PaginationParams, RegisterResponse, RegistersResponse } from '../types';

type EndpointParams = PaginationParams<never, 'registerID'>;

type RegisterId = { registerID: `${number}` | number };

/** Lists registers with optional pagination and sorting parameters. */
export const getRegisters = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<RegistersResponse> => {
  return requestJson(
    `Account/${accountID}/Register.json`,
    {
      accessToken,
      params,
    },
    registersResponseSchema,
  );
};

/** Retrieves a single register by ID. */
export const getRegister = async ({
  accessToken,
  accountID,
  registerID,
}: AccessToken & AccountId & RegisterId): Promise<RegisterResponse> => {
  return requestJson(
    `Account/${accountID}/Register/${registerID}.json`,
    {
      accessToken,
    },
    registerResponseSchema,
  );
};
