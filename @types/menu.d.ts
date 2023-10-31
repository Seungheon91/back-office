export interface IMenu {
  index: string;
  name: string;
  url: string;
  icon: string;
  submenus: Array<ISubmenu>;
}

export interface ISubmenu {
  index: string;
  url: string;
  name: string;
}
