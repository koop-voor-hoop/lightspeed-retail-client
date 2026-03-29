import type z from 'zod';
import { createLightspeedApiError } from './error';
import type { RawQueryParams, RequestJsonInit } from './types';

export const AUTH_BASE_URL = 'https://us.merchantos.com';
export const API_BASE_URL = 'https://api.lightspeedapp.com/API/V3';

const parseResponseJson = (response: Response): Promise<unknown | null> => {
  return response.json().catch(() => null);
};

const resolveRequestUrl = (input: RequestInfo | URL, params?: RawQueryParams): RequestInfo | URL => {
  if (typeof input === 'string' && !/^https?:\/\//.test(input)) {
    return buildLightspeedApiUrl(input, params);
  }

  if (!params) {
    return input;
  }

  const url = new URL(typeof input === 'string' ? input : input.toString());
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      const serialized = Array.isArray(value) ? JSON.stringify(value) : value;
      url.searchParams.set(key, String(serialized));
    }
  }

  return url;
};

const buildRequestInit = (init: RequestJsonInit): RequestInit => {
  const { accessToken, params: _params, payload, headers, ...rest } = init;
  const normalizedHeaders = new Headers(headers);

  if (accessToken) {
    normalizedHeaders.set('Authorization', `Bearer ${accessToken}`);
    normalizedHeaders.set('Accept', 'application/json');
  }

  let body = rest.body;
  if (payload !== undefined) {
    normalizedHeaders.set('Content-Type', 'application/json');
    body = JSON.stringify(payload);
  }

  return {
    ...rest,
    headers: normalizedHeaders,
    body,
  };
};

export const requestJson = async <TSchema extends z.ZodType>(
  input: RequestInfo | URL,
  init: RequestJsonInit,
  schema: TSchema,
): Promise<z.infer<TSchema>> => {
  const requestInput = resolveRequestUrl(input, init.params);
  const requestInit = buildRequestInit(init);
  const response = await fetch(requestInput, requestInit);

  if (!response.ok) {
    throw await createLightspeedApiError(response);
  }

  const payload = await parseResponseJson(response);
  console.log(payload);
  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const issues = [];
    if (parsed.error.issues) {
      for (const issue of parsed.error.issues) {
        issues.push(`\t- ${issue.path.join('.')} : ${issue.message}`);
      }
    }
    throw new Error(`Invalid Lightspeed API response payload:\n${issues.join('\n')}`);
  }

  return parsed.data;
};

const buildLightspeedApiUrl = (pathname: string, params?: RawQueryParams) => {
  const url = new URL(`${API_BASE_URL}/${pathname.replace(/^\//, '')}`);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        const serialized = Array.isArray(value) ? JSON.stringify(value) : value;
        url.searchParams.set(key, String(serialized));
      }
    }
  }

  return url;
};
