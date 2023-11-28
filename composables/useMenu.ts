import { makeTree } from "~/utils/tree";
import _orderBy from "lodash/orderBy";
import _cloneDeep from "lodash/cloneDeep";

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
  const menuOptionList = ref<Array<MenuInfo>>([]);
  const menuInfo = ref<MenuInfo>();

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

    menuOptionList.value = [
      {
        label: "선택안함",
        value: 0,
        menuId: 0,
        menuName: "선택안함",
        menuIcon: "",
        parentMenuId: 0,
        url: "",
        useYn: "Y",
        seqNo: 0,
        lnbYn: "Y",
        level: 0,
        readYn: "Y",
        writeYn: "Y",
        deleteYn: "Y",
        printYn: "Y",
        excelYn: "Y",
      },
    ].concat(_cloneDeep(menuList.value));
  };

  const setMenuInfo = (data: MenuInfo) => {
    menuInfo.value = data;
  };

  // const setMenuInfo = async () => {
  //   const { data, error } = await useCustomFetch("/api/syst/menus", {
  //     method: "POST",
  //     //body: Object.assign({}, localMenuInfo.value, { menuLevel: localMenuInfo.value.depth })
  //   });
  // };

  const updateMenuInfo = async () => {
    const { data } = await useCustomFetch(
      `/api/syst/menus/ ${"localMenuInfo.value.menuId"}`,
      {
        method: "POST",
        //body: Object.assign({}, localMenuInfo.value, { menuLevel: localMenuInfo.value.depth })
      }
    );
  };

  onMounted(() => {
    getMenuList();
  });

  return {
    menuList,
    menuOptionList,
    menuInfo,
    getMenuList,
    setMenuInfo,
    updateMenuInfo,
  };
}
