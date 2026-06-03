import { UserSigninRequest } from '@pack/shared/src/schema/user';
import {
  type ProtectedUser,
  protectedUserSchema,
} from '@pack/shared/src/schema/user';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

import { UnAuthorisedError } from '@/src/common/errors/unauthorised-access';

import { redisClient } from '@/src/infrastructure/persistence/redis-client';

import * as UserRepository from '@/features/user/db/repository';

import { User } from '../../user/db/schema';

export const signin = async (
  reqUser: UserSigninRequest['body'],
): Promise<{
  user: ProtectedUser;
  sessionId: string;
}> => {
  const user = await UserRepository.findByEmail(reqUser.email);

  if (!user || !bcrypt.compareSync(reqUser.password, user.password)) {
    throw new UnAuthorisedError();
  }

  const strippedUser = protectedUserSchema.parse(user);

  const sessionId = await createSession(
    strippedUser as unknown as User,
    user.id,
  );
  return { user: strippedUser, sessionId };
};

export const signout = async (sessionId: string): Promise<void> => {
  const userId = await redisClient.get(`users:sessions:${sessionId}`);
  if (!userId) {
    throw new UnAuthorisedError();
  }
  await redisClient.del(`users:sessions:${sessionId}`);
  await redisClient.sRem(`users:user:${userId}:sessions`, sessionId);

  const sessions = await redisClient.sMembers(`users:user:${userId}:sessions`);
  if (sessions.length === 0) {
    await redisClient.del(`users:user:${userId}:profile`);
  }
};

export const createSession = async (
  user: User,
  id: number,
): Promise<string> => {
  const sessionId = uuid();

  const pipeline = redisClient.multi();
  pipeline.set(`users:sessions:${sessionId}`, id);
  pipeline.sAdd(`users:user:${id}:sessions`, sessionId);
  pipeline.set(`users:user:${id}:profile`, JSON.stringify(user));
  await pipeline.exec();

  return sessionId;
};
