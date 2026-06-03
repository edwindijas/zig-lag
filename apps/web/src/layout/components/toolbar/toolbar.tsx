import { type ReactElement } from 'react';

import { IconNotifications } from '@/src/components/atoms/icons';

import { StyledButton, StyledRightTools, StyledToolsContainer, StyledTopMenu, StyledUserAvatar, StyledUserButton, StyledUserName } from './style';
import type { ToolbarProps } from './types';

export const Toolbar = ({ onUserMenuClick, user }: ToolbarProps): ReactElement => {
  return (
    <StyledTopMenu>
      <StyledToolsContainer>
        <div>Logo</div>
        <div>Search</div>
        <StyledRightTools>
          <StyledButton><IconNotifications /></StyledButton>
          <StyledUserButton type="button" onClick={onUserMenuClick}>
            <StyledUserAvatar />
            <StyledUserName>{ user?.name ?? 'Hi Stranger' }</StyledUserName>
          </StyledUserButton>
        </StyledRightTools>
      </StyledToolsContainer>
    </StyledTopMenu>
  );
};
