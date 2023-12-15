<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <header class="bg-white px-8 py-3 border-b-2">
    <div class="flex justify-between lg:justify-end">
      <div class="flex justify-center items-center lg:hidden">
        <Icon name="ic:baseline-menu" size="22" />
      </div>
      <div class="flex justify-center items-center pr-2 cursor-pointer">
        <el-avatar class="mr-2">
          <Icon name="ic:sharp-perm-identity" size="22" />
        </el-avatar>
        <el-dropdown trigger="click">
          <span class="text-md hover:border-none">
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
              <el-dropdown-item @click="authStore.signOut">
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

<style>
.el-dropdown span {
  border: none;
}
</style>
