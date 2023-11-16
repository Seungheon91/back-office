export interface Menu {
  index: string;
  name: string;
  url: string;
  icon: string;
  submenus: Array<Submenu>;
}

export interface Submenu {
  index: string;
  url: string;
  name: string;
}
