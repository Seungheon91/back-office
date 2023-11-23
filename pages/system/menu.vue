<script setup lang="ts">
const { menuList } = useMenu();
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-md p-4">
    <div class="pt-2 pb-6 flex justify-end items-center">
      <el-button type="primary">신규 등록</el-button>
    </div>
    <el-table
      :data="menuList"
      style="width: 100%"
      table-layout="auto"
      row-key="menuId"
      lazy
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      :default-expand-all="true"
    >
      <el-table-column prop="menuName" label="메뉴명" align="center">
        <template #default="scope"
          ><span class="cursor-pointer hover:text-red-600">{{
            scope.row.menuName
          }}</span></template
        >
      </el-table-column>
      <el-table-column prop="useYn" label="사용여부" align="center" />
      <el-table-column prop="url" label="URL" align="center" />
      <el-table-column prop="remark" label="비고" align="center" />
    </el-table>
  </div>
</template>
