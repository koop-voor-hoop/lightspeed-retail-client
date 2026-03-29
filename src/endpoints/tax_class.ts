import { requestJson } from '../api';
import { taxClassesResponseSchema, taxClassResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  TaxClassesResponse,
  TaxClassMutation,
  TaxClassResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'taxClassID' | 'timeStamp'>;

type TaxClassId = { taxClassID: `${number}` | number };

/** Lists tax classes with optional pagination and sorting parameters. */
export const getTaxClasses = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<TaxClassesResponse> => {
  return requestJson(
    `Account/${accountID}/TaxClass.json`,
    {
      accessToken,
      params,
    },
    taxClassesResponseSchema,
  );
};

/** Retrieves a single tax class by ID. */
export const getTaxClass = async ({
  accessToken,
  accountID,
  taxClassID,
}: AccessToken & AccountId & TaxClassId): Promise<TaxClassResponse> => {
  return requestJson(
    `Account/${accountID}/TaxClass/${taxClassID}.json`,
    {
      accessToken,
    },
    taxClassResponseSchema,
  );
};

/** Creates a tax class. */
export const createTaxClass = async ({
  accessToken,
  accountID,
  ...taxClass
}: AccessToken & AccountId & TaxClassMutation): Promise<TaxClassResponse> => {
  return requestJson(
    `Account/${accountID}/TaxClass.json`,
    {
      method: 'POST',
      accessToken,
      payload: taxClass,
    },
    taxClassResponseSchema,
  );
};

/** Updates an existing tax class by ID. */
export const updateTaxClass = async ({
  accessToken,
  accountID,
  taxClassID,
  ...taxClass
}: AccessToken & AccountId & TaxClassId & TaxClassMutation): Promise<TaxClassResponse> => {
  return requestJson(
    `Account/${accountID}/TaxClass/${taxClassID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: taxClass,
    },
    taxClassResponseSchema,
  );
};

/** Deletes a tax class by ID. */
export const deleteTaxClass = async ({
  accessToken,
  accountID,
  taxClassID,
}: AccessToken & AccountId & TaxClassId): Promise<TaxClassResponse> => {
  return requestJson(
    `Account/${accountID}/TaxClass/${taxClassID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    taxClassResponseSchema,
  );
};
