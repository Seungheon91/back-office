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
];
onMounted(() => {});
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-md p-4">
    <div class="flex flex-col justify-center items-center gap-9">
      <Table :data="tableData" :columns="columns" align="center" />
      <Pagination :total="tableData.length" :pageCount="2" />
    </div>
  </div>
</template>
