import { defineStore } from "pinia";
import type { UserToken } from "~/types/auth";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const tokenInfo = useCookie("token");

  const signIn = async (memberId: string, password: string) => {
    const { data, error } = await useCustomFetch("/api/login", {
      method: "POST",
      body: { memberId, password },
    });

    if (error.value) {
      alert(error.value.data.message);
      throw error.value;
    }

    //tokenInfo.value = data.value as UserToken;
    setTokenInfo(data.value as UserToken);
  };

  const signOut = async () => {
    await useCustomFetch("/api/logout", {
      method: "POST",
      body: tokenInfo.value,
    });

    alert("로그아웃 되었습니다.");
    reset();
    router.push("/login");
  };

  const setTokenInfo = (tokenInfo: UserToken) => {
    const cookie = useCookie("token", {
      maxAge: 60 * 24 * 28,
      sameSite: true,
      secure: true,
    });

    cookie.value = JSON.stringify(tokenInfo);
  };

  const reissue = async () => {
    const { data, error } = await useCustomFetch("/api/reissue", {
      method: "POST",
      body: tokenInfo.value,
    });

    if (error.value) {
      alert(error.value.data.message);
      throw error.value;
    }

    //tokenInfo.value = data.value as UserToken;
    setTokenInfo(data.value as UserToken);
  };

  const reset = () => {
    const cookie = useCookie("token");

    tokenInfo.value = null;
    cookie.value = null;
  };

  return {
    tokenInfo,
    signIn,
    signOut,
    setTokenInfo,
    reissue,
  };
});
