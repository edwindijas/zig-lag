import type { AuthSigninRequest } from '@pack/shared/src/schema/auth';
import type { UserSignupRequest } from '@pack/shared/src/schema/user';
import { useMutation, type UseMutationResult } from '@tanstack/react-query';

import type { ApiError } from '@/src/utils/api/types';

import { createUser, signin } from '../api';

export const useCreateUserMutation = (): UseMutationResult<
  unknown,
  ApiError,
  UserSignupRequest
> => {
  return useMutation({
    mutationFn: createUser,
  });
};

export const useSigninMutation = (): UseMutationResult<
  unknown,
  ApiError,
  AuthSigninRequest['body']
> => {
  return useMutation({
    mutationFn: signin,
  });
};
