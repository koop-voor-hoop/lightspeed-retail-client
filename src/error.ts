import { lightspeedErrorSchema } from './schemas';
import type { LightspeedError } from './types';

export class LightspeedApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
    readonly errorCode?: string,
    readonly hint?: string,
  ) {
    super(message);
    this.name = 'LightspeedApiError';
  }
}

function parseUnknownErrorPayload(payload: unknown): LightspeedError | null {
  const parsed = lightspeedErrorSchema.safeParse(payload);
  return parsed.success ? parsed.data : null;
}

export async function createLightspeedApiError(response: Response): Promise<LightspeedApiError> {
  const responseText = await response.text().catch(() => '');

  let parsedError: LightspeedError | null = null;
  if (responseText) {
    try {
      parsedError = parseUnknownErrorPayload(JSON.parse(responseText));
    } catch {
      parsedError = null;
    }
  }

  if (parsedError?.error_description) {
    return new LightspeedApiError(
      parsedError.error_description,
      response.status,
      parsedError.error,
      parsedError.hint,
    );
  }

  return new LightspeedApiError(
    responseText || response.statusText || `Lightspeed request failed with status ${response.status}`,
    response.status,
  );
}
