<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";

const menuStore = useMenuStore();
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="flex items-center py-4">
    <el-breadcrumb-item :to="{ path: '/' }">
      <Icon name="ic:outline-home" size="20" />
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="menuName in menuStore.menuNames">
      {{ menuName }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
