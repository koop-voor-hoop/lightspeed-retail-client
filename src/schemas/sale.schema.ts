import z from 'zod';
import { attributesSchema } from './attributes.schema';
import {
  booleanLikeSchema,
  integerLikeSchema,
  numberLikeSchema,
  oneOrMany,
  unknownRelationSchema,
} from './helper.schema';

export const saleLineMutationSchema = z.object({
  itemID: integerLikeSchema.optional(),
  itemCode: z.string().optional(),
  unitQuantity: integerLikeSchema.optional(),
  unitPrice: numberLikeSchema.optional(),
  discountAmount: numberLikeSchema.optional(),
  discountPercent: numberLikeSchema.optional(),
  parentSaleLineID: integerLikeSchema.optional(),
});

export const saleLinesMutationSchema = z.object({
  SaleLine: z.union([saleLineMutationSchema, z.array(saleLineMutationSchema)]),
});

export const salePaymentMutationSchema = z.object({
  amount: numberLikeSchema.optional(),
  paymentTypeID: integerLikeSchema.optional(),
  tipAmount: numberLikeSchema.optional(),
});

export const salePaymentsMutationSchema = z.object({
  SalePayment: z.union([salePaymentMutationSchema, z.array(salePaymentMutationSchema)]),
});

export const saleLineSchema = saleLineMutationSchema.extend({
  saleLineID: integerLikeSchema.optional(),
  saleID: integerLikeSchema.optional(),
  calcTotal: numberLikeSchema.optional(),
  calcSubtotal: numberLikeSchema.optional(),
  displayableSubtotal: numberLikeSchema.optional(),
  unitPrice: numberLikeSchema.optional(),
  normalUnitPrice: numberLikeSchema.optional(),
});

export const saleLinesSchema = z.object({
  SaleLine: oneOrMany(saleLineSchema).optional(),
});

export const salePaymentSchema = salePaymentMutationSchema.extend({
  salePaymentID: integerLikeSchema.optional(),
  saleID: integerLikeSchema.optional(),
});

export const salePaymentsSchema = z.object({
  SalePayment: oneOrMany(salePaymentSchema).optional(),
});

export const saleSchema = z.object({
  saleID: integerLikeSchema,
  timeStamp: z.string().optional(),
  completed: booleanLikeSchema.optional(),
  archived: booleanLikeSchema.optional(),
  voided: booleanLikeSchema.optional(),
  enablePromotions: booleanLikeSchema.optional(),
  isTaxInclusive: booleanLikeSchema.optional(),
  createTime: z.string().optional(),
  updateTime: z.string().optional(),
  updatetime: z.string().optional(),
  completeTime: z.string().optional(),
  referenceNumber: z.string().optional(),
  referenceNumberSource: z.string().optional(),
  tax1Rate: numberLikeSchema.optional(),
  tax2Rate: numberLikeSchema.optional(),
  change: numberLikeSchema.optional(),
  tipEnabled: booleanLikeSchema.optional(),
  receiptPreference: z.string().optional(),
  displayableSubtotal: numberLikeSchema.optional(),
  ticketNumber: z.string().optional(),
  calcDiscount: numberLikeSchema.optional(),
  calcTotal: numberLikeSchema.optional(),
  calcSubtotal: numberLikeSchema.optional(),
  calcTaxable: numberLikeSchema.optional(),
  calcNonTaxable: numberLikeSchema.optional(),
  calcAvgCost: numberLikeSchema.optional(),
  calcFIFOCost: numberLikeSchema.optional(),
  calcTax1: numberLikeSchema.optional(),
  calcTax2: numberLikeSchema.optional(),
  calcPayments: numberLikeSchema.optional(),
  calcTips: numberLikeSchema.optional(),
  total: numberLikeSchema.optional(),
  totalDue: numberLikeSchema.optional(),
  displayableTotal: numberLikeSchema.optional(),
  balance: numberLikeSchema.optional(),
  customerID: integerLikeSchema.optional(),
  discountID: integerLikeSchema.optional(),
  employeeID: integerLikeSchema.optional(),
  tipEmployeeID: integerLikeSchema.optional(),
  quoteID: integerLikeSchema.optional(),
  registerID: integerLikeSchema.optional(),
  shipToID: integerLikeSchema.optional(),
  shopID: integerLikeSchema.optional(),
  taxCategoryID: integerLikeSchema.optional(),
  SaleLines: saleLinesSchema.optional(),
  SalePayments: salePaymentsSchema.optional(),
  Shop: unknownRelationSchema.optional(),
  Customer: unknownRelationSchema.optional(),
  TaxCategory: unknownRelationSchema.optional(),
});

export const saleResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Sale: saleSchema,
});

export const salesResponseSchema = z.object({
  '@attributes': attributesSchema.optional(),
  Sale: oneOrMany(saleSchema).optional(),
});

export const saleMutationSchema = z.object({
  employeeID: integerLikeSchema.optional(),
  registerID: integerLikeSchema.optional(),
  shopID: integerLikeSchema.optional(),
  customerID: integerLikeSchema.optional(),
  completed: booleanLikeSchema.optional(),
  enablePromotions: booleanLikeSchema.optional(),
  referenceNumber: z.string().optional(),
  referenceNumberSource: z.string().optional(),
  change: numberLikeSchema.optional(),
  tipEnabled: booleanLikeSchema.optional(),
  tipEmployeeID: integerLikeSchema.optional(),
  taxCategoryID: integerLikeSchema.optional(),
  SaleLines: saleLinesMutationSchema.optional(),
  SalePayments: salePaymentsMutationSchema.optional(),
});
