import { AUTH_BASE_URL, requestJson } from './api';
import { tokenSchema } from './schemas';
import type { Token } from './types';

export function buildAuthorizationUrl({
  clientId,
  scope,
  state,
}: {
  clientId: string;
  scope: string;
  state: string;
}): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    scope,
    state,
  });

  return `${AUTH_BASE_URL}/auth/oauth/authorize?${params.toString()}`;
}

export async function exchangeAuthorizationCodeForToken({
  clientId,
  clientSecret,
  code,
}: {
  clientId: string;
  clientSecret: string;
  code: string;
}): Promise<Token> {
  return requestJson(
    `${AUTH_BASE_URL}/auth/oauth/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code,
      }),
    },
    tokenSchema,
  );
}

export async function refreshAccessToken({
  clientId,
  clientSecret,
  refreshToken,
}: {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}): Promise<Token> {
  return requestJson(
    `${AUTH_BASE_URL}/auth/oauth/token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    },
    tokenSchema,
  );
}
