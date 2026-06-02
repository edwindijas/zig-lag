import { useState, type ReactElement } from 'react';

import { StyledRightTools, StyledToolsContainer, StyledTopMenu, StyledUserAvatar, StyledUserButton, StyledUserName } from './style';
import { UserMenu } from './user-menu';

export const Toolbar = (): ReactElement => {
  const [isUserMenuActive, setIsUserMenuActive] = useState(false);

  const toggleUserMenu = (): void => {
    setIsUserMenuActive((prev) => !prev);
  };

  return (
    <StyledTopMenu>
      <StyledToolsContainer>
        <div>Logo</div>
        <div>Search</div>
        <StyledRightTools>
          <div>Notifications</div>
          <div>User Menu</div>
          <StyledUserButton type="button" onClick={toggleUserMenu}>
            <StyledUserAvatar />
            <StyledUserName>Edwin Chiwona</StyledUserName>
          </StyledUserButton>
        </StyledRightTools>
        <UserMenu active={isUserMenuActive} />
      </StyledToolsContainer>
    </StyledTopMenu>
  );
};
