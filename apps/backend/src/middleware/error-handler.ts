import { NextFunction, Request, Response } from 'express';

import { SysError } from '../common/errors/base-error';

export const errorHandler = (
  err: SysError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(err.code ?? 500).json({
    status: 'error',
    message: err.message ?? 'Something went wrong on the server.',
  });

  void next;

  return;
};
