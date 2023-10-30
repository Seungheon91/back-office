<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
</script>

<template>
  <div class="min-h-screen flex flex-row">
    <!-- 사이드바 -->
    <LayoutSidebar />

    <!-- 메인 -->
    <main
      class="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
    >
      <!-- 헤더 -->
      <LayoutHeader />

      <!-- 컨텐츠 -->
      <div class="flex flex-col flex-grow px-4 bg-slate-100">
        <el-breadcrumb
          :separator-icon="ArrowRight"
          class="flex items-center py-4"
        >
          <el-breadcrumb-item :to="{ path: '/' }">
            <Icon name="ic:outline-home" size="20" />
          </el-breadcrumb-item>
          <el-breadcrumb-item>권한관리</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="flex flex-col flex-grow bg-white rounded-md p-4">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
