import { API_STATUS } from '@pack/shared/src/constants/api';
import { UserSignupRequest } from '@pack/shared/src/schema/user';
import { Request, Response } from 'express';

import * as userService from '@/features/user/services';

export const createUser = (
  req: Request<never, UserSignupRequest>,
  res: Response,
): void => {
  const user = userService.createUser(req.body);
  res.status(200).json({ status: API_STATUS.success, data: { user } });
};
