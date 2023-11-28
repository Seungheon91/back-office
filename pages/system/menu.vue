<script setup lang="ts">
import menuModal from "~/components/system/MenuModal.vue";
import type { TableColumnCtx } from "element-plus";

const { menuList, setMenuInfo } = useMenu();
const { openModal, closeModal } = useModalStore();

const formatter = (row: any, column: TableColumnCtx<any>) => {
  return row[column.property] === "Y" ? "사용" : "미사용";
};

const handleOpenMenuModal = () => {
  openModal(
    "메뉴 등록",
    "450px",
    menuModal,
    [
      {
        label: "등록",
        callback: (data) => {
          console.log(data);
          closeModal();
        },
        buttonType: "primary",
      },
    ],
    false
  );
};

const handleOpenMenuDetailModal = (row: any) => {
  setMenuInfo(row);
  openModal(
    "메뉴 상세",
    "450px",
    menuModal,
    [
      {
        label: "저장",
        callback: (data) => {
          console.log(data);
          closeModal();
        },
        buttonType: "primary",
      },
    ],
    false
  );
};
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-md p-4">
    <div class="pt-2 pb-6 flex justify-end items-center">
      <el-button type="primary" @click="handleOpenMenuModal">
        메뉴 등록
      </el-button>
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
</template>
