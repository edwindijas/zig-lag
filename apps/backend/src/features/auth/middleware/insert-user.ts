import { ProtectedUser } from '@pack/shared/src/schema/user';
import { NextFunction, Request, Response } from 'express';

import { redisClient } from '@/src/infrastructure/persistence/redis-client';

export const insertUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const sessionId = req.cookies['ssid'];

  if (!sessionId) {
    return next();
  }

  const userId = await redisClient.get(`users:sessions:${sessionId}`);
  const user = await redisClient.get(`users:user:${userId}:profile`);

  if (user) {
    req.user = JSON.parse(user) as ProtectedUser;
  }

  next();
};
