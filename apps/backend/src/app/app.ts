import 'dotenv/config';
import { getEnvVariable } from '@pack/shared/src/helpers/config/env';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import Express from 'express';

import { errorHandler, responseFormatter } from '@/middleware/';

import { CONFIG_ENV_VAR_NAMES } from '../common/const/config';

import { insertUser } from '../features/auth/middleware/insert-user';

import { apiRouter } from './router';

export const app = Express();

const corsOptions = {
  origin: getEnvVariable(CONFIG_ENV_VAR_NAMES.CORS_ORIGIN),
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(Express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(responseFormatter);
app.use(insertUser);
app.use(apiRouter);

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(errorHandler);
