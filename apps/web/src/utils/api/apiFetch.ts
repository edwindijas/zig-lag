import type { ApiFetchResponse as ApiResponse } from '@pack/shared/src/types/api';
import { produce } from 'immer';

export const apiFetch = async <T>(
  path: string,
  options: RequestInit = { method: 'GET' },
): Promise<ApiResponse<T>> => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const _options = produce(options, (draft) => {
    draft.headers = draft.headers
      ? (draft.headers as Record<string, string>)
      : {};
    draft.headers['content-type'] =
      draft.headers['content-type'] ?? 'application/json';
    draft.credentials = 'include';
  });

  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  const combinedURL = new URL(cleanPath, base).toString();

  const response = await fetch(combinedURL, _options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const responseJson = (await response.json()) as ApiResponse<T>;

  if (responseJson.success === true) {
    return { ...responseJson, getData: () => responseJson.data };
  }

  return { ...responseJson, getError: () => responseJson.error };
};
