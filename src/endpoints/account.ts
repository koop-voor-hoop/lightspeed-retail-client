import { requestJson } from '../api';
import { accountResponseSchema, accountsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  AccountMutation,
  AccountResponse,
  AccountsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, never>;

/** Lists accounts visible to the authenticated token. */
export const getAccounts = async ({
  accessToken,
  ...params
}: AccessToken & EndpointParams): Promise<AccountsResponse> => {
  return requestJson(
    'Account.json',
    {
      accessToken,
      params,
    },
    accountsResponseSchema,
  );
};

/** Retrieves a single account by account ID. */
export const getAccount = async ({
  accessToken,
  accountID,
}: AccessToken & AccountId): Promise<AccountResponse> => {
  return requestJson(
    `Account/${accountID}.json`,
    {
      accessToken,
    },
    accountResponseSchema,
  );
};

/** Updates an account by account ID. */
export const updateAccount = async ({
  accessToken,
  accountID,
  ...account
}: AccessToken & AccountId & AccountMutation): Promise<AccountResponse> => {
  return requestJson(
    `Account/${accountID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: account,
    },
    accountResponseSchema,
  );
};
