<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center pb-4">
      <div class="w-80">
        <el-input
          placeholder="단지코드 또는 단지명을 입력해주세요."
          size="large"
          :suffix-icon="Search"
        />
      </div>
      <el-button type="primary" size="large">신규 등록</el-button>
    </div>

    <div
      class="flex flex-col items-center justify-center gap-9 bg-white p-4 rounded-md"
    >
      <el-table highlight-current-row table-layout="auto">
        <el-table-column
          header-align="center"
          align="center"
          label="구분"
          prop="serviceCode"
        />
        <el-table-column
          header-align="center"
          align="center"
          label="단지코드"
          prop="aptCode"
        />
        <el-table-column
          header-align="center"
          align="left"
          label="단지명"
          class-name="pdL20"
        >
          <template #default="scope">
            {{ scope.row.aptName }}
            <el-popover
              effect="light"
              trigger="hover"
              placement="right"
              popper-class="addr_popOver"
              width="auto"
              :content="scope.row.aptAddress"
            >
              <template #reference>
                <div class="address_toolTip">
                  <div
                    style="
                      font-variation-settings: 'FILL' 1, 'wght' 600, 'GRAD' 0,
                        'opsz' 48;
                    "
                  >
                    <span class="material-symbols-outlined">home</span>
                  </div>
                  주소
                </div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          header-align="center"
          align="center"
          label="전화번호"
          prop="telNo"
        />
        <el-table-column
          header-align="center"
          align="center"
          label="등록일자"
          prop="createdAt"
        />
        <el-table-column
          header-align="center"
          align="center"
          label="수정일자"
          prop="updatedAt"
        />
      </el-table>
      <Pagination :total="20" :page-count="3" />
    </div>
  </div>
</template>
