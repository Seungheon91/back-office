<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex flex-row">
    <LayoutSidebar />
    <main
      class="flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in"
    >
      <LayoutHeader />
      <div class="main-content flex flex-col flex-grow p-4">
        <h1 class="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div
          class="flex flex-col flex-grow border-4 border-gray-400 bg-white rounded mt-4"
        >
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
