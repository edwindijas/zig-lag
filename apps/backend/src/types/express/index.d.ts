import 'express';

import { User } from 'src/features/user/db/schema';

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
