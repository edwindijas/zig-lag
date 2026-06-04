import type { FunctionComponent, SVGAttributes } from 'react';

export interface MenuItem {
  name: string;
  path: string;
  icon?: FunctionComponent<SVGAttributes<SVGSVGElement>>;
}

export interface SidebarMenuProps {
  items: Array<MenuItem>;
}

export interface SidebarProps {
  menuItems: Array<MenuItem>;
}
