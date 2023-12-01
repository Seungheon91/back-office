<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="flex flex-col">
      <div class="flex justify-between items-center py-4">
        <h3>권한목록</h3>
        <el-button type="primary" size="large">신규등록</el-button>
      </div>
      <div class="bg-white rounded-md p-2">
        <el-table
          center
          lazy
          default-expand-all
          highlight-current-row
          row-key="rowKey"
          table-layout="auto"
          :tree-props="{ children: 'authList', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="roleName" label="권한명" header-align="center">
          </el-table-column>
          <el-table-column prop="useYn" label="사용여부" align="center" />
          <el-table-column prop="detail" label="상세보기" align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="flex flex-col col-span-2">
      <div class="flex justify-between items-center py-4">
        <h3>메뉴목록</h3>
        <el-button type="danger" size="large" round>전체 설정 저장</el-button>
      </div>
      <div class="bg-white rounded-md p-2">
        <el-table
          :default-expand-all="true"
          row-key="menuId"
          lazy
          table-layout="auto"
          :tree-props="{ children: 'childMenu', hasChildren: 'hasChildren' }"
        >
          <el-table-column
            prop="menuName"
            label="메뉴명"
            header-align="center"
            align="left"
          />

          <el-table-column
            prop="readYn"
            label="읽기"
            header-align="center"
            align="center"
          >
            <template #default="scope"></template>
          </el-table-column>

          <el-table-column
            prop="writeYn"
            label="쓰기"
            header-align="center"
            align="center"
          >
            <template #default="scope"> </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
