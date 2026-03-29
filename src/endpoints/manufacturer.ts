import { requestJson } from '../api';
import { manufacturerResponseSchema, manufacturersResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ManufacturerMutation,
  ManufacturerResponse,
  ManufacturersResponse,
  PaginationParams,
} from '../types';

type EndpointParams = Omit<
  PaginationParams<never, 'manufacturerID' | 'timeStamp' | 'name'>,
  'load_relations'
>;

type ManufacturerId = { manufacturerID: `${number}` | number };

/** Lists manufacturers with optional pagination and sorting parameters. */
export const getManufacturers = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ManufacturersResponse> => {
  return requestJson(
    `Account/${accountID}/Manufacturer.json`,
    {
      accessToken,
      params,
    },
    manufacturersResponseSchema,
  );
};

/** Retrieves a single manufacturer by ID. */
export const getManufacturer = async ({
  accessToken,
  accountID,
  manufacturerID,
}: AccessToken & AccountId & ManufacturerId): Promise<ManufacturerResponse> => {
  return requestJson(
    `Account/${accountID}/Manufacturer/${manufacturerID}.json`,
    {
      accessToken,
    },
    manufacturerResponseSchema,
  );
};

/** Creates a manufacturer. */
export const createManufacturer = async ({
  accessToken,
  accountID,
  ...manufacturer
}: AccessToken & AccountId & ManufacturerMutation): Promise<ManufacturerResponse> => {
  return requestJson(
    `Account/${accountID}/Manufacturer.json`,
    {
      method: 'POST',
      accessToken,
      payload: manufacturer,
    },
    manufacturerResponseSchema,
  );
};

/** Updates an existing manufacturer by ID. */
export const updateManufacturer = async ({
  accessToken,
  accountID,
  manufacturerID,
  ...manufacturer
}: AccessToken & AccountId & ManufacturerId & ManufacturerMutation): Promise<ManufacturerResponse> => {
  return requestJson(
    `Account/${accountID}/Manufacturer/${manufacturerID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: manufacturer,
    },
    manufacturerResponseSchema,
  );
};
