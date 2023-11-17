<script setup lang="ts">
const authStore = useAuthStore();
onMounted(() => {
  authStore.signIn("test_member2", "1234");
});
</script>

<template>
  <div>
    <BasicTable />
  </div>
</template>
