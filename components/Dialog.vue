<script setup lang="ts">
const dialog = useDialogStore();
const { showDialog } = storeToRefs(dialog);

defineProps<{
  title: string;
  width: string | number;
}>();
</script>

<template>
  <Teleport to="body">
    <el-dialog
      v-model="showDialog"
      align-center
      center
      :title="title"
      :width="width"
    >
      <slot />
      <template #footer>
        <el-button @click="dialog.closeDialog">취소</el-button>
        <el-button type="primary">저장</el-button>
      </template>
    </el-dialog>
  </Teleport>
</template>
