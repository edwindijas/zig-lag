import type { ReactElement } from 'react';

import type { MenuItem, SidebarMenuProps } from './types';

export const SidebarMenu = ({ items }: SidebarMenuProps): ReactElement => {
  return (
    <div>
      <ul>
        {items.map((item: MenuItem) => (
          <li key={item.path}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
