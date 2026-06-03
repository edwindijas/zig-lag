import { AuthWhoamiResponse } from '@pack/shared/src/schema/auth';
import { UserSigninRequest } from '@pack/shared/src/schema/user';
import { Request, Response } from 'express';

import * as AuthService from '@/src/features/auth/services';

export const whoAmi = (
  req: Request,
  res: Response<AuthWhoamiResponse>,
): void => {
  res.success({ user: req.user ?? null });
};

export const signin = async (
  req: Request<never, UserSigninRequest['body']>,
  res: Response<AuthWhoamiResponse>,
): Promise<void> => {
  const { user, sessionId } = await AuthService.signin(req.body);
  res.cookie('ssid', sessionId, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });
  res.success({ user });
};

export const signout = async (
  req: Request,
  res: Response<AuthWhoamiResponse>,
): Promise<void> => {
  const { ssid } = req.cookies;
  if (!ssid) {
    res.fail({ message: 'No session ID found' }, 400);
    return;
  }
  await AuthService.signout(ssid);
  res.clearCookie('ssid');
  res.success({ user: null });
};
