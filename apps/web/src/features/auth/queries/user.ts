import type {
  UserSignupRequest,
  UserSigninRequest,
  ProtectedUser,
} from '@pack/shared/src/schema/user';
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
  ProtectedUser,
  ApiError,
  UserSigninRequest
> => {
  return useMutation({
    mutationFn: signin,
  });
};
