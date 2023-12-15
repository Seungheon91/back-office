import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const isOpen = ref<boolean>(false);
  const width = ref<any>("");
  const title = ref<string | undefined | null>("");
  const component = shallowRef<object | undefined | null>(null);
  const showClose = ref<boolean | undefined>(true);
  const props = ref<object | undefined | null>({});

  const openModal = (
    modalTitle: string,
    modalWidth: any,
    modalComponent: object,
    showCloseButton?: boolean,
    modalProps?: object
  ) => {
    isOpen.value = true;
    title.value = modalTitle;
    width.value = modalWidth;
    component.value = markRaw(modalComponent);
    showClose.value = showCloseButton;
    props.value = modalProps;
  };

  const closeModal = () => {
    isOpen.value = false;

    // 모달 닫힐때 잔상으로 인해서 데이터 늦게 지움
    setTimeout(() => {
      width.value = "";
      title.value = "";
      showClose.value = true;
      component.value = null;
      props.value = null;
    }, 500);
  };

  return {
    isOpen,
    title,
    width,
    component,
    showClose,
    props,
    openModal,
    closeModal,
  };
});
