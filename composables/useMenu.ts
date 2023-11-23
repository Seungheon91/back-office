import { makeTree } from "~/utils/tree";
import _orderBy from "lodash/orderBy";

interface MenuInfo {
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

export function useMenu() {
  const menuList = ref<Array<any>>([]);

  const getMenuList = async () => {
    const { data, error } = await useCustomFetch<Array<MenuInfo>>(
      "/api/syst/menus",
      {
        method: "GET",
      }
    );

    if (error.value) {
      console.log(error.value.data.message);
      throw error.value;
    }

    menuList.value = makeTree(
      _orderBy(data.value, ["level", "seqNo"]),
      "children",
      "menuId",
      "parentMenuId",
      { labelKey: "menuName", valueKey: "menuId" }
    );

    console.log(menuList.value);
  };

  onMounted(() => {
    getMenuList();
  });

  return { menuList, getMenuList };
}
