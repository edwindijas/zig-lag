import type { AuthSigninRequest } from '@pack/shared/src/schema/auth';

export interface SigninFormProps {
  onSubmit?: (e: AuthSigninRequest) => void;
}
