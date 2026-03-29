import { requestJson } from '../api';
import { sessionSchema } from '../schemas';
import type { Session } from '../types';

/** Gives information about the current session (based on the access token), including the employee and access rights. */
export const getSession = async (accessToken: string): Promise<Session> => {
  return requestJson(
    'Session.json',
    {
      accessToken,
    },
    sessionSchema,
  );
};
