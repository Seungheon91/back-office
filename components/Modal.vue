<script setup lang="ts">
const modal = useModalStore();
const { isOpen, title, width, component, actions, showClose } =
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
    >
      <template #header>{{ title }}</template>
      <component :is="component" v-model="model"></component>
      <template #footer>
        <el-button @click="modal.closeModal">취소</el-button>
        <el-button
          v-for="action in actions"
          :type="action.buttonType"
          @click="action.callback(model)"
        >
          {{ action.label }}
        </el-button>
      </template>
    </el-dialog>
  </Teleport>
</template>
