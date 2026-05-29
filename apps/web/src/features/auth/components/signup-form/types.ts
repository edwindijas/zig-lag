import type { UserSignupRequest } from '@pack/shared/src/schema/user';

export interface SignupFormProps {
  onSubmit?: (e: UserSignupRequest) => void
}
