import type { $ZodIssue } from 'zod/v4/core';

import type { BasicInputProps } from '@/components/atoms/inputs/basic-input/types';

export interface FormFieldProps extends BasicInputProps {
  errors?: Array<string | $ZodIssue>;
  container?: boolean;
}
