import type { SignupRequest } from '@pack/shared/src/schema/auth';

export interface SignupFormProps {
  onSubmit?: (e: SignupRequest) => void
};
