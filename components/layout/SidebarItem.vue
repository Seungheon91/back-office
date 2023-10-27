<script setup lang="ts">
interface Item {
  index: string;
  name: string;
  url: string;
  icon: string;
  submenu: Array<subMenu>;
}

interface subMenu {
  index: string;
  name: string;
  url: string;
}

interface Props {
  item: Item;
}

defineProps<Props>();
</script>

<template>
  <!-- <template v-if="item.submenu.length > 0">
    <el-sub-menu :index="item.index">
      <template #title>
        <el-icon>{{ item.icon }}</el-icon>
      </template>
    </el-sub-menu>
  </template> -->
</template>
