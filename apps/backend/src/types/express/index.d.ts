import 'express';

import { User } from '@pack/shared/src/schema/user';

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
