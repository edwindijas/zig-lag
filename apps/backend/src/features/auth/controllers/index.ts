import { SignupRequest } from '@pack/shared/src/schema/auth';
import { User } from '@pack/shared/src/schema/user';
import { Request, Response } from 'express';

import * as AuthService from '@/src/features/auth/services';

export const whoAmi = (req: Request, res: Response<{ user?: User }>): void => {
  res.status(200).json({ user: req.user });
};

export const createAccount = (
  req: Request<never, SignupRequest['body']>,
  res: Response,
): void => {
  AuthService.createAccount(req.body);
  res.status(200).json({ ok: 'ok' });
};
