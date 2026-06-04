import type { ReactElement } from 'react';

import { StyledSidebarIcon, StyledSidebarMenuLink, StyledSidebarMenuList, StyledSidebarMenuListItem, StyledSidebarNav } from './style';
import type { MenuItem, SidebarMenuProps } from './types';

export const SidebarMenu = ({ items }: SidebarMenuProps): ReactElement => {
  return (
    <StyledSidebarNav>
      <StyledSidebarMenuList>
        {items.map((item: MenuItem) => {
          const IconComponent = item.icon;
          return (
            <StyledSidebarMenuListItem key={item.path}>
              <StyledSidebarMenuLink to={item.path}>
                {IconComponent
                  ? (
                    <StyledSidebarIcon>
                      <IconComponent />
                    </StyledSidebarIcon>
                  )
                  : null }
                <span>{item.name}</span>
              </StyledSidebarMenuLink>
            </StyledSidebarMenuListItem>
          );
        })}
      </StyledSidebarMenuList>
    </StyledSidebarNav>
  );
};
