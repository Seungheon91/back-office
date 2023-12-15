// 사이드바 메뉴
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

// 메뉴 관리
export interface MenuInfo {
  menuId: number;
  menuName: string;
  parentMenuId: number;
  url: string;
  useYn: string;
  seqNo: number;
  menuIcon: string | null;
  lnbYn: string;
  level: number;
  readYn: string;
  writeYn: string;
  deleteYn: string;
  printYn: string;
  excelYn: string;
  remark?: string | null;
}

export interface MenuDetailInfo {
  children?: Array<MenuDetailInfo>;
  menuId: number;
  menuName?: string;
  parentMenuId?: number;
  url?: string;
  useYn?: string;
  seqNo?: number;
  menuIcon: string | null;
  lnbYn?: string;
  level?: number;
  remark?: string | null;
  depth: number;
}
