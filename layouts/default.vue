<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen flex">
    <!-- 사이드바 -->
    <LayoutSidebar />

    <!-- 메인 -->
    <main class="flex flex-col flex-grow w-full">
      <!-- 헤더 -->
      <LayoutHeader />

      <!-- 컨텐츠 -->
      <div class="flex flex-col flex-grow px-4 pb-4 bg-slate-100">
        <LayoutContentHeader />

        <div class="flex flex-col flex-grow bg-white rounded-md p-4">
          <slot></slot>
        </div>
      </div>
    </main>
  </div>
</template>
