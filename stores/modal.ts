import { defineStore } from "pinia";

export type ModalAction = {
  label: string;
  callback: (props?: any) => void;
  buttonType:
    | "default"
    | "text"
    | "success"
    | "warning"
    | "info"
    | "primary"
    | "danger";
};

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref<boolean>(false);
  const width = ref<any>("");
  const title = ref<string | undefined | null>("");
  const component = shallowRef({});
  const actions = ref<Array<ModalAction> | undefined>([]);
  const showClose = ref<boolean | undefined>(true);

  const openModal = (
    modalTitle: string,
    modalWidth: any,
    modalComponent: any,
    modalActions: ModalAction[],
    showCloseButton: boolean | undefined
  ) => {
    isOpen.value = true;
    title.value = modalTitle;
    width.value = modalWidth;
    component.value = markRaw(modalComponent);
    actions.value = modalActions;
    showClose.value = showCloseButton;
  };

  const closeModal = () => {
    isOpen.value = false;

    setTimeout(() => {
      title.value = "";
      width.value = "";
      actions.value = [];
      showClose.value = true;
    }, 500);
  };

  return {
    isOpen,
    title,
    width,
    component,
    actions,
    showClose,
    openModal,
    closeModal,
  };
});
