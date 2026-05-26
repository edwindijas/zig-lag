import type { SignupRequest } from '@pack/shared/src/schema/auth';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';

import type { ApiError } from '@/src/utils/api/types';

import { createUser } from '../api';

export const useCreateUser = (): UseMutationResult<unknown, ApiError, SignupRequest> => {
  return useMutation(
    {
      mutationFn: createUser,
    },
  );
};
