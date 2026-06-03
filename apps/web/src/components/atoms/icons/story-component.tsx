import type { ReactElement } from 'react';

import * as Icons from './components';
import icons from './components/icons.json';

import { StyledIcon, StyledIconList, StyledIconListItem, StyledIconName, StyledIconsWrapper } from './style';

const getReadableName = (name: string): string => {
  let str = '';

  for (let x = 0; x < name.length; x++) {
    const char = name.charAt(x);
    if (x != 0 && char !== char.toLocaleLowerCase()) {
      str += ' ';
    }
    str += char;
  }

  return str.replace('Icon', '').trim();
};

export const IconStory = (): ReactElement => {
  return (
    <StyledIconsWrapper>
      <StyledIconList>
        { icons.map((name) => {
          const Component = Icons[name as keyof typeof Icons];
          return (
            <StyledIconListItem key={name}>
              <StyledIcon>
                <Component />
              </StyledIcon>
              <StyledIconName>
                { getReadableName(name) }
              </StyledIconName>
            </StyledIconListItem>
          );
        }) }
      </StyledIconList>
    </StyledIconsWrapper>
  );
};
