<script setup lang="ts"></script>

<template>
  <div class="w-full h-full flex">
    <!-- 사이드바 -->
    <LayoutSidebar class="w-52 flex-col hidden bg-slate-800 lg:w-64 lg:flex" />

    <!-- 메인 -->
    <main class="flex flex-col w-full">
      <!-- 헤더 -->
      <LayoutHeader />

      <LayoutBreadcrumb />
      <!-- 컨텐츠 -->
      <el-scrollbar class="w-full px-8 py-4 bg-slate-100 overflow-auto">
        <slot></slot>
      </el-scrollbar>
    </main>
  </div>
</template>
