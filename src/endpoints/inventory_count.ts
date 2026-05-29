import { requestJson } from '../api';
import { inventoryCountResponseSchema } from '../schemas';
import type { AccessToken, AccountId, InventoryCountMutation, InventoryCountResponse } from '../types';

/** Creates an inventory count for a shop. */
export const createInventoryCount = async ({
  accessToken,
  accountID,
  ...payload
}: AccessToken & AccountId & InventoryCountMutation): Promise<InventoryCountResponse> => {
  return requestJson(
    `Account/${accountID}/InventoryCount.json`,
    {
      method: 'POST',
      accessToken,
      payload,
    },
    inventoryCountResponseSchema,
  );
};
