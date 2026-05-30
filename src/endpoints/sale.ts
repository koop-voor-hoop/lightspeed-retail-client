import { requestJson } from '../api';
import { saleResponseSchema, salesResponseSchema } from '../schemas';
import type {
  AccessToken,
  AccountId,
  PaginationParams,
  SaleMutation,
  SaleResponse,
  SalesResponse,
} from '../types';

type EndpointParams = PaginationParams<
  | 'SaleLines'
  | 'SaleLines.Item'
  | 'SaleLines.Discount'
  | 'SaleLines.TaxClass'
  | 'SaleLines.Note'
  | 'SaleLines.InventorySales'
  | 'SaleNotes'
  | 'SalePayments'
  | 'SalePayments.PaymentType'
  | 'Customer'
  | 'Shop'
  | 'TaxCategory'
  | 'Discount'
  | 'Quote',
  'saleID' | 'timeStamp' | 'completeTime' | 'createTime'
>;

type RelationParams = Pick<EndpointParams, 'load_relations'>;

type SaleId = { saleID: `${number}` | number };

/** Lists sales with optional pagination, sorting, and relation-loading parameters. */
export const getSales = async ({
  accessToken,
  accountID,
  ...params
}: AccessToken & AccountId & EndpointParams): Promise<SalesResponse> => {
  return requestJson(
    `Account/${accountID}/Sale.json`,
    {
      accessToken,
      params,
    },
    salesResponseSchema,
  );
};

/** Retrieves a single sale by ID. */
export const getSale = async ({
  accessToken,
  accountID,
  saleID,
  ...params
}: AccessToken & AccountId & SaleId & RelationParams): Promise<SaleResponse> => {
  return requestJson(
    `Account/${accountID}/Sale/${saleID}.json`,
    {
      accessToken,
      params,
    },
    saleResponseSchema,
  );
};

/** Creates a sale. */
export const createSale = async ({
  accessToken,
  accountID,
  ...sale
}: AccessToken & AccountId & SaleMutation): Promise<SaleResponse> => {
  return requestJson(
    `Account/${accountID}/Sale.json`,
    {
      method: 'POST',
      accessToken,
      payload: sale,
    },
    saleResponseSchema,
  );
};

/** Updates an existing sale by ID. */
export const updateSale = async ({
  accessToken,
  accountID,
  saleID,
  ...sale
}: AccessToken & AccountId & SaleId & SaleMutation): Promise<SaleResponse> => {
  return requestJson(
    `Account/${accountID}/Sale/${saleID}.json`,
    {
      method: 'PUT',
      accessToken,
      payload: sale,
    },
    saleResponseSchema,
  );
};
