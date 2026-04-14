import { requestJson } from '../api';
import { paymentTypeResponseSchema, paymentTypesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  PaymentTypeMutation,
  PaymentTypeResponse,
  PaymentTypesResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'paymentTypeID' | 'timeStamp'>;

type PaymentTypeId = { paymentTypeID: `${number}` | number };

/** Lists payment types with optional pagination and sorting parameters. */
export const getPaymentTypes = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<PaymentTypesResponse> => {
  return requestJson(
    `Account/${accountID}/PaymentType.json`,
    {
      accessToken,
      params,
    },
    paymentTypesResponseSchema,
  );
};

/** Retrieves a single payment type by ID. */
export const getPaymentType = async ({
  accessToken,
  accountID,
  paymentTypeID,
}: AccessToken & AccountId & PaymentTypeId): Promise<PaymentTypeResponse> => {
  return requestJson(
    `Account/${accountID}/PaymentType/${paymentTypeID}.json`,
    {
      accessToken,
    },
    paymentTypeResponseSchema,
  );
};

/** Creates a payment type. */
export const createPaymentType = async ({
  accessToken,
  accountID,
  ...paymentType
}: AccessToken & AccountId & PaymentTypeMutation): Promise<PaymentTypeResponse> => {
  return requestJson(
    `Account/${accountID}/PaymentType.json`,
    {
      method: 'POST',
      accessToken,
      payload: paymentType,
    },
    paymentTypeResponseSchema,
  );
};

/** Updates an existing payment type by ID. */
export const updatePaymentType = async ({
  accessToken,
  accountID,
  paymentTypeID,
  ...paymentType
}: AccessToken & AccountId & PaymentTypeId & PaymentTypeMutation): Promise<PaymentTypeResponse> => {
  return requestJson(
    `Account/${accountID}/PaymentType/${paymentTypeID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: paymentType,
    },
    paymentTypeResponseSchema,
  );
};

/** Archives a payment type by ID. */
export const deletePaymentType = async ({
  accessToken,
  accountID,
  paymentTypeID,
}: AccessToken & AccountId & PaymentTypeId): Promise<PaymentTypeResponse> => {
  return requestJson(
    `Account/${accountID}/PaymentType/${paymentTypeID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    paymentTypeResponseSchema,
  );
};
