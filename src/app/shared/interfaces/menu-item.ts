export interface MenuItem {
  menu: string;
  route?: string;
  submenus: SubmenuItem[];
}

export interface SubmenuItem {
  submenu: string;
  route: string;
}
