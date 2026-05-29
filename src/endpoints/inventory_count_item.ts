import { requestJson } from '../api';
import { inventoryCountItemResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  InventoryCountItemMutation,
  InventoryCountItemResponse,
} from '../types';

/** Adds an item with a counted quantity to an inventory count. */
export const createInventoryCountItem = async ({
  accessToken,
  accountID,
  ...payload
}: AccessToken & AccountId & InventoryCountItemMutation): Promise<InventoryCountItemResponse> => {
  return requestJson(
    `Account/${accountID}/InventoryCountItem.json`,
    {
      method: 'POST',
      accessToken,
      payload,
    },
    inventoryCountItemResponseSchema,
  );
};
