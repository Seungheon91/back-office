<script setup lang="ts">
import type { TableColumnCtx } from "element-plus";

const { menuList, menuOptionList } = useMenu();
const { toggleDialog } = useDialogStore();

const formatter = (row: any, column: TableColumnCtx<any>) => {
  return row[column.property] === "Y" ? "사용" : "미사용";
};
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-md p-4">
    <div class="pt-2 pb-6 flex justify-end items-center">
      <el-button type="primary" @click="toggleDialog">신규 등록</el-button>
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
      <el-table-column
        prop="useYn"
        label="사용여부"
        align="center"
        :formatter="formatter"
      />
      <el-table-column prop="url" label="URL" align="center" />
      <el-table-column prop="remark" label="비고" align="center" />
    </el-table>
    <Dialog title="메뉴 등록" width="450px">
      <div class="">
        <el-form
          ref="ruleFormRef"
          label-position="left"
          label-width="100px"
          size="large"
          class="w-[320px]"
        >
          <el-form-item label="메뉴명" prop="memberId">
            <el-input placeholder="아이디를 입력해주세요" clearable />
          </el-form-item>
          <el-form-item label="상위메뉴" prop="password">
            <el-tree-select
              placeholder="상위메뉴"
              :data="menuOptionList"
            ></el-tree-select>
          </el-form-item>

          <el-form-item label="LNB" class="mgB8 basic">
            <el-radio-group class="ml-4">
              <el-radio :label="'Y'" size="large" class="basic">
                노출
              </el-radio>
              <el-radio :label="'N'" size="large" class="basic">
                미노출
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="사용여부" class="mgB8 basic">
            <el-radio-group class="ml-4">
              <el-radio :label="'Y'" size="large" class="basic">
                사용
              </el-radio>
              <el-radio :label="'N'" size="large" class="basic">
                미사용
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
    </Dialog>
  </div>
</template>
