import { User } from '@pack/shared/src/schema/user';
import { Request, Response } from 'express';

export const whoAmi = (req: Request, res: Response<{ user: User | undefined, }>): void => {
  res.status(200).json({ user: req.user });
};
