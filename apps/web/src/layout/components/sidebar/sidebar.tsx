import type { ReactElement } from 'react';

import { SidebarMenu } from './menu';
import { StyledSidebar } from './style';
import type { SidebarProps } from './types';

export const SideBar = ({ menuItems }: SidebarProps): ReactElement => {
  return (
    <StyledSidebar>
      <SidebarMenu items={menuItems} />
    </StyledSidebar>
  );
};
