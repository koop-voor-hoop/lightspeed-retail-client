import { requestJson } from '../api';
import { vendorResponseSchema, vendorsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  VendorMutation,
  VendorResponse,
  VendorsResponse,
} from '../types';

type EndpointParams = PaginationParams<'Contact', 'vendorID' | 'timeStamp' | 'name'>;

type RelationParams = Pick<EndpointParams, 'load_relations'>;

type VendorId = { vendorID: `${number}` | number };

/** Lists vendors with optional pagination and relation-loading parameters. */
export const getVendors = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<VendorsResponse> => {
  return requestJson(
    `Account/${accountID}/Vendor.json`,
    {
      accessToken,
      params,
    },
    vendorsResponseSchema,
  );
};

/** Retrieves a single vendor by its ID. */
export const getVendor = async ({
  accessToken,
  accountID,
  vendorID,
  ...params
}: AccessToken & AccountId & VendorId & RelationParams): Promise<VendorResponse> => {
  return requestJson(
    `Account/${accountID}/Vendor/${vendorID}.json`,
    {
      accessToken,
      params,
    },
    vendorResponseSchema,
  );
};

/** Creates a vendor. */
export const createVendor = async ({
  accessToken,
  accountID,
  ...vendor
}: AccessToken & AccountId & VendorMutation): Promise<VendorResponse> => {
  return requestJson(
    `Account/${accountID}/Vendor.json`,
    {
      method: 'POST',
      accessToken,
      payload: vendor,
    },
    vendorResponseSchema,
  );
};

/** Updates an existing vendor by ID. */
export const updateVendor = async ({
  accessToken,
  accountID,
  vendorID,
  ...vendor
}: AccessToken & AccountId & VendorId & VendorMutation): Promise<VendorResponse> => {
  return requestJson(
    `Account/${accountID}/Vendor/${vendorID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: vendor,
    },
    vendorResponseSchema,
  );
};

/** Archives a vendor by ID. */
export const deleteVendor = async ({
  accessToken,
  accountID,
  vendorID,
}: AccessToken & AccountId & VendorId): Promise<VendorResponse> => {
  return requestJson(
    `Account/${accountID}/Vendor/${vendorID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    vendorResponseSchema,
  );
};
