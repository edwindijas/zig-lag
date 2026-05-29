import Express from 'express';

import * as authController from '../controllers';

export const router = Express.Router();

router.get('/whoami', authController.whoAmi);

export const authRouter = Express.Router();
authRouter.use('/auth', router);
