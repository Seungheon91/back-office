export default defineNuxtRouteMiddleware((to) => {
  const menuStore = useMenuStore();

  menuStore.setMenuNames(to.path);
});
