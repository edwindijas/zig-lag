import 'dotenv/config';
import Express from 'express';

export const app = Express();

app.use(Express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
