import { describe, expect, it } from 'bun:test';
import { inventoryCountItemMutationSchema } from '../src/schemas/inventory_count_item.schema';

describe('inventoryCountItemMutationSchema', () => {
  it('accepts a fully specified payload', () => {
    const result = inventoryCountItemMutationSchema.safeParse({
      qty: 3,
      inventoryCountID: 1,
      itemID: 2,
      employeeID: 4,
    });
    expect(result.success).toBe(true);
  });

  it('coerces numeric-like string fields to numbers', () => {
    const result = inventoryCountItemMutationSchema.parse({
      qty: '3',
      inventoryCountID: '1',
      itemID: '2',
      employeeID: '4',
    });
    expect(result).toEqual({ qty: 3, inventoryCountID: 1, itemID: 2, employeeID: 4 });
  });

  it('rejects a payload missing required keys', () => {
    expect(inventoryCountItemMutationSchema.safeParse({ qty: 3, itemID: 2 }).success).toBe(false);
  });
});
