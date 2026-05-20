import type { ReactNode } from 'react';
import { Link } from 'react-router';

export const SigninPage = (): ReactNode => {
  return (
    <div>
      <h1>Signin Page</h1>
      <div>
        <Link to="/auth/signup">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
};
