import { defineStore } from "pinia";

import menuItem from "./data/menuItem";

export const useMenuStore = defineStore("menu", () => {
  const menus = ref(menuItem);
  const menuNames = ref<Array<string>>([]);

  const getMenuName = (routerPath: string) => {
    let menuName: Array<string> = [];

    for (let menu of menuItem) {
      if (routerPath === menu.url) {
        menuName.push(menu.name);
      } else {
        for (let submenu of menu.submenus) {
          if (routerPath === submenu.url) {
            menuName.push(menu.name);
            menuName.push(submenu.name);
          }
        }
      }
    }

    menuNames.value = menuName;
  };

  return {
    menus,
    menuNames,
    getMenuName,
  };
});
