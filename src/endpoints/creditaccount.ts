import { requestJson } from '../api';
import { creditAccountResponseSchema, creditAccountsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  CreditAccountMutation,
  CreditAccountResponse,
  CreditAccountsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<
  'Contact' | 'WithdrawalPayments',
  'creditAccountID' | 'timeStamp' | 'customerID'
> & {
  giftCard?: 'true' | 'false';
  customerID?: `${number}` | number;
  code?: string;
};

type CreditAccountId = { creditAccountID: `${number}` | number };

/** Lists credit accounts with optional pagination, relation-loading, and filtering parameters. */
export const getCreditAccounts = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<CreditAccountsResponse> => {
  return requestJson(
    `Account/${accountID}/CreditAccount.json`,
    {
      accessToken,
      params,
    },
    creditAccountsResponseSchema,
  );
};

/** Retrieves a single credit account by ID. */
export const getCreditAccount = async ({
  accessToken,
  accountID,
  creditAccountID,
}: AccessToken & AccountId & CreditAccountId): Promise<CreditAccountResponse> => {
  return requestJson(
    `Account/${accountID}/CreditAccount/${creditAccountID}.json`,
    {
      accessToken,
    },
    creditAccountResponseSchema,
  );
};

/** Creates a credit account. */
export const createCreditAccount = async ({
  accessToken,
  accountID,
  ...creditAccount
}: AccessToken & AccountId & CreditAccountMutation): Promise<CreditAccountResponse> => {
  return requestJson(
    `Account/${accountID}/CreditAccount.json`,
    {
      method: 'POST',
      accessToken,
      payload: creditAccount,
    },
    creditAccountResponseSchema,
  );
};

/** Updates an existing credit account by ID. */
export const updateCreditAccount = async ({
  accessToken,
  accountID,
  creditAccountID,
  ...creditAccount
}: AccessToken & AccountId & CreditAccountId & CreditAccountMutation): Promise<CreditAccountResponse> => {
  return requestJson(
    `Account/${accountID}/CreditAccount/${creditAccountID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: creditAccount,
    },
    creditAccountResponseSchema,
  );
};

/** Archives a credit account by ID. */
export const deleteCreditAccount = async ({
  accessToken,
  accountID,
  creditAccountID,
}: AccessToken & AccountId & CreditAccountId): Promise<CreditAccountResponse> => {
  return requestJson(
    `Account/${accountID}/CreditAccount/${creditAccountID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    creditAccountResponseSchema,
  );
};
