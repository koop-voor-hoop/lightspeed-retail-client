import { describe, expect, it } from 'bun:test';
import { inventoryCountReconcileMutationSchema } from '../src/schemas/inventory_count_reconcile.schema';

describe('inventoryCountReconcileMutationSchema', () => {
  it('accepts inventoryCountID alone (itemID is optional)', () => {
    const result = inventoryCountReconcileMutationSchema.safeParse({ inventoryCountID: 1 });
    expect(result.success).toBe(true);
  });

  it('accepts inventoryCountID together with itemID', () => {
    const result = inventoryCountReconcileMutationSchema.safeParse({ inventoryCountID: 1, itemID: 2 });
    expect(result.success).toBe(true);
  });

  it('coerces numeric-like string fields to numbers', () => {
    const result = inventoryCountReconcileMutationSchema.parse({ inventoryCountID: '1', itemID: '2' });
    expect(result).toEqual({ inventoryCountID: 1, itemID: 2 });
  });

  it('rejects a payload missing inventoryCountID', () => {
    expect(inventoryCountReconcileMutationSchema.safeParse({ itemID: 2 }).success).toBe(false);
  });
});
