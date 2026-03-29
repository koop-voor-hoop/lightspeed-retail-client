import { requestJson } from '../api';
import { itemCustomFieldResponseSchema, itemCustomFieldsResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  ItemCustomFieldMutation,
  ItemCustomFieldResponse,
  ItemCustomFieldsResponse,
  PaginationParams,
} from '../types';

type EndpointParams = PaginationParams<never, 'customFieldID' | 'timeStamp' | 'name'>;

type CustomFieldId = { customFieldID: `${number}` | number };

/** Lists item custom fields with optional filtering, sorting, and pagination. */
export const getItemCustomFields = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ItemCustomFieldsResponse> => {
  return requestJson(
    `Account/${accountID}/Item/CustomField.json`,
    {
      accessToken,
      params,
    },
    itemCustomFieldsResponseSchema,
  );
};

/** Retrieves a single item custom field by custom field ID. */
export const getItemCustomField = async ({
  accessToken,
  accountID,
  customFieldID,
}: AccessToken & AccountId & CustomFieldId): Promise<ItemCustomFieldResponse> => {
  return requestJson(
    `Account/${accountID}/Item/CustomField/${customFieldID}.json`,
    {
      accessToken,
    },
    itemCustomFieldResponseSchema,
  );
};

/** Creates an item custom field. */
export const createItemCustomField = async ({
  accessToken,
  accountID,
  ...customField
}: AccessToken & AccountId & ItemCustomFieldMutation): Promise<ItemCustomFieldResponse> => {
  return requestJson(
    `Account/${accountID}/Item/CustomField.json`,
    {
      method: 'POST',
      accessToken,
      payload: customField,
    },
    itemCustomFieldResponseSchema,
  );
};

/** Updates an existing item custom field by custom field ID. */
export const updateItemCustomField = async ({
  accessToken,
  accountID,
  customFieldID,
  ...customField
}: AccessToken & AccountId & CustomFieldId & ItemCustomFieldMutation): Promise<ItemCustomFieldResponse> => {
  return requestJson(
    `Account/${accountID}/Item/CustomField/${customFieldID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: customField,
    },
    itemCustomFieldResponseSchema,
  );
};

/** Archives an item custom field by custom field ID. */
export const deleteItemCustomField = async ({
  accessToken,
  accountID,
  customFieldID,
}: AccessToken & AccountId & CustomFieldId): Promise<ItemCustomFieldResponse> => {
  return requestJson(
    `Account/${accountID}/Item/CustomField/${customFieldID}.json`,
    {
      method: 'DELETE',
      accessToken,
    },
    itemCustomFieldResponseSchema,
  );
};
