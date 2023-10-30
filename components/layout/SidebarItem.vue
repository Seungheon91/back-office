<script setup lang="ts">
interface Item {
  index: string;
  name: string;
  url: string;
  icon: string;
  submenu: Array<Isubmenu>;
}

interface Isubmenu {
  index: string;
  url: string;
  name: string;
}

interface Props {
  item: Item;
}

defineProps<Props>();
</script>

<template>
  <!-- 서브 메뉴가 있는 경우 -->
  <el-sub-menu v-if="item.submenu.length > 0" :index="item.index">
    <template #title>
      <Icon :name="item.icon" size="20" />
      <span class="ml-3">{{ item.name }}</span>
    </template>
    <el-menu-item-group v-for="submenu in item.submenu" class="ml-3">
      <NuxtLink :to="submenu.url">
        <el-menu-item :index="submenu.index">{{ submenu.name }}</el-menu-item>
      </NuxtLink>
    </el-menu-item-group>
  </el-sub-menu>

  <!-- 서브 메뉴가 없는 경우 -->
  <el-menu-item v-else :index="item.index">
    <NuxtLink :to="item.url" class="block w-full">
      <Icon :name="item.icon" size="20" />
      <span class="ml-3">{{ item.name }}</span>
    </NuxtLink>
  </el-menu-item>
</template>
