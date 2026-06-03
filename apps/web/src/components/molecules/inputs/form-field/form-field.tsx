import type { ReactElement } from 'react';

import { ErrorMessage } from '@/components/atoms/error';

import { BasicInput } from '@/components/atoms/inputs';

import { StyledErrorContainer, StyledFormField } from './style';
import type { FormFieldProps } from './types';

export const FormField = ({ errors, container, ...inputProps }: FormFieldProps): ReactElement => {
  return (
    <StyledFormField>
      <BasicInput {...inputProps} />
      { errors && errors.length > 0
        ? (
          <StyledErrorContainer>
            {errors.map((error, key) => {
              // eslint-disable-next-line @eslint-react/no-array-index-key
              return <ErrorMessage container={container} key={key} error={error} />;
            })}
          </StyledErrorContainer>
        )
        : null}
    </StyledFormField>
  );
};
