import { User, UserSigninRequest } from '@pack/shared/src/schema/user';
import { Request, Response } from 'express';

import * as AuthService from '@/src/features/auth/services';

export const whoAmi = (req: Request, res: Response<{ user?: User }>): void => {
  res.status(200).json({ user: req.user });
};

export const signin = async (
  req: Request<never, UserSigninRequest['body']>,
  res: Response,
): Promise<void> => {
  const { user, sessionId } = await AuthService.signin(req.body);
  res.cookie('ssid', sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });
  res.status(200).json({ data: { user } });
};
