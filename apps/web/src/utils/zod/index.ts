import type { ZodError } from 'zod';
import type { $ZodIssue } from 'zod/v4/core';

export const mapZodIssue = (error: ZodError): Record<string, $ZodIssue[]> => {
  const issues: Record<string, $ZodIssue[]> = {};

  error.issues.forEach((issue) => {
    const path = issue.path.join('.');
    if (!issues[path]) {
      issues[path] = [];
    }

    issues[path].push(issue);
  });

  return issues;
};
