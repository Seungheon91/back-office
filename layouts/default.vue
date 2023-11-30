<script setup lang="ts"></script>

<template>
  <div class="w-full h-full flex">
    <!-- 사이드바 -->
    <LayoutSidebar />

    <!-- 메인 -->
    <main class="flex flex-col flex-grow w-full">
      <!-- 헤더 -->
      <LayoutHeader />

      <!-- 컨텐츠 -->
      <el-scrollbar class="px-4 pb-4 bg-slate-100 overflow-auto w-full">
        <div class="flex flex-col flex-grow">
          <LayoutContentHeader />
          <slot></slot>
        </div>
      </el-scrollbar>
    </main>
  </div>
</template>
