import { NextFunction, Request, Response } from 'express';

import { redisClient } from '@/src/infrastructure/persistence/redis-client';

import { User } from '../../user/db/schema';

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
  const user = await redisClient.get(`users:users:${userId}:profile`);

  if (user) {
    req.user = JSON.parse(user) as User;
  }

  next();
};
