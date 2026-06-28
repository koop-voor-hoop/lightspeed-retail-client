import { describe, expect, it } from 'bun:test';
import { inventoryCountMutationSchema } from '../src/schemas/inventory_count.schema';

describe('inventoryCountMutationSchema', () => {
  it('accepts a payload with shopID and optional name', () => {
    const result = inventoryCountMutationSchema.safeParse({ name: 'Spring count', shopID: 1 });
    expect(result.success).toBe(true);
  });

  it('accepts shopID without a name', () => {
    const result = inventoryCountMutationSchema.safeParse({ shopID: 1 });
    expect(result.success).toBe(true);
  });

  it('coerces a string shopID to a number', () => {
    const result = inventoryCountMutationSchema.parse({ shopID: '5' });
    expect(result.shopID).toBe(5);
  });

  it('rejects a payload missing shopID', () => {
    expect(inventoryCountMutationSchema.safeParse({ name: 'No shop' }).success).toBe(false);
  });
});
