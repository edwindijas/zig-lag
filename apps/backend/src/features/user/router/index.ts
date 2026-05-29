import { userSignupRequestSchema } from '@pack/shared/src/schema/user';
import Express from 'express';

import { zodValidate } from '@/src/middleware';

import * as UserController from '../controllers';

const routes = Express.Router();

routes.post(
  '/create-account',
  zodValidate(userSignupRequestSchema),
  UserController.createUser,
);

export const userRouter = Express.Router();

userRouter.use('/users', routes);
