<script setup lang="ts">
defineProps<{
  columns: string[];
  data: object[];
  align: string;
}>();
</script>

<template>
  <el-table
    :data="data"
    style="width: 100%"
    table-layout="auto"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    :default-expand-all="true"
  >
    <el-table-column
      v-for="column in columns"
      :prop="column"
      :label="column"
      :align="align"
    />
  </el-table>
</template>
