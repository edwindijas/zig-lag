import Express from 'express';
import 'dotenv/config';

import { authRouter } from '@/src/features/auth/router';

const routes = Express();

routes.use('/auth', authRouter);

export const apiRouter = Express.Router();
apiRouter.use('/api', routes);
