import Express from 'express';
import 'dotenv/config';

import { authRouter } from '@/src/features/auth/router';
import { userRouter } from '@/src/features/user/router';

const routes = Express();

routes.use(authRouter);
routes.use(userRouter);

export const apiRouter = Express.Router();
apiRouter.use('/api', routes);
