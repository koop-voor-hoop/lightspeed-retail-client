import { describe, expect, it } from 'bun:test';
import { itemAttributeSetMutationSchema, itemMatrixMutationSchema } from '../src/schemas';

describe('itemMatrixMutationSchema', () => {
  it('accepts a minimal create payload', () => {
    const result = itemMatrixMutationSchema.safeParse({
      description: 'T-Shirt',
      itemAttributeSetID: '1',
    });
    expect(result.success).toBe(true);
  });

  it('coerces itemAttributeSetID and numeric-like fields', () => {
    const result = itemMatrixMutationSchema.safeParse({
      description: 'Chairs',
      itemAttributeSetID: '1',
      tax: 'true',
      defaultCost: '0',
      modelYear: '2021',
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.itemAttributeSetID).toBe(1);
      expect(result.data.tax).toBe(true);
      expect(result.data.defaultCost).toBe(0);
      expect(result.data.modelYear).toBe(2021);
    }
  });

  it('accepts an empty object (all fields optional; update is partial)', () => {
    const result = itemMatrixMutationSchema.safeParse({});
    expect(result.success).toBe(true);
  });

  it('rejects an invalid itemType', () => {
    const result = itemMatrixMutationSchema.safeParse({ itemType: 'not_a_type' });
    expect(result.success).toBe(false);
  });
});

describe('itemAttributeSetMutationSchema', () => {
  it('accepts name with optional attribute names', () => {
    const result = itemAttributeSetMutationSchema.safeParse({
      name: 'Color/Size',
      attributeName1: 'Color',
      attributeName2: 'Size',
    });
    expect(result.success).toBe(true);
  });

  it('requires name', () => {
    const result = itemAttributeSetMutationSchema.safeParse({ attributeName1: 'Color' });
    expect(result.success).toBe(false);
  });
});
