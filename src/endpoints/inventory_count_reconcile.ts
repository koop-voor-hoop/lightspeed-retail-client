import { requestJson } from '../api';
import { inventoryCountReconcileResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  InventoryCountReconcileMutation,
  InventoryCountReconcileResponse,
} from '../types';

/** Reconciles an inventory count, applying counted quantities to stock levels. */
export const createInventoryCountReconcile = async ({
  accessToken,
  accountID,
  ...payload
}: AccessToken & AccountId & InventoryCountReconcileMutation): Promise<InventoryCountReconcileResponse> => {
  return requestJson(
    `Account/${accountID}/InventoryCountReconcile.json`,
    {
      method: 'POST',
      accessToken,
      payload,
    },
    inventoryCountReconcileResponseSchema,
  );
};
