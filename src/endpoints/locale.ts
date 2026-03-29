import { requestJson } from '../api';
import { localesResponseSchema } from '../schemas';
import type { AccessToken, LocalesResponse, PaginationParams } from '../types';

type EndpointParams = PaginationParams<never, never>;

/** Lists globally available locales and their formatting and currency metadata. */
export const getLocales = async ({
  accessToken,
  ...params
}: AccessToken & EndpointParams): Promise<LocalesResponse> => {
  return requestJson(
    'Locale.json',
    {
      accessToken,
      params,
    },
    localesResponseSchema,
  );
};
