import { describe, expect, it } from 'bun:test';
import {
  itemMatrixMutationSchema,
  itemMatrixSchema,
  itemMutationSchema,
  itemSchema,
  tagsMutationSchema,
} from '../src/schemas';

describe('Tags on items and matrices', () => {
  it('normalizes a single tag returned as a string to an array', () => {
    const result = itemSchema.parse({
      itemID: '1',
      Tags: { '@attributes': { count: '1' }, tag: 'published-shop-5' },
    });
    expect(result.Tags?.tag).toEqual(['published-shop-5']);
  });

  it('keeps several tags returned as an array', () => {
    const result = itemMatrixSchema.parse({
      itemMatrixID: '2',
      Tags: { '@attributes': { count: '2' }, tag: ['zwart', 'published-shop-5'] },
    });
    expect(result.Tags?.tag).toEqual(['zwart', 'published-shop-5']);
  });

  it('accepts a tag list of names on item and matrix writes', () => {
    const Tags = { tag: [{ name: 'zwart' }, { name: 'published-shop-5' }] };
    expect(itemMutationSchema.parse({ Tags }).Tags).toEqual(Tags);
    expect(itemMatrixMutationSchema.parse({ Tags }).Tags).toEqual(Tags);
  });

  it('accepts an empty list, which clears the tags', () => {
    expect(tagsMutationSchema.safeParse({ tag: [] }).success).toBe(true);
  });

  it('rejects a plain string array, which Lightspeed answers with 400', () => {
    expect(tagsMutationSchema.safeParse({ tag: ['zwart'] }).success).toBe(false);
  });
});
