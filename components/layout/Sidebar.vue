<script setup lang="ts">
import { useSidebarStore } from "~/stores/sidebar";
import SidebarItem from "./SidebarItem.vue";

const sidebarStore = useSidebarStore();
</script>

<template>
  <aside class="w-[250px] bg-slate-800 hidden md:block">
    <div class="bg-slate-900 p-2 flex items-center justify-center">
      <img class="w-32" src="@/assets/images/Logo.svg" alt="이지스원 로고" />
    </div>
    <nav class="p-2">
      <template v-for="sidebar in sidebarStore">
        <SidebarItem :item="sidebar" />
      </template>
    </nav>
  </aside>
</template>
