<script setup lang="ts">
import type { Menu } from "~/types/menu";

defineProps<{ menu: Menu }>();
</script>

<template>
  <!-- 서브 메뉴가 있는 경우 -->
  <el-sub-menu v-if="menu.submenus.length > 0" :index="menu.index">
    <template #title>
      <div class="flex justify-center items-center">
        <Icon :name="menu.icon" size="20" />
        <span class="text-base font-bold pl-3">{{ menu.name }}</span>
      </div>
    </template>
    <NuxtLink v-for="submenu in menu.submenus" :to="submenu.url">
      <el-menu-item class="mx-3" :index="submenu.index">{{
        submenu.name
      }}</el-menu-item>
    </NuxtLink>
  </el-sub-menu>

  <!-- 서브 메뉴가 없는 경우 -->
  <NuxtLink v-else :to="menu.url">
    <el-menu-item :index="menu.index">
      <div class="flex justify-center items-center">
        <Icon :name="menu.icon" size="20" />
        <span class="text-base font-bold pl-3">{{ menu.name }}</span>
      </div>
    </el-menu-item>
  </NuxtLink>
</template>
