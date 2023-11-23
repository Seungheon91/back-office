<script setup lang="ts">
import SidebarItem from "./SidebarItem.vue";

const menuStore = useMenuStore();
</script>

<template>
  <aside class="w-64 hidden md:flex flex-col bg-slate-800">
    <NuxtLink to="/">
      <div class="bg-slate-900 p-2 flex items-center justify-center">
        <img class="w-32" src="@/assets/images/Logo.svg" alt="이지스원 로고" />
      </div>
    </NuxtLink>

    <nav class="p-2 h-full">
      <el-scrollbar>
        <el-menu
          active-text-color="#FFFFFF"
          background-color="#1E293B"
          text-color="#bbbfbc"
        >
          <SidebarItem v-for="menu in menuStore.menus" :menu="menu" />
        </el-menu>
      </el-scrollbar>
    </nav>
  </aside>
</template>

<style scoped>
.el-menu {
  border-right: none;
}
.el-menu :hover {
  color: white;
}
</style>
