import { describe, expect, it } from 'bun:test';
import z from 'zod';
import {
  booleanLikeSchema,
  integerLikeSchema,
  numberLikeSchema,
  oneOrMany,
  unknownRelationSchema,
} from '../src/schemas/helper.schema';

describe('integerLikeSchema', () => {
  it('accepts an integer number', () => {
    const result = integerLikeSchema.safeParse(5);
    expect(result.success).toBe(true);
    expect(result.data).toBe(5);
  });

  it('coerces an integer string to a number', () => {
    expect(integerLikeSchema.parse('5')).toBe(5);
    expect(integerLikeSchema.parse('-5')).toBe(-5);
  });

  it('rejects a decimal number', () => {
    expect(integerLikeSchema.safeParse(5.5).success).toBe(false);
  });

  it('rejects decimal strings, non-numeric strings, and empty strings', () => {
    expect(integerLikeSchema.safeParse('1.5').success).toBe(false);
    expect(integerLikeSchema.safeParse('abc').success).toBe(false);
    expect(integerLikeSchema.safeParse('').success).toBe(false);
  });
});

describe('numberLikeSchema', () => {
  it('accepts a float number', () => {
    expect(numberLikeSchema.parse(1.5)).toBe(1.5);
  });

  it('coerces numeric strings to numbers', () => {
    expect(numberLikeSchema.parse('1.5')).toBe(1.5);
    expect(numberLikeSchema.parse('-3.25')).toBe(-3.25);
    expect(numberLikeSchema.parse('10')).toBe(10);
  });

  it('rejects malformed numeric strings', () => {
    expect(numberLikeSchema.safeParse('1.2.3').success).toBe(false);
    expect(numberLikeSchema.safeParse('abc').success).toBe(false);
  });
});

describe('booleanLikeSchema', () => {
  it('accepts native booleans', () => {
    expect(booleanLikeSchema.parse(true)).toBe(true);
    expect(booleanLikeSchema.parse(false)).toBe(false);
  });

  it("coerces 'true'/'false' strings to booleans", () => {
    expect(booleanLikeSchema.parse('true')).toBe(true);
    expect(booleanLikeSchema.parse('false')).toBe(false);
  });

  it('rejects other strings and numbers', () => {
    expect(booleanLikeSchema.safeParse('yes').success).toBe(false);
    expect(booleanLikeSchema.safeParse(1).success).toBe(false);
  });
});

describe('oneOrMany', () => {
  const schema = oneOrMany(z.number());

  it('wraps a single value in an array', () => {
    expect(schema.parse(5)).toEqual([5]);
  });

  it('passes an array through unchanged', () => {
    expect(schema.parse([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('passes an empty array through as an empty array', () => {
    expect(schema.parse([])).toEqual([]);
  });

  it('rejects a value that does not match the inner schema', () => {
    expect(schema.safeParse('x').success).toBe(false);
  });
});

describe('unknownRelationSchema', () => {
  it('accepts an arbitrary record', () => {
    const result = unknownRelationSchema.safeParse({ anyKey: 'anyValue', nested: { a: 1 } });
    expect(result.success).toBe(true);
  });

  it('rejects a non-object value', () => {
    expect(unknownRelationSchema.safeParse('not-an-object').success).toBe(false);
  });
});
