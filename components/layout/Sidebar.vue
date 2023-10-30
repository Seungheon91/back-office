<script setup lang="ts">
import { useSidebarStore } from "~/stores/sidebar";
import SidebarItem from "./SidebarItem.vue";

const sidebarStore = useSidebarStore();
</script>

<template>
  <aside
    class="w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-slate-800"
  >
    <div class="bg-slate-900 p-2 flex items-center justify-center">
      <img class="w-32" src="@/assets/images/Logo.svg" alt="이지스원 로고" />
    </div>
    <nav class="p-2">
      <!-- backgournd color: #1E293B -->
      <el-scrollbar>
        <el-menu background-color="#1E293B" text-color="#fff">
          <SidebarItem v-for="sidebar in sidebarStore.items" :item="sidebar" />
        </el-menu>
      </el-scrollbar>
    </nav>
  </aside>
</template>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
