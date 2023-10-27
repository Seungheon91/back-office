<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen flex">
    <LayoutSidebar />
    <div class="flex-col w-full">
      <LayoutHeader />
      <main class="p-6"><slot /></main>
    </div>
  </div>
</template>
