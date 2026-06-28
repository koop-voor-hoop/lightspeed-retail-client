import { describe, expect, it } from 'bun:test';
import { buildAuthorizationUrl } from '../src/auth';

describe('buildAuthorizationUrl', () => {
  it('builds an authorization URL on the OAuth host with the expected query params', () => {
    const url = buildAuthorizationUrl({
      clientId: 'my-client-id',
      scope: 'employee:all',
      state: 'cli-test',
    });

    expect(url.startsWith('https://us.merchantos.com/auth/oauth/authorize?')).toBe(true);

    const params = new URL(url).searchParams;
    expect(params.get('response_type')).toBe('code');
    expect(params.get('client_id')).toBe('my-client-id');
    expect(params.get('scope')).toBe('employee:all');
    expect(params.get('state')).toBe('cli-test');
  });

  it('url-encodes special characters in the scope', () => {
    const url = buildAuthorizationUrl({
      clientId: 'id',
      scope: 'employee:all systems:go',
      state: 'state with spaces',
    });

    // Raw query string keeps values percent-encoded...
    expect(url).toContain('scope=employee%3Aall+systems%3Ago');
    // ...and round-trips back to the original values when decoded.
    const params = new URL(url).searchParams;
    expect(params.get('scope')).toBe('employee:all systems:go');
    expect(params.get('state')).toBe('state with spaces');
  });
});
