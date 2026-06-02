import { type ErrorType } from '@pack/shared/src/constants/errors';
import type { $ZodIssue } from 'zod/v4/core';

export interface ErrorMessageProps {
  error?: string | $ZodIssue;
  errorMessage?: string;
  errorType?: ErrorType;
  container?: boolean;
}
