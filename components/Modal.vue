<script setup lang="ts">
const modal = useModalStore();
const { isOpen, title, width, component, showClose, props } =
  storeToRefs(modal);

const model = reactive({});
const handleClose = () => {
  return;
};
</script>

<template>
  <Teleport to="body">
    <el-dialog
      v-model="isOpen"
      align-center
      center
      :width="width"
      :before-close="showClose ? undefined : handleClose"
      :show-close="showClose"
      style="border-radius: 10px"
    >
      <template #header>{{ title }}</template>
      <component :is="component" v-bind="props" v-model="model"></component>
    </el-dialog>
  </Teleport>
</template>
