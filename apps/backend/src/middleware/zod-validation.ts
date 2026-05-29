import type { NextFunction, Request, Response } from 'express';

import { ZodError, type ZodObject } from 'zod';

export const zodValidate
  = (schema: ZodObject) =>
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
      // Validate request data
        const validatedData = await schema.parseAsync({
          body: req.body,
          query: req.query,
          params: req.params,
        });

        // Replace request values with validated/sanitized values
        req.body = validatedData.body;
        // req.query = validatedData.query;
        // req.params = validatedData.params;

        next();
      }
      catch (error) {
        if (error instanceof ZodError) {
          res.status(400).json({
            message: 'Validation failed',
            errors: error.issues.map((err) => ({
              path: err.path.join('.'),
              message: err.message,
            })),
          });
          return;
        }

        next(error);
      }
    };
