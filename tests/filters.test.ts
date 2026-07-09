import { describe, expect, it } from 'bun:test';
import { escapeFilterValue, inList, like, notEqual, notLike, or } from '../src/filters';

describe('escapeFilterValue', () => {
  it('escapes characters the query parser treats as operators', () => {
    expect(escapeFilterValue('50%|a,b=c')).toBe('50%25%7Ca%2Cb%3Dc');
  });

  it('leaves plain values untouched', () => {
    expect(escapeFilterValue('Blue Shirt_XL')).toBe('Blue Shirt_XL');
  });
});

describe('like', () => {
  it('wraps the value in wildcards with the ~ operator', () => {
    expect(like('shirt')).toBe('~,%shirt%');
  });

  it('escapes special characters inside the term', () => {
    expect(like('100% cotton')).toBe('~,%100%25 cotton%');
  });
});

describe('notLike', () => {
  it('wraps the value in wildcards with the !~ operator', () => {
    expect(notLike('shirt')).toBe('!~,%shirt%');
  });
});

describe('notEqual', () => {
  it('formats numbers', () => {
    expect(notEqual(0)).toBe('!=,0');
  });

  it('escapes string values', () => {
    expect(notEqual('a,b')).toBe('!=,a%2Cb');
  });
});

describe('inList', () => {
  it('formats a JSON-style ID list', () => {
    expect(inList([1, 2, 3])).toBe('IN,[1,2,3]');
  });

  it('escapes string values', () => {
    expect(inList(['a,b', 'c'])).toBe('IN,[a%2Cb,c]');
  });

  it('throws on an empty list', () => {
    expect(() => inList([])).toThrow('inList requires at least one value');
  });

  it('throws above the 100-value API cap', () => {
    const values = Array.from({ length: 101 }, (_, index) => index);
    expect(() => inList(values)).toThrow('at most 100 values');
  });
});

describe('or', () => {
  it('joins field expressions with pipes', () => {
    expect(or(['description', like('foo')], ['upc', like('foo')])).toBe('description=~,%foo%|upc=~,%foo%');
  });

  it('accepts raw exact-match expressions', () => {
    expect(or(['description', 'foo'], ['description', 'bar'])).toBe('description=foo|description=bar');
  });

  it('throws without clauses', () => {
    expect(() => or()).toThrow('or requires at least one clause');
  });
});
