import { userSigninRequestSchema } from '@pack/shared/src/schema/user';
import Express from 'express';

import { zodValidate } from '@/src/middleware';

import * as authController from '../controllers';

export const router = Express.Router();

router.get('/whoami', authController.whoAmi);
router.post(
  '/signin',
  zodValidate(userSigninRequestSchema),
  authController.signin,
);

export const authRouter = Express.Router();
authRouter.use('/auth', router);
