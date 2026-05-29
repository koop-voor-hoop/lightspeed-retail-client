import { describe, expect, it } from 'bun:test';
import { itemShopInItemMutationSchema } from '../src/schemas/item_shop.schema';

describe('itemShopInItemMutationSchema', () => {
  it('accepts itemShopID with qoh', () => {
    const result = itemShopInItemMutationSchema.safeParse({ itemShopID: 4, qoh: 3 });
    expect(result.success).toBe(true);
  });

  it('accepts shopID with qoh', () => {
    const result = itemShopInItemMutationSchema.safeParse({ shopID: 2, qoh: 1 });
    expect(result.success).toBe(true);
  });

  it('rejects empty object', () => {
    const result = itemShopInItemMutationSchema.safeParse({});
    expect(result.success).toBe(false);
  });

  it('rejects qoh without itemShopID or shopID', () => {
    const result = itemShopInItemMutationSchema.safeParse({ qoh: 1 });
    expect(result.success).toBe(false);
  });
});
