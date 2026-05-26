import type { SignupRequest } from '@pack/shared/src/schema/auth';

import { apiFetch } from '@/utils/api';

export const createUser = async (data: SignupRequest): Promise<void> => {
  await apiFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
