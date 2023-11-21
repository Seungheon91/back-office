<script setup lang="ts">
const columns = ["메뉴명", "사용여부", "URL", "비고"];
</script>

<template>
  <div class="flex flex-col flex-grow bg-white rounded-md p-4">
    <div></div>
    <Table :columns="columns" align="center" />
  </div>
</template>
