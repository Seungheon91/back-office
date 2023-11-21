<script setup lang="ts">
const columns: string[] = ["date", "name", "address"];
const tableData: object[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

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

const getMenuList = async () => {
  const { data, error } = await useCustomFetch<Array<MenuInfo>>("/syst/menus", {
    method: "GET",
  });

  console.log(error.value);
  if (error.value) {
    console.log(error.value.data.message);
    throw error.value;
  }
  console.log(data.value);
};

onMounted(() => {
  getMenuList();
});
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-md p-4">
    <div class="flex flex-col justify-center items-center gap-9">
      <Table :data="tableData" :columns="columns" align="center" />
      <Pagination :total="tableData.length" :pageCount="2" />
    </div>
  </div>
</template>
