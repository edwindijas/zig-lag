import { ERROR_TYPE, type ErrorType } from '@pack/shared/src/constants/errors';

import { styled } from 'styled-components';

export const StyledErrorMessage = styled.p<{
  $type: ErrorType;
  $container: boolean;
}>`
  display: block;
  font-size: 1.4rem;
  border-radius: 0.6rem;

  ${({ $type }) => {
    if ($type === ERROR_TYPE.error || $type === ERROR_TYPE.critical) {
      return `
        color: #e94040;
        background-color: #fbb5b5;
      `;
    }

    if ($type === ERROR_TYPE.warning) {
      return `
        color: #8a630d;
        background-color: #fce5b2;
      `;
    }

    if ($type === ERROR_TYPE.info) {
      return `
        color: #474850;
        background-color: #d9dcea;
      `;
    }

    return `
      padding: 0.6rem;
      background-color: red;
    `;
  }}

  ${({ $container }) => {
    if (!$container) {
      return 'background-color: transparent;';
    }

    return `
      padding: 0.6rem 1.2rem;
    `;
  }}
`;
