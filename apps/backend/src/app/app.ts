import 'dotenv/config';
import { getEnvVariable } from '@pack/shared/src/helpers/config/env';
import cors from 'cors';
import Express from 'express';

import { errorHandler } from '@/middleware/';

import { CONFIG_ENV_VAR_NAMES } from '../common/const/config';

import { apiRouter } from './router';

export const app = Express();

const corsOptions = {
  origin: getEnvVariable(CONFIG_ENV_VAR_NAMES.CORS_ORIGIN),
  optionsSuccessStatus: 200,
};

app.use(Express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use(cors(corsOptions));
app.use(apiRouter);
app.use(errorHandler);
