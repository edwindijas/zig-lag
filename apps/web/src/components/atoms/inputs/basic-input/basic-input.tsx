import type { ReactNode, ChangeEvent } from 'react';

import { useRef, useState } from 'react';

import { StyledBasicInput,
  StyledBasicInputTextLabel,
  StyledBasicInputWrapper,
} from './style';
import type { BasicInputProps } from './types';

export const BasicInput = ({ label = 'Text input',
  type = 'text',
  defaultValue = '', onChange, name }: BasicInputProps): ReactNode => {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setValue(target.value);
    if (onChange) {
      onChange(target.value);
    }
  };

  const isActive = value.length > 0;

  return (
    <StyledBasicInputWrapper onClick={(): void => inputRef.current?.focus()}>
      <StyledBasicInputTextLabel $isActive={isActive}>
        {label}
      </StyledBasicInputTextLabel>
      <StyledBasicInput
        ref={inputRef}
        name={name}
        $active={isActive}
        onChange={handleChange}
        type={type}
        value={value}
      />
    </StyledBasicInputWrapper>
  );
};
