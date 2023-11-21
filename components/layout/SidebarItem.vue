<script setup lang="ts">
import type { Menu } from "~/types/menu";

defineProps<{ menu: Menu }>();
</script>

<template>
  <!-- 서브 메뉴가 있는 경우 -->
  <el-sub-menu v-if="menu.submenus.length > 0" :index="menu.index">
    <template #title>
      <Icon :name="menu.icon" size="20" />
      <span class="ml-3">{{ menu.name }}</span>
    </template>
    <el-menu-item-group v-for="submenu in menu.submenus" class="ml-3 mr-3">
      <NuxtLink :to="submenu.url">
        <el-menu-item :index="submenu.index">{{ submenu.name }}</el-menu-item>
      </NuxtLink>
    </el-menu-item-group>
  </el-sub-menu>

  <!-- 서브 메뉴가 없는 경우 -->
  <el-menu-item v-else :index="menu.index">
    <NuxtLink :to="menu.url" class="block w-full">
      <Icon :name="menu.icon" size="20" />
      <span class="ml-3">{{ menu.name }}</span>
    </NuxtLink>
  </el-menu-item>
</template>
