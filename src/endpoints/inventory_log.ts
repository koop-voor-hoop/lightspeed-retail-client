import { requestJson } from '../api';
import { inventoryLogsResponseSchema } from '../schemas';
import type { AccessToken, AccountId, InventoryLogsResponse, PaginationParams } from '../types';

type EndpointParams = PaginationParams<never, 'inventoryLogID' | 'itemID' | 'createTime'>;

/** Lists inventory change logs with optional pagination and sorting. */
export const getInventoryLogs = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<InventoryLogsResponse> => {
  return requestJson(
    `Account/${accountID}/InventoryLog.json`,
    {
      accessToken,
      params,
    },
    inventoryLogsResponseSchema,
  );
};
