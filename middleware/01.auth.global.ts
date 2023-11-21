export default defineNuxtRouteMiddleware(async (to) => {
  await nextTick();
  const tokenInfo = useCookie("token");

  // 로그인 이외의 페이지에서 인증 토큰 있는지 체크
  if (to.path !== "/login") {
    if (!tokenInfo.value) {
      console.log("auth middleware token empty", tokenInfo.value);
      return navigateTo("/login");
    }
  }
});
