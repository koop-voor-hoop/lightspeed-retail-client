import { requestJson } from '../api';
import { processingFeeResponseSchema, processingFeesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  ProcessingFeeResponse,
  ProcessingFeesResponse,
} from '../types';

type EndpointParams = PaginationParams<never, 'salePaymentProcessingFeeID'> & {
  salePaymentID?: `${number}` | number;
};

type ProcessingFeeId = { processingFeeID: `${number}` | number };

/** Lists processing fees with optional pagination, sorting, and sale payment filtering. */
export const getProcessingFees = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<ProcessingFeesResponse> => {
  return requestJson(
    `Account/${accountID}/ProcessingFee.json`,
    {
      accessToken,
      params,
    },
    processingFeesResponseSchema,
  );
};

/** Retrieves a single processing fee by ID. */
export const getProcessingFee = async ({
  accessToken,
  accountID,
  processingFeeID,
}: AccessToken & AccountId & ProcessingFeeId): Promise<ProcessingFeeResponse> => {
  return requestJson(
    `Account/${accountID}/ProcessingFee/${processingFeeID}.json`,
    {
      accessToken,
    },
    processingFeeResponseSchema,
  );
};
