import type { ReactElement } from 'react';

import { IconSearch } from '@/src/components/atoms/icons';

import { StyledSearchBarLabel, StyledSearchIcon, StyledToolbarContainer, StyledToolbarSearch } from './style';

export const ToolbarSearch = (): ReactElement => {
  return (
    <StyledToolbarSearch>
      <StyledToolbarContainer>
        <StyledSearchIcon>
          <IconSearch />
        </StyledSearchIcon>
        <StyledSearchBarLabel>
          Search here
        </StyledSearchBarLabel>
      </StyledToolbarContainer>
    </StyledToolbarSearch>
  );
};
