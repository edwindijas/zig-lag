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
  data: UserSigninRequest['body'],
): Promise<void> => {
  await apiFetch('/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const getUser = async (): Promise<ProtectedUser> => {
  const response = await apiFetch<ProtectedUser>('/api/auth/whoami', {
    method: 'GET',
  });
  if (!response.success) {
    throw new Error('Failed to fetch user data');
  }
  return response.getData();
};
