import { type ReactElement } from 'react';

import { IconLogo, IconMoreVert, IconNotifications, IconSearch } from '@/src/components/atoms/icons';

import { ToolbarSearch } from '../search-bar';

import { StyledButton, StyledLeftPane, StyledLogo, StyledLogoLink, StyledLogoText, StyledMoreIcon, StyledRightTools, StyledSearchButton, StyledToolsContainer, StyledTopMenu, StyledUserAvatar, StyledUserButton, StyledUserName } from './style';
import type { ToolbarProps } from './types';

export const Toolbar = ({ onUserMenuClick, user }: ToolbarProps): ReactElement => {
  return (
    <StyledTopMenu>
      <StyledToolsContainer>
        <StyledLeftPane>
          <StyledLogoLink to="/">
            <StyledLogo>
              <IconLogo />
            </StyledLogo>
            <StyledLogoText>Lycode</StyledLogoText>
          </StyledLogoLink>
        </StyledLeftPane>
        <ToolbarSearch />
        <StyledRightTools>
          <StyledSearchButton><IconSearch /></StyledSearchButton>
          <StyledButton><IconNotifications /></StyledButton>
          <StyledUserButton type="button" onClick={onUserMenuClick}>
            <StyledUserAvatar />
            <StyledUserName>{ user?.name ?? 'Hi Stranger' }</StyledUserName>
            <StyledMoreIcon>
              <IconMoreVert />
            </StyledMoreIcon>
          </StyledUserButton>
        </StyledRightTools>
      </StyledToolsContainer>
    </StyledTopMenu>
  );
};
