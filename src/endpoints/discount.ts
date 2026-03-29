import { requestJson } from '../api';
import { discountResponseSchema, discountsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  DiscountMutation,
  DiscountResponse,
  DiscountsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, 'discountID' | 'timeStamp'>;

type DiscountId = { discountID: `${number}` | number };

/** Lists discounts with optional pagination and sorting parameters. */
export const getDiscounts = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<DiscountsResponse> => {
  return requestJson(
    `Account/${accountID}/Discount.json`,
    {
      accessToken,
      params,
    },
    discountsResponseSchema,
  );
};

/** Retrieves a single discount by ID. */
export const getDiscount = async ({
  accessToken,
  accountID,
  discountID,
}: AccessToken & AccountId & DiscountId): Promise<DiscountResponse> => {
  return requestJson(
    `Account/${accountID}/Discount/${discountID}.json`,
    {
      accessToken,
    },
    discountResponseSchema,
  );
};

/** Creates a discount. */
export const createDiscount = async ({
  accessToken,
  accountID,
  ...discount
}: AccessToken & AccountId & DiscountMutation): Promise<DiscountResponse> => {
  return requestJson(
    `Account/${accountID}/Discount.json`,
    {
      method: 'POST',
      accessToken,
      payload: discount,
    },
    discountResponseSchema,
  );
};

/** Updates an existing discount by ID. */
export const updateDiscount = async ({
  accessToken,
  accountID,
  discountID,
  ...discount
}: AccessToken & AccountId & DiscountId & DiscountMutation): Promise<DiscountResponse> => {
  return requestJson(
    `Account/${accountID}/Discount/${discountID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: discount,
    },
    discountResponseSchema,
  );
};

/** Archives a discount by ID. */
export const deleteDiscount = async ({
  accessToken,
  accountID,
  discountID,
}: AccessToken & AccountId & DiscountId): Promise<DiscountResponse> => {
  return requestJson(
    `Account/${accountID}/Discount/${discountID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    discountResponseSchema,
  );
};
