export interface MenuItem {
  name: string;
  path: string;
}

export interface SidebarMenuProps {
  items: Array<MenuItem>;
}

export interface SidebarProps {
  menuItems: Array<MenuItem>;
}
