import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialog", () => {
  const showDialog = ref<boolean>(false);

  const toggleDialog = () => {
    showDialog.value = !showDialog.value;
  };

  const closeDialog = () => {
    showDialog.value = false;
  };

  return { showDialog, toggleDialog, closeDialog };
});
