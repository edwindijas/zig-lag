import type { ReactNode } from 'react';
import { Link } from 'react-router';

export const SignupPage = (): ReactNode => {
  return (
    <div>
      <h1>Signup Page</h1>
      <div>
        <Link to="/auth/signin">Already have an account? Sign in</Link>
      </div>
    </div>
  );
};
