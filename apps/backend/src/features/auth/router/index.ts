import { authSigninRequestSchema } from '@pack/shared/src/schema/auth';
import Express from 'express';

import { zodValidate } from '@/src/middleware';

import * as authController from '../controllers';

export const router = Express.Router();

router.get('/whoami', authController.whoAmi);
router.post(
  '/signin',
  zodValidate(authSigninRequestSchema),
  authController.signin,
);

export const authRouter = Express.Router();
authRouter.use('/auth', router);
