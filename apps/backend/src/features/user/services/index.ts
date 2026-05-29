import bcrypt from 'bcrypt';

import * as UserRepository from '../db/repository';
import { NewUser, User } from '../db/schema';
import { UserAlreadyExistsError } from '../errors/user-already-exists';

export const createUser = async (user: Omit<User, 'id'>): Promise<NewUser> => {
  const existingUser = await UserRepository.findByEmail(user.email);

  if (existingUser) {
    throw new UserAlreadyExistsError();
  }

  const password = bcrypt.hashSync(user.password, 12);

  user.password = password;

  const newUser = await UserRepository.createUser(user);
  return newUser;
};
