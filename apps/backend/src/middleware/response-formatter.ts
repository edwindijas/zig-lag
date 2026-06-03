import { ApiError } from '@pack/shared/src/types/api';
import { Request, Response, NextFunction } from 'express';

export const responseFormatter = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.success = function <T>(data: T, statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      data,
    });
  };

  res.fail = function (error: ApiError, statusCode = 400) {
    return res.status(statusCode).json({
      success: false,
      error,
    });
  };

  next();
};
