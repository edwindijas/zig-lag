import type { AuthSigninRequest } from '@pack/shared/src/schema/auth';
import type { UserSignupRequest } from '@pack/shared/src/schema/user';

import { apiFetch } from '@/utils/api';

export const createUser = async (data: UserSignupRequest): Promise<void> => {
  await apiFetch('/api/users/create-account', {
    method: 'POST',
    body: JSON.stringify(data.body),
  });
};

export const signin = async (
  data: AuthSigninRequest['body'],
): Promise<void> => {
  await apiFetch('/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
