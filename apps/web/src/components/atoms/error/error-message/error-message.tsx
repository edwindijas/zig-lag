import { ERROR_TYPE } from '@pack/shared/src/constants/errors';
import { useMemo, type ReactNode } from 'react';

import { StyledErrorMessage } from './style';
import type { ErrorMessageProps } from './types';

export const ErrorMessage
  = ({ error, errorMessage, errorType = ERROR_TYPE.error, container = false }: ErrorMessageProps): ReactNode => {
    const message = useMemo(() => {
      if (errorMessage) {
        return errorMessage;
      }

      if (!error) {
        return null;
      }

      if (typeof error === 'object') {
        return error.message;
      }

      return error;
    }, [error, errorMessage]);

    if (!message) {
      return null;
    }

    return <StyledErrorMessage $type={errorType} $container={container}>{ message }</StyledErrorMessage>;
  };
