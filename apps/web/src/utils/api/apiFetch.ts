import { produce } from 'immer';

import type { ApiResponse } from './types';

export const apiFetch = async <T>(
  path: string,
  options: RequestInit = { method: 'GET' },
): Promise<ApiResponse<T>> => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const _options = produce(options, (draft) => {
    draft.headers = draft.headers
      ? (draft.headers as Record<string, string>)
      : {};
    draft.headers['content-type']
      = draft.headers['content-type'] ?? 'application/json';
    draft.credentials = 'include';
  });

  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  const combinedURL = new URL(cleanPath, base).toString();

  const response = await fetch(combinedURL, _options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return { data, success: true, getData: () => data };
};
