// https://icones.js.org/collection/ic?s=dash
export default [
  {
    index: "1",
    name: "대시보드",
    url: "/",
    icon: "ic:baseline-dashboard",
    submenus: [],
  },
  {
    index: "2",
    name: "시스템관리",
    url: "",
    icon: "ic:outline-settings",
    submenus: [
      {
        index: "2-1",
        name: "공통코드관리",
        url: "/system/common-code",
      },
      {
        index: "2-2",
        name: "메뉴관리",
        url: "/system/menu",
      },
      {
        index: "2-3",
        name: "권한관리",
        url: "/system/auth",
      },
      {
        index: "2-4",
        name: "사용자관리",
        url: "/system/user",
      },
      {
        index: "2-5",
        name: "양식관리",
        url: "/system/form",
      },
      {
        index: "2-6",
        name: "양식분류관리",
        url: "/system/form-category",
      },
    ],
  },

  // {
  //   index: "3",
  //   name: "로그인",
  //   url: "/login",
  //   icon: "ic:sharp-perm-identity",
  //   submenus: [],
  // },
];
