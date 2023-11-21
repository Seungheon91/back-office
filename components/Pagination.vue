<script setup lang="ts">
defineProps<{
  total: number;
  pageCount: number;
}>();
const pageChange = (page: number) => {
  console.log(page);
};
</script>

<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-count="pageCount"
    @current-change="pageChange"
  />
</template>
