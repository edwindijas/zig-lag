import type { AuthWhoamiResponse } from '@pack/shared/src/schema/auth';
import type {
  UserSignupRequest,
  UserSigninRequest,
  ProtectedUser,
} from '@pack/shared/src/schema/user';

import { apiFetch } from '@/utils/api';

export const createUser = async (data: UserSignupRequest): Promise<void> => {
  await apiFetch('/api/users/create-account', {
    method: 'POST',
    body: JSON.stringify(data.body),
  });
};

export const signin = async (
  data: UserSigninRequest,
): Promise<ProtectedUser | null> => {
  const response = await apiFetch<AuthWhoamiResponse>('/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(data.body),
  });
  if (!response.success) {
    throw new Error('Failed to sign in');
  }
  return response.getData().user;
};

export const getUser = async (): Promise<ProtectedUser | null> => {
  const response = await apiFetch<AuthWhoamiResponse>('/api/auth/whoami', {
    method: 'GET',
  });
  if (!response.success) {
    throw new Error('Failed to fetch user data');
  }

  return response.getData().user;
};

export const signout = async (): Promise<void> => {
  await apiFetch('/api/auth/signout', {
    method: 'POST',
  });
};
