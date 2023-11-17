import { defineStore } from "pinia";
import type { UserToken } from "~/types/auth";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const router = useRouter();
    const tokenInfo = ref<UserToken | undefined | null>();

    const signIn = async (memberId: string, password: string) => {
      const { data, error } = await useCustomFetch("/login", {
        method: "POST",
        body: { memberId, password },
      });

      if (error.value) {
        alert(error.value.data.message);
        throw error.value;
      }

      tokenInfo.value = data.value as UserToken;
    };

    const signOut = async () => {
      await useCustomFetch("/logout", {
        method: "POST",
        body: tokenInfo.value,
      });

      alert("로그아웃 되었습니다.");
      reset();
      router.push("/login");
    };

    const reset = () => {
      tokenInfo.value = null;
    };

    return {
      tokenInfo,
      signIn,
      signOut,
    };
  },
  {
    persist: {
      storage: persistedState.localStorage,
      key: "aegis-auth",
    },
  }
);
