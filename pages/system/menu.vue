<script setup lang="ts">
import menuModal from "~/components/system/MenuModal.vue";
import type { TableColumnCtx } from "element-plus";

const { menuList, menuOptionList } = useMenu();
const { openModal } = useModalStore();

const formatter = (row: any, column: TableColumnCtx<any>) => {
  return row[column.property] === "Y" ? "사용" : "미사용";
};

const handleOpenMenuModal = () => {
  const modalProps = { menuOptionList: menuOptionList };
  openModal("메뉴 등록", "450px", menuModal, false, modalProps);
};

const handleOpenMenuDetailModal = (row: any) => {
  const modalProps = { menuInfo: row, menuOptionList: menuOptionList };

  openModal("메뉴 상세", "450px", menuModal, false, modalProps);
};
</script>

<template>
  <div>
    <div class="flex justify-end pb-4 items-center">
      <el-button type="primary" size="large" @click="handleOpenMenuModal">
        메뉴 등록
      </el-button>
    </div>
    <div class="bg-white rounded-md p-4">
      <el-table
        :data="menuList"
        style="width: 100%"
        table-layout="auto"
        row-key="menuId"
        lazy
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        :default-expand-all="true"
      >
        <el-table-column
          prop="menuName"
          label="메뉴명"
          header-align="center"
          align="left"
        >
          <template #default="scope">
            <span
              class="cursor-pointer hover:text-red-600"
              @click="handleOpenMenuDetailModal(scope.row)"
            >
              {{ scope.row.menuName }}
            </span>
          </template>
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
    </div>
  </div>
</template>
