<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="flex flex-col">
      <div class="flex justify-between items-center pb-4">
        <h3 class="text-lg font-semibold">분류목록</h3>
        <el-button type="primary" size="large">신규등록</el-button>
      </div>
      <div class="bg-white rounded-md p-4">
        <el-table
          style="width: 100%"
          :default-expand-all="true"
          table-layout="auto"
          highlight-current-row
          lazy
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column
            prop="formGroupName"
            header-align="center"
            label="분류"
          >
            <template #default="scope">
              <button>
                {{ scope.row.formGroupName }}
              </button>
            </template>
          </el-table-column></el-table
        >
      </div>
    </div>
    <div class="flex flex-col col-span-2">
      <div class="flex items-center pt-2 pb-6">
        <h3 class="text-lg font-semibold">분류상세</h3>
      </div>
      <div class="bg-white rounded-md p-4">
        <el-table></el-table>
      </div>
    </div>
  </div>
</template>
