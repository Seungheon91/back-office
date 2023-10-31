export default defineNuxtRouteMiddleware((to) => {
  const menuStore = useMenuStore();

  menuStore.getMenuName(to.path);
});
