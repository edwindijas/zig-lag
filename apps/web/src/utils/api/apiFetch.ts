import { produce } from 'immer';

import type { ApiResponse } from './types';

export const apiFetch = async <T> (url: string, options: RequestInit = { method: 'GET' }): Promise<ApiResponse<T>> => {
  const _options = produce(options, (draft) => {
    draft.headers = draft.headers ? draft.headers as Record<string, string> : {};
    draft.headers['content-type'] = draft.headers['content-type'] ?? 'application/json';
  });

  const response = await fetch(url, _options);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  return { data, success: true, getData: () => data };
};
