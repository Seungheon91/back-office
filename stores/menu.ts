import { defineStore } from "pinia";

import menuItem from "./data/menuItem";

export const useMenuStore = defineStore("menu", () => {
  const menus = ref(menuItem);
  const menuNames = ref<Array<string>>([]);

  const setMenuNames = (routerPath: string) => {
    menuNames.value = [];

    if (routerPath === "/mypage") {
      menuNames.value.push("마이페이지");
      return;
    }

    for (let menu of menuItem) {
      if (routerPath === menu.url) {
        menuNames.value.push(menu.name);
      } else {
        for (let submenu of menu.submenus) {
          if (routerPath === submenu.url) {
            menuNames.value.push(menu.name);
            menuNames.value.push(submenu.name);
          }
        }
      }
    }
  };

  return {
    menus,
    menuNames,
    setMenuNames,
  };
});
