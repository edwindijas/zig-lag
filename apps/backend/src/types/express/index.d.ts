import 'express';

import { ProtectedUser } from '@pack/shared/src/schema/user';

import { ApiError } from '@pack/shared/src/types/api';

declare global {
  namespace Express {
    export interface Request {
      user?: ProtectedUser | null;
      cookies: {
        ssid?: string;
      };
    }

    interface Response {
      success<T>(data: T): void;
      fail(error: ApiError, statusCode?: number): void;
    }
  }
}
