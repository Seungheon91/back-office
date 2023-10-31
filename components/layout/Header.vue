<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <header class="bg-white p-2 border-b-2">
    <div class="flex justify-between">
      <div>
        <el-input class="w-50 p-2" placeholder="Search" :suffix-icon="Search" />
      </div>
      <div
        class="flex flex-row justify-center items-center pr-2 cursor-pointer"
      >
        <el-avatar class="mr-2">
          <Icon name="ic:sharp-perm-identity" size="22" />
        </el-avatar>
        <!-- Todo: 드롭다운 hover border 효과 제거 -->
        <el-dropdown>
          <span class="text-md">
            Seung Heon
            <Icon name="ic:round-keyboard-arrow-down" size="22" />
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <Icon
                  name="ic:baseline-manage-accounts"
                  size="22"
                  class="mr-1"
                />
                마이페이지
              </el-dropdown-item>
              <el-dropdown-item>
                <Icon name="ic:baseline-log-out" size="22" class="mr-1" />
                로그아웃
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </header>
</template>
